import { Item, LanguageKey, Molang } from "peanut-framework";

/**
 * Class that creates a Custom Pickaxe item.
 * @param identifier The string that is used in-game to identify the pickaxe item.
 * @param icon Icon to display for the pickaxe item in-game.
 * @param displayName Optional (but recommended), the string to show up as the display name of the item in-game.
 * @param options Configuration options for pickaxe properties.
 * @param language Optional, the language the display name originates from. Defaults to `en_US`.
 * ### Example
 * ```ts
 * new Pickaxe("peanut:pickaxe", { name: "peanut", path: "items/peanut" }, "Example Pickaxe", { destroySpeeds: 20, durability: 100 })
 * ```
 * ### Options
 * @param destroySpeeds Can either be a number defining how fast the pickaxe breaks stone blocks (higher numbers indicate faster break speed) or an array of break speed definitions.
 * @example ```
 * 10
 * [{ block: "diamond_ore", speed: 10, }]
 * [{ block: { tags: "q.any_tag('stone')" }, speed: 10, }]
 * ```
 * @param durability Can either be a number defining the pickaxe's maximum durability or durability options.
 * @example ```
 * 100
 * { maxDurability: 100, damageChance: { min: 20, max: 50 } }
 * ```
 * @param attackDamage Number of damage the pickaxe does when attacking.
 * @example ```
 * 2
 * ```
 * @param rarity Rarity to use for the pickaxe, which affects the color of the pickaxe's display name.
 * @example ```
 * "rare"
 * ```
 * @repairItems An array of items that can be used to repair this item in an anvil.
 * @example ```
 * [{ items: ["diamond"], repair_amount: 25 }]
 * ```
 */
export class Pickaxe extends Item {
  constructor(
    identifier: string,
    icon:
      | string
      | {
          name: string;
          path: string;
          options?: {
            dyed?: string;
            icon_trim?: string;
          };
        },
    displayName?: string,
    options?: {
      destroySpeeds?:
        | number
        | {
            block: string | { tags: string };
            speed: number;
          }[];
      durability?:
        | number
        | {
            maxDurability: number;
            damageChance?: { min: number; max: number };
          };
      attackDamage?: number;
      rarity?: "common" | "uncommon" | "rare" | "epic";
      repairItems?: {
        items: string[];
        repair_amount: number | string | Molang;
      }[];
    },
    language?: LanguageKey
  ) {
    super(identifier, displayName, language);
    this.damage(options?.attackDamage ?? 2)
      .rarity(options?.rarity ?? "rare")
      .repairable(options?.repairItems ?? [])
      .enchantable("pickaxe", 10)
      .handEquipped(true)
      .maxStackSize(1)
      .menuCategory({ category: "equipment", group: "itemGroup.name.pickaxe" })
      .customComponent(["palm:custom_pickaxe"])
      .tag(["minecraft:is_pickaxe", "minecraft:is_tool"]);
    if (typeof icon === "string")
      this.icon(identifier.substring(identifier.indexOf(":") + 1), icon);
    else this.icon(icon.name, icon.path, icon.options);
    if (typeof options?.destroySpeeds === "number")
      this.digger(true, [
        {
          block: { tags: "q.any_tag('stone')" },
          speed: options?.destroySpeeds,
        },
      ]);
    else this.digger(true, options?.destroySpeeds ?? []);
    if (typeof options?.durability === "number")
      this.durability(options.durability);
    else
      this.durability(
        options?.durability?.maxDurability ?? 1,
        options?.durability?.damageChance
      );
  }
}
