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

The new code is recommended to be bundled before debugging.


**Step 8 (Optional).** Start Reactjs application with PM2 as a service (only works if you are using Node v13.9.0 or above.)

8.1) Installing Node and NPM

```sh
$ curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
$ sudo yum install nodejs
$ node --version  #v14.16.1
$ npm --version   #6.14.12
$ which node babel-node #check the location of node and babel-node
```


8.2) Installing PM2. With NPM

```sh
$ sudo npm install pm2@latest -g
```


8.3) Install Babel globally on your machine

```sh
$ sudo npm install -g babel-cli
$ sudo npm install -g @babel/core @babel/cli @babel/preset-env 
```


8.4) Frequently used commands for PM2:

```sh
#into your `"uix-kit-react/"` folder directory.
$ cd /{your_directory}/uix-kit-react


#use babel-node with pm2
$ pm2 start ecosystem.config.js  --interpreter babel-node  

#other commands
$ pm2 restart ecosystem.config.js –-interpreter babel-node
$ pm2 stop ecosystem.config.js
$ pm2 delete ecosystem.config.js
$ pm2 list
$ pm2 logs
```


8.5) Use domain to access your React appication.

You had created a basic React App from here, then you need to deploy a React App on Apache or Nginx web server. Please refer to the network for the tutorial on setting up the proxy.




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


