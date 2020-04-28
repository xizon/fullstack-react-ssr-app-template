# React App SSR Starter


[![Travis CI](https://img.shields.io/travis/xizon/react-app-ssr-starter/master?style=for-the-badge)](https://travis-ci.org/xizon/react-app-ssr-starter/)
[![npm version](https://img.shields.io/npm/v/react-app-ssr-starter?style=for-the-badge)](https://www.npmjs.com/package/react-app-ssr-starter)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge)](LICENSE)



## Demo

Server runs on `http://localhost:3000/index`


## Table of Contents


* [Description](#description)
* [Installation And Test](#installation-and-test)
* [File Structures](#file-structures)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Licensing](#licensing)



## Description

Using react router, axios and express with Server-Side Rendering (SSR). This project was bootstrapped with nodejs library. 


* * *


## Installation And Test

You will need to have [node](https://nodejs.org/) setup on your machine. That will output the built distributables to `./dist/*` and `./public/*[.html|.ejs]`.


**Step 1.** Use NPM (Locate your current directory of project, and enter the following command.) or download the latest version from [Github](https://github.com/xizon/react-app-ssr-starter). For nodejs you have to install some dependencies.

```sh
$ sudo npm install react-app-ssr-starter
```

Or clone the repo to get all source files including build scripts: 

```sh
$ git clone git://github.com/xizon/react-app-ssr-starter.git
```


**Step 2.** First, using an absolute path into your `"react-app-ssr-starter/"` folder directory.

```sh
$ cd /{your_directory}/react-app-ssr-starter
```


**Step 3.** Before doing all dev stuff make sure you have `Node 10+` installed. After that, run the following code in the main directory to install the node module dependencies.

```sh
$ sudo npm install --only=dev --unsafe-perm --production
```


**Step 4.** To use webpack to bundle files.

```sh
$ npm run build
```

**Step 5.** Using `Ctrl + C` to stop webpack.


**Step 6.** Run the Express server only.

```sh
$ npm run dev
```


**Step 7.** When you done, this will spin up a server that can be accessed at

```sh
http://localhost:3000/index
```


### Note:
 
**ERROR: npm update check failed.**

```sh
$ sudo chown -R $USER:$(id -gn $USER) /Users/{username}/.config
```



* * *


## File Structures



```sh

react-app-ssr-starter/
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── babel.config.js
├── webpack.config.js
├── package-lock.json
├── package.json
├── public/
│   ├── index.html
│   └── assets/
├── dist/
│   ├── css/
│   │   ├── app.css
│   │   ├── app.css.map
│   │   ├── app.min.css
│   │   └── app.min.css.map
│   └── js/
│   │   ├── app.js
│   │   ├── app.js.map
│   │   ├── app.min.js
│   │   └── app.min.js.map
├── src/
│   ├── client/
│   │   ├── client.js
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── router/
│   │   └── components/
│   └── server/
│   │   ├── server.js
│   │   └── renderer.js
│   └── store/
│   │   └── createStore.js
└──
```



## Contributing

Finding bugs, sending pull requests or improving our docs - any contribution is welcome and highly appreciated. To get started, head over to our [contribution guidelines](CONTRIBUTING.md). Thanks!


## Changelog

[releases](CHANGELOG.md)



## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT).


