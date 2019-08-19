# Course - Rocketseat Starter - React JS
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

To execute "npm" with your user execute the commands below:
``` sh
$ sudo chown -R $(whoami) ~/.npm
$ sudo chown -R $(whoami) /usr/local/lib/node_modules
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

## Course - React JS

Project Initialization:
- Just run the command below
``` sh
$ npm install -g create-react-app
$ create-react-app huntweb
```

To run the project use:
``` sh
$ npm start
```

### About project
See more: [Rocketseat Starter](https://rocketseat.com.br/)

### Copyright
[Danilo Righetto](https://www.linkedin.com/in/danilo-righetto/)
