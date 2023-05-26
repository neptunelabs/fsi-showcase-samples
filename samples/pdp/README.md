# Product Detail Page - Using FSI Showcase for Thumbnail with POI & Labels

This readme describes how the detail page example is achieved using _FSI Showcase_.
The aim of the demo is to show how you can easily integrate images with thumbnails that link to specific points of interest and labels by simply adding two simple custom tags.
two simple custom tags. In this case, FSI Viewer is combined with FSI ThumbBar.

To display the showcase, simply add the following scripts to the head of your website:

```html
<script src="//fsi.domain.tld/fsi/viewer/applications/viewer/js/fsiviewer.js"></script>
<script src="//fsi.domain.tld/fsi/viewer/applications/touchzoom/js/fsitouchzoom.js"></script>
<script src="//fsi.domain.tld/fsi/viewer/applications/thumbbar/js/fsithumbbar.js"></script>
```

This will ensure that the viewers are loaded.

Next you need to create a div that will contain both the FSI Viewer and the FSI ThumbBar.
In our example this will look like this:

```html
<div class="showcasecontainer"></div>
```

You add the viewer and thumbbar to this:

```html
<fsi-viewer
          adaptiveUISize="false"
          id="fsijsshwc2"
          progressBarVAlign="top"
          progressBarWidth="50"
          inPlaceZoom="true"
          autoDisablePointerActions="true"
          plugins="fullScreen,resize"
          fullScreenElement="samplePopupContent"
          width="100%"
          height="100%"
          class="viewer"
          initialView="1,1,0.246347,0.192918,0.816976,0.755272,0"
          dir="/images/samples/notebook/"
          zoommeter_srcRelative="true"
          debug="true"
        >
        </fsi-viewer>

        <fsi-thumbbar
          cfg="samples/showcase-notebook.xml"
          viewerSelector="fsijsshwc2"
          id="imageflow2"
          viewerID="fsijsshwc2"
          imagelistParameterFilterPositive="initialView,ThumbLabel"
          enableScrollBar="1"
          paddingTop="2"
          elementWidth="18%"
          minElementWidth="180"
          elementSpacing="12px"
          presentationType="flat"
          imageBorderColor="#FFF"
          class="bar"
        />
```
Now we want to have some points of interest. This is achieved by setting them in an XML configuration.
This is covered in a tutorial on our website: [Points of Interest Tutorial](https://www.neptunelabs.com/fsi-viewer-js/multiple-spins-showcase/).

In our XML [https://docs.neptunelabs.com/fsi/viewer/config/samples/showcase-notebook.xml](https://docs.neptunelabs.com/fsi/viewer/config/samples/showcase-notebook.xml) it looks like this:.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<fsi_parameter>
  ...
  <!-- 3D Images to display below -->
  <Images>
    <Image label="360° View">
      <images3d prefix="/images/samples/notebook/img00" suffix=".png" from="72" to="95" />
      <Options>
        <InitialAction value="NextScene" />
        <InitialActionDelay value="1" />
        <InitialActionPersistent value="true" />
      </Options>
    </Image>

    <Image label="Premium Touchpad">
      <images3d prefix="/images/samples/notebook/img00" suffix=".png" from="72" to="95" />
      <Options>
        <InitialView value="1,1,0.360377,0.541887,0.644795,0.751322,0" />
      </Options>
    </Image>

    <Image >
      <images3d prefix="/images/samples/notebook/img00" suffix=".png" from="72" to="95" />
      <Options>
        <thumbLabel>
          USB, Mini VGA<br/>and Slim Kensington case-lock
        </thumbLabel>
        <InitialView value="1,7,0.480618,0.693618,0.707433,0.860636,0" />
      </Options>
    </Image>

    <Image >
      <images3d prefix="/images/samples/notebook/img00" suffix=".png" from="72" to="95" />
      <Options>
        <thumbLabel>
          HDMI, DC-IN, Headphones<br/> and Mini-Ethernet
        </thumbLabel>
        <InitialView value="1,19,0.317188,0.70026,0.50816,0.840885,0" />
      </Options>
    </Image>

    <Image label="Webcam (720p)">
      <images3d prefix="/images/samples/notebook/img00" suffix=".png" from="72" to="95" />
      <Options>
        <InitialView value="1,1,0.318998,0.11529,0.678388,0.379931,0" />
      </Options>
    </Image>

  </Images>

</fsi_parameter>
```
The labels displayed below the thumbnails are set using the _label_ attribute, as seen above, and styled using the _fsi-thumbbar-label_ class.

For all the parameters that can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-viewer).

# Using FSI Viewer for 360° Showcase Image Zoom - Points Of Interest

This readme describes how a simple detail page 360° sample including Points Of Interest with *FSI Viewer* is achieved.
The aim of the demo is to show how you can easily integrate spin images with zoom by just adding a simple viewer tag.
The points of interest are achieved by using FSI ThumbBar.

In order to display 360° zoom with FSI Viewer, you only need to add the corresponding script
to the head of your website:

```html
<script
  src='https://fsi.domain.tld/fsi/viewer/applications/viewer/js/fsiviewer.js'
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
