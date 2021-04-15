# React App SSR Starter


[![Travis CI](https://img.shields.io/travis/xizon/react-app-ssr-starter/master?style=for-the-badge)](https://travis-ci.org/xizon/react-app-ssr-starter/)
[![npm version](https://img.shields.io/npm/v/react-app-ssr-starter?style=for-the-badge)](https://www.npmjs.com/package/react-app-ssr-starter)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge)](LICENSE)



## Demo

Server runs on `http://localhost:3000`


## Table of Contents


* [Description](#description)
* [Installation And Test](#installation-and-test)
* [File Structures](#file-structures)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Licensing](#licensing)



## Description

Using react, redux, router, axios and express with Server-Side Rendering (SSR). This project was bootstrapped with nodejs library. Project supports automatic deployments from a number of repository hosting services via pm2.


* * *


## Installation And Test

You will need to have [node](https://nodejs.org/) setup on your machine. That will output the built distributables to `./dist/*` and `./public/*.html`.


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
$ sudo npm install
```


**Step 4.** To use webpack to bundle files.

```sh
$ npm run build
```

**Step 5.** Using `Ctrl + C` to stop webpack.


**Step 6.** Finally, let's enter the code below. You can see that the server is running. (Run the Express server only.)

```sh
$ npm run dev
```


**Step 7.** When you done, this will spin up a server that can be accessed at

```sh
http://localhost:3000
```

**Step 8 (Optional).** Start Reactjs application with PM2 as a service (only works if you are using Node v13.9.0 or above.)


8.1) Installing PM2. With NPM

```sh
$ npm install pm2@latest -g
```


8.2) Frequently used commands:

```sh
#into your `"react-app-ssr-starter/"` folder directory.
$ cd /{your_directory}/react-app-ssr-starter

#install Babel globally on your machine
$ sudo npm install -g @babel/core @babel/cli @babel/preset-env 

#use babel-node with pm2
$ pm2 start ecosystem.config.js  --interpreter babel-node  

#other commands
$ pm2 stop ecosystem.config.js
$ pm2 delete ecosystem.config.js
$ pm2 list
$ pm2 logs
```



### Note:
 
**a) ERROR: npm update check failed.**

```sh
$ sudo chown -R $USER:$(id -gn $USER) /Users/{username}/.config
```

**b) If you upgrade the version of Node, please execute the following code:**

```sh
$ sudo npm install
$ sudo npm rebuild node-sass
```



* * *


## File Structures



```sh

react-app-ssr-starter/
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── ecosystem.config.js  #for pm2
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
│   │   ├── components/   #Independent React components
│   │   ├── views/
│   │   │   ├── _pages/
│   │   │   └── _html/
│   └── server/
│   │   ├── app.js
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


