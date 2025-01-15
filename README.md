# Custom Pickaxe Plugin
 Plugin for **[Peanut Framework](https://github.com/palmmc/Peanut-Framework)** that adds a Pickaxe class for creating custom pickaxes.

## Example Usage
```ts
new Pickaxe(
  "peanut:cosmium_pickaxe",
  "items/cosmium_pickaxe",
  "Cosmium Pickaxe",
  {
    destroySpeeds: 10,
    durability: 100,
    repairItems: [
      {
        items: ["minecraft:diamond"],
        repair_amount: 25,
      },
    ],
  }
)
```
