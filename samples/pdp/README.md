# Using FSI Viewer for 360° Showcase Image Zoom - Points Of Interest

This readme describes how a simple detail page 360° sample including Points Of Interest with *FSI Viewer* is achieved.
The aim of the demo is to show how you can easily integrate spin images with zoom by just adding a simple viewer tag.
The points of interest are achieved by using FSI ThumbBar.

In order to display 360° zoom with FSI Viewer, you only need to add the corresponding script
to the head of your website:

```html
<script
  src='https://docs.neptunelabs.com/fsi/viewer/applications/viewer/js/fsiviewer.js'
</script>
```
This ensures that FSI Viewer is loaded.

Afterwards, you need to place the *<fsi-viewer>* tag you see in the Publish section on the place where you would like to see the viewer.
In our example this will look like this:

```html
  <fsi-viewer adaptiveUISize="false" id="fsijsshwc2"
              progressBarVAlign="top" progressBarWidth="50"  inPlaceZoom="true"
              autoDisablePointerActions="true" plugins="fullScreen,resize"
              fullScreenElement="samplePopupContent" width="100%" height="100%"
              class="viewer"
              initialView="1,1,0.246347,0.192918,0.816976,0.755272,0"
              dir="/images/samples/notebook/" zoommeter_srcRelative="true"
              debug="true">

  </fsi-viewer>
```

The difference between the normal 2D viewer and the 360° viewer is that the latter uses *dir* instead of *src*.

Now we want to have some points of interest. This is achieved by setting them in an XML configuration.
This is discussed in a tutorial on our website: [Points Of Interest Tutorial](https://www.neptunelabs.com/fsi-viewer-js/multiple-spins-showcase/).

The resulting viewer with thumbbar looks like this:

```html
<div class="showcasecontainer">
  <fsi-viewer adaptiveUISize="false" id="fsijsshwc2"
              progressBarVAlign="top" progressBarWidth="50"  inPlaceZoom="true"
              autoDisablePointerActions="true" plugins="fullScreen,resize"
              fullScreenElement="samplePopupContent" width="100%" height="100%"
              class="viewer"
              initialView="1,1,0.246347,0.192918,0.816976,0.755272,0"
              dir="/images/samples/notebook/" zoommeter_srcRelative="true"
              debug="true">

  </fsi-viewer>

  <fsi-thumbbar cfg="samples/showcase-notebook.xml"
                viewerSelector="fsijsshwc2" id="imageflow2"
                viewerID="fsijsshwc2" imagelistParameterFilterPositive="initialView,ThumbLabel"
                enableScrollBar="1" paddingTop="2" elementWidth="18%" minElementWidth="180"
                elementSpacing="12px" presentationType="flat" imageBorderColor="#FFF"
                class="bar"/></fsi-thumbbar>

</div>
```

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-viewer).

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
