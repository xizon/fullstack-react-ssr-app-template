# Full-Stack React SSR Application Template

This repository is a full-stack sample web application based on React+TypeScript+Babel+Webpack+Jest (+Redux+Express) that creates a simple whole-website architecture with Server-Side Rendering (SSR), and provides the foundational services, components, and plumbing needed to get a basic web application up and running. 

    
## Demo

Server runs on `http://localhost:3000`


## Table of Contents


* [Description](#description)
* [Installation And Test](#installation-and-test)
* [File Structures](#file-structures)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Licensing](#licensing)


## Installation And Test

You will need to have [node](https://nodejs.org/) setup on your machine. That will output the built distributables to `./dist/*` and `./public/*.html`.


**Step 1.** Use NPM (Locate your current directory of project, and enter the following command.) or download the latest version from [Github](https://github.com/xizon/fullstack-react-ssr-app-template). For nodejs you have to install some dependencies.

```sh
$ sudo npm install fullstack-react-ssr-app-template
```

Or clone the repo to get all source files including build scripts: 

```sh
$ git clone git://github.com/xizon/fullstack-react-ssr-app-template.git
```


**Step 2.** First, using an absolute path into your `"fullstack-react-ssr-app-template/"` folder directory.

```sh
$ cd /{your_directory}/fullstack-react-ssr-app-template
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

8.1) Installing Node and NPM on hosting server **(Optional).**

Node14+ version will be installed here

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
#into your `"fullstack-react-ssr-app-template/"` folder directory.
$ cd /{your_directory}/fullstack-react-ssr-app-template


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



**Step 9 (Optional).** Unit Testing

```sh
$ npm run test
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

fullstack-react-ssr-app-template/
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── ecosystem.config.js  #for pm2
├── babel.config.js
├── webpack.config.js
├── package-lock.json
├── package.json
├── test/
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


## Supported development environment

- Supports React 17 +
- Supports TypeScript 4.x.x + 
- Supports Babel 7.x.x + 
- Supports Webpack 5.x.x



## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT).


