# Course - Rocketseat Starter - Javascript ES6
Rocketseat is a developer education platform focused on new technologies.

See more: [Rocketseat Starter](https://rocketseat.com.br/)

## Installation
Installation of `NODEJS`
``` sh
$ sudo apt-get install nodejs
```

Installation of `YARN`
``` sh
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update && sudo apt-get install yarn
```

## IDE
Visual Studio Code - [Download](https://code.visualstudio.com/Download)

Download the visual studio code and install in your computer
``` sh
$ dpkg -i code.deb
```

Settings
``` json
{
    "editor.minimap.enabled": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "editor.tabSize": 2,
    "editor.fontSize": 14,
    "editor.lineHeight": 24,
    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true,
    "files.autoSave": "off",
    "workbench.colorTheme": "Dracula"
}
```

`Extensions` of visual studio code: 

- [Theme Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Rocketseat ReactJS](https://marketplace.visualstudio.com/items?itemName=rocketseat.RocketseatReactJS)
- [Rocketseat React Native](https://marketplace.visualstudio.com/items?itemName=rocketseat.RocketseatReactNative)
- [FiraCode](https://github.com/tonsky/FiraCode)

## Tools
- [INSOMNIA](https://support.insomnia.rest/article/23-installation#ubuntu)
- [MONGODB COMPASS](https://www.mongodb.com/products/compass)

## Database
In this project we will use `mongodb` with `atlas`
- See more: [Mongodb Atlas](https://www.mongodb.com/cloud/atlas)

## Course - JavaScript ES6

Project Initialization:
- Just run the command below

``` sh
$ yarn init -y
```

Dependencies:
Adding `babel` to the project
``` sh
$ yarn add @babel/cli
```

Adding `preset-env` to the project
``` sh
$ yarn add @babel/preset-env
```

Adding `core` to the project
``` sh
$ yarn add @babel/core
```

Adding `plugin-proposal-object-rest-spread` to the project
``` sh
$ yarn add @babel/plugin-proposal-object-rest-spread
```

Adding `webpack webpack-cli` to the project
``` sh
$ yarn add webpack webpack-cli -D
```

Adding `babel-loader` to the project
``` sh
$ yarn add babel-loader -D
```

Adding `babel-loader@8.0.0-beta.0` to the project
``` sh
$ yarn add babel-loader@8.0.0-beta.0 -D
```

Adding `webpack-dev-server` to the project
``` sh
$ yarn add webpack-dev-server -D
```

Adding `plugin-transform-async-to-generator` to the project
``` sh
$ yarn add @babel/plugin-transform-async-to-generator -D
```

Adding `polyfill` to the project
``` sh
$ yarn add @babel/polyfill -D
```

Adding `axios` to the project
``` sh
$ yarn add axios
```

### About project
See more: [Rocketseat Starter](https://rocketseat.com.br/)

### Copyright
[Danilo Righetto](https://www.linkedin.com/in/danilo-righetto/)
