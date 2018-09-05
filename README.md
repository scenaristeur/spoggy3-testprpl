
# Spoggy3
Une Pwa / Webapp ES6 basée sur [Polymer 3](https://www.polymer-project.org/3.0/docs/devguide/feature-overview) avec les modules [prpl-server](https://github.com/Polymer/prpl-server) / express pour nodejs.


Prerequis nodejs > 10
# Installation

```
git clone https://github.com/scenaristeur/spoggy3.git
cd spoggy3
npm install
```

# Execution
- serveur local :
```
npm start
```
- serveur local sur un autre port :
```
npm start -- --hostname 0.0.0.0 --port 4444
```
- tests :
```
npm run test
```

Available scripts (https://polymer.github.io/pwa-starter-kit/setup/)
In the app’s root directory you can run:

npm start to run the application in development mode.
npm run test to run the application’s unit and integration tests (see the see the testing section for more details. To run just the unit or integration tests, both npm run test:unit and npm run test:integration are available.
npm run build to build your application for production (see the building and deploying section for more details).
npm run serve:static or npm run serve:prpl-server to serve the built application (see the building and deploying section for more details).
The complete list of scripts can be found in the package.json file.



# Building for prpl-server
To run the build:
```
npm run build:prpl-server
```
This will populate the server/build/ directory:

```
server/
├── build/
|   └── es5-bundled/
|   └── es6-bundled/
|   └── esm-bundled/
|   └── polymer.json
├── app.yaml
├── package-lock.json
└── package.json
```

# Previewing prpl-server
To preview the build using prpl-server locally:
```
npm run serve:prpl-server
```
#Deploying prpl-server
After building, the contents of server/ contains all the files and configuration necessary to run the app in production. The provided server/package.json specifies server dependencies and the start command which can be used on almost any hosting service that supports Node.js.

--------------------
socket.io https://github.com/chanlito/socket.io-controllers
https://github.com/Polymer/pwa-starter-kit/issues/121
visjs import : https://stackoverflow.com/questions/42007419/angular2-how-to-import-visjs

npm install && cd server && npm install && cd ..
dev : npm start

build static : npm run build:prpl-server

run static : npm run serve:prpl-server-express

------------------

[![Built with pwa–starter–kit](https://img.shields.io/badge/built_with-pwa–starter–kit_-blue.svg)](https://github.com/Polymer/pwa-starter-kit "Built with pwa–starter–kit")
[![Build status](https://api.travis-ci.org/Polymer/pwa-starter-kit.svg?branch=master)](https://travis-ci.org/Polymer/pwa-starter-kit)

> ## 🛠 Status: In Development
> PWA Starter Kit is currently in development. It's on the fast track to a 1.0 release, so we encourage you to use it and give us your feedback, but there are things that haven't been finalized yet and you can expect some changes.
>
> See the list of Known Issues and TODOs, below, for updates.

# PWA Starter Kit

This sample app is a starting point for building PWAs. Out of the box, the template
gives you the following features:
- all the PWA goodness (manifest, service worker)
- a responsive layout
- application theming
- example of using Redux for state management
- offline UI
- simple routing solution
- fast time-to-interactive and first-paint through the PRPL pattern
- easy deployment to prpl-server or static hosting
- unit and integrating testing starting points
- documentation about other advanced patterns.

### 📖 Head over to the [documentation site](https://polymer.github.io/pwa-starter-kit/) for more details or check out [how to get started](https://polymer.github.io/pwa-starter-kit/setup/)!

![pwa-starter-kit screenshot](https://user-images.githubusercontent.com/1369170/39715580-a1be5126-51e2-11e8-8440-96b07be03a3c.png)

## TODOs

- [x] Setup Safari testing on Travis.
- [x] Deploy all templates as demos.
- [ ] Update to latest [Material Web Components](https://github.com/material-components/material-components-web-components).


# Polymer3 lifecycle

Reaction 	Description
constructor 	Called when the element is upgraded (that is, when an element is created, or when a previously-created element becomes defined). The constructor is a logical place to set default values, and to manually set up event listeners for the element itself.
connectedCallback 	Called when the element is added to a document. Can be called multiple times during the lifetime of an element.

Uses include adding document-level event listeners. (For listeners local to the element, you can use annotated event listeners.)
disconnectedCallback 	Called when the element is removed from a document. Can be called multiple times during the lifetime of an element.

Uses include removing event listeners added in connectedCallback.
ready 	Called during Polymer-specific element initialization. Called once, the first time the element is attached to the document. For details, see Polymer element initialization.
attributeChangedCallback 	Called when any of the element's attributes are changed, appended, removed, or replaced.

Use to handle attribute changes that don't correspond to declared properties. (For declared properties, Polymer handles attribute changes automatically as described in attribute deserialization.)

For each reaction, the first line of your implementation must be a call to the superclass constructor or reaction. For the constructor, this is simply the super() call.

constructor() {
  super();
  // …
}

For other reactions, call the superclass method. This is required so Polymer can hook into the element's lifecycle.

connectedCallback() {
  super.connectedCallback();
  // …
}
