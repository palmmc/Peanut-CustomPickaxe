// [!] Make sure scripts are enabled in your manifest.
/*
  dependencies: {
    server: {}
  },
  modules: {
    scripts: {
      entry: "main.js",
    },
  },
*/

// [!] Make sure this script is imported by your entry script.
// import "./components/customPickaxe"

// [!] Make sure Beta APIs are enabled in your world settings.

import {
  EntityEquippableComponent,
  EquipmentSlot,
  ItemComponentMineBlockEvent,
  ItemDurabilityComponent,
  world,
} from "@minecraft/server";

const CustomPickaxeComponent = {
  onMineBlock(event: ItemComponentMineBlockEvent) {
    const item = event.itemStack;
    const durability = <ItemDurabilityComponent>(
      item!!.getComponent("durability")
    );
    durability!!.damage++;

    const equip = <EntityEquippableComponent>(
      event.source.getComponent("equippable")!!
    );
    const hand = equip.getEquipmentSlot(EquipmentSlot.Mainhand);
    hand.setItem(item);
  },
};

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
  itemComponentRegistry.registerCustomComponent(
    "palm:custom_pickaxe",
    CustomPickaxeComponent
  );
});
