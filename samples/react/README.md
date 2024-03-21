# Using FSI Showcase with React

If you want to use the FSI Showcase with React (in this example a combination of FSI Viewer and FSI ThumbBar), we recommend that you create an FSI component to ensure that the viewers are initialised correctly.

Simply embedding the viewers as a component may work, but will cause problems as the viewer will be initialised in the shadow DOM and changes will not be recognised.

This sample shows a sample FSI component and how it is embedded. As this is a standalone sample, the embedding is slightly different.

In `fsi-component.js` you will find the class that extends the React component. You can read more about this in the corresponding documentation section [Creating the FSI Component] (https://docs.neptunelabs.com/docs/fsi-viewer/using-with-react).

You can use this FSIComponent in two ways, either directly in the files or as a separate component.
In `sample.js` it is directly embedded:

```html
      <div
  className='showcase'
  id={"fsi-showcase-1689840468239-713615"}>
  <FSIComponent
    tagName="fsi-viewer"
    id={"fsi-viewer-1689840468239-39461"}
    className='viewer-component'
    plugins={"resize,fullScreen"}
    fullScreenElement={"fsi-showcase-1689840468239-713615"}
    skin={"white"}
    width={"100%"} height={"500px"}
    debug={true}
  />

  <FSIComponent
    tagName="fsi-thumbbar"
    viewerSelector={"fsi-viewer-1689840468239-39461"}
    className='thumb-component'
    width={"100%"}
    height={"160px"}
    dir={"images/samples/showcase/tutorial"}
    vertical={false}
    elementWidth={"150px"}
    elementSpacing={"4px"}
    alignment={0.5}
    paddingTop={0}
    paddingBottom={"4px"}
    debug={true}
  />
</div>
```
You can define serveral FSIComponents at once.
The `tagName` defines which viewer script is loaded, in this case `fsi-viewer` and `fsi-thumbbar`. The other attributes are the normal viewer parameters you would set.

If you want to use this in React, unlike in this standalone example, it is important to import the FSIComponent accordingly.
You can read more about this in the [Using the FSIComponent](https://docs.neptunelabs.com/docs/fsi-viewer/using-with-react#using-fsicomponent) section of the documentation.


