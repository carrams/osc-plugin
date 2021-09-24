# OSC SASB Plugin for Chrome

## Introduction

This is the repository for the OSC SASB Chrome plugin. This plugin is under development and is only a skeleton consisting of the major pieces of a chrome plugin. It is built using webpack and react.

### To run in development mode:

$ npm run build

### To run for production (create package to load in chrome extensions tool):

$ npm run build:prod

The build:prod command above will produce the 'dist' folder. That is the folder that will get added in the "Load Unpacked" button in the extensions console: chrome://extensions/

For a full walkthrough of the tutorial used to build this plugin go here:
https://dev.to/anobjectisa/build-a-chrome-extension-using-reactjs-38o7
https://www.youtube.com/watch?v=nvm3c6ilcN8&t=1279s&ab_channel=AnObjectIsA
