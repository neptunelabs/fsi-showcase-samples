# [FSI Showcase](https://www.neptunelabs.com/fsi-showcase/) &middot; Samples
| ***Pixel-perfect*** | ***High-DPI-ready*** | ***Fast :rocket:*** | ***Hackable*** | ***Consistent*** |
|:-----------------:|:-------------:|:---------------:|:---------------:|:---------------:|

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/neptunelabs/fsi-layers-samples/blob/main/LICENSE)


FSI Showcase

FSI Showcase combines the benefits of the zoom viewer with an image gallery.
FSI Viewer and FSI ThumbBar (or FSI ImageGrid) can be combined for presenting a large number of images in a gallery.
By clicking on an image, it will be opened in the FSI Viewer where every detail can be explored.

This repository contains examples on how to use and build your own applications.

![Project Image](project.gif)

## Getting Started

Without starting this project in your IDE, you can discover, develop and customize
all demos in JSFiddle.

[Simple Showcase in JSFiddle][simpleshowjsf]

[Showcase Grid in JSFiddle][gridshowjsf]

[Product Detail Page with in JSFiddle][pdpshowjsf]

[Vertical Showcase in JSFiddle][verticalshowjsf]

## Start and develop

To run and modify this samples:

#### NPM

```shell
npm install
npm start
```
or

#### Yarn

```shell
yarn
yarn start
```

Now you can customize the demo according to your own preferences or develop something new.

You can find a very simple example to start with in the ``samples/starter`` folder.

## How it works

These examples rely on a framework that uses [Grunt][Grunt], [Browsersync][Browsersync],
[Bootstrap][Bootstrap] and Sass to launch a local server,
replace template variables and pass changes directly to the browser window.

However, these dependencies are generally **not required** for the use of FSI Layers!

## Requirements

To run the demo you do not need your own image server.
If you don't have your own server but still want to use your own images,
you can use an [evaluation copy][Server] indefinitely.
In case of an own server, please copy ``env.yml.dist`` to ``env.yml`` and
change the settings.


## Documentation

Official JS API Docs can be found here: [https://docs.neptunelabs.com/fsi-viewer/latest/fsi-layers][Docs]

[Docs]: https://docs.neptunelabs.com/fsi-viewer/latest/fsi-layers
[Server]: https://www.neptunelabs.com/get/
[Grunt]: https://gruntjs.com/
[Browsersync]: https://browsersync.io/
[Bootstrap]: https://getbootstrap.com/
[simpleshowjsf]: https://jsfiddle.net/gh/get/library/pure/neptunelabs/fsi-jsfiddle-samples/tree/master/fsi-showcase-samples/simple
[gridshowjsf]: https://jsfiddle.net/gh/get/library/pure/neptunelabs/fsi-jsfiddle-samples/tree/master/fsi-showcase-samples/grid
[pdpshowjsf]: https://jsfiddle.net/gh/get/library/pure/neptunelabs/fsi-jsfiddle-samples/tree/master/fsi-showcase-samples/pdp
[verticalshowjsf]: https://jsfiddle.net/gh/get/library/pure/neptunelabs/fsi-jsfiddle-samples/tree/master/fsi-showcase-samples/vertical
