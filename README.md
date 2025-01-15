# Custom Pickaxe Plugin
 Plugin for **[Peanut Framework](https://github.com/palmmc/Peanut-Framework)** that adds a Pickaxe class for creating custom pickaxes.

> [!IMPORTANT]
> To ensure your pickaxe has **durability**, be sure to verify the following:
> - Your manifest includes script module and dependency.
> 
>   ```ts
>   project.manifest.properties({
>   ...
>     dependencies: {
>       server: {}
>     },
>     modules: {
>       scripts: {
>          entry: "main.js",
>       },
>     },
>   ...
>   });
>   ```
> - Make sure the '`./components/customPickaxe`' script is imported into your entry script (default: `main.js`)
> 
>   ```ts
>   import "./components/customPickaxe"
>   ```
>
> - Make sure Beta APIs are enabled in your world settings.

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
