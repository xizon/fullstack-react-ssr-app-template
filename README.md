# Full-Stack React SSR Application Template

This repository is a full-stack sample web application based on React+TypeScript+Babel+Webpack+Jest (+Redux+Express) that creates a simple whole-website architecture with Server-Side Rendering (SSR), and provides the foundational services, components, and plumbing needed to get a basic web application up and running. 

    
## Demo

Server runs on `http://localhost:3000`


## Table of Contents

* [File Structures](#file-structures)
* [Getting Started](#getting-started)
* [Deploy on Custom Server](#deploy-on-custom-server)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Licensing](#licensing)


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




## Getting Started

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


**Step 4.** Commonly used commands:

Debug application. It can be checked separately as TypeScript without compiling and packaging behavior.

```sh
$ npm run check
```

To use webpack to bundle files.

```sh
$ npm run build
```

Run the following commands for local testing and code inspection. You can see that the server is running. (Run the Express server only.). Using `Ctrl + C` to stop it.

```sh
$ npm run dev
```


**Step 5.** When you done, this will spin up a server that can be accessed at

```sh
http://localhost:3000
```

The new code is recommended to be bundled before debugging.


**Step 6 (Optional).** Unit Testing

```sh
$ npm run test
```


<blockquote>
<h3>💡 Note:</h3>
 
**a) ERROR: npm update check failed.**

Solution:

```sh
$ sudo chown -R $USER:$(id -gn $USER) /Users/{username}/.config
```

**b) ERROR: Node sass version 6.x.x is not compatible with ^ 4.x.x.**

Solution:

```sh
$ npm install node-sass@4.14.1
```


**c) If you upgrade the version of Node, please execute the following code:**

```sh
$ sudo npm install
$ sudo npm rebuild node-sass
```
</blockquote>



## Deploy on Custom Server

You can use PM2 to deploy to Nginx server, see the example [poemkit](https://github.com/xizon/poemkit#deploy-on-custom-server)



## Contributing

Finding bugs, sending pull requests or improving our docs - any contribution is welcome and highly appreciated. To get started, head over to our [contribution guidelines](CONTRIBUTING.md). Thanks!


## Changelog

[releases](CHANGELOG.md)


## Supported development environment

- React 17 +
- TypeScript 4.x.x + 
- Babel 7.x.x + 
- Webpack 5.x.x
- Jest 27.x.x
- Express 4.x.x



## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT).


