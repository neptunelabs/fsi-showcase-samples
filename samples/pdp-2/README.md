# Product Detail Page - Using FSI Showcase for Thumbnail Image Zoom

This readme describes how the Detail page sample with *FSI Showcase* is achieved.
The aim of the demo is to show how you can easily integrate images with thumbnails zoom by just adding
two simple custom tags.

In order to display the Showcase, you only need to add the scripts listed in the **Required Scripts** field
to the head of your website:

```html
<script src="//docs.neptunelabs.com/fsi/viewer/applications/viewer/js/fsiviewer.js"></script>
<script src="//docs.neptunelabs.com/fsi/viewer/applications/touchzoom/js/fsitouchzoom.js"></script>
<script src="//docs.neptunelabs.com/fsi/viewer/applications/imagegrid/js/fsiimagegrid.js"></script>
```
This ensures that the viewers are loaded.

Afterwards, you need to place the tags you see in the Publish section on the place where you would like to see the viewer.
In our example this will look like this:

```html
       <div style="width:100%;height:100%;display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;"
            id="fsi-showcase-1630681849054-8658698">
  <fsi-thumbbar
    style="flex: 0 0 160px;"
    width="100%"
    height="100%"
    imagesources="images/samples/showcase/pdp/kate-skumen-3FoSvueTVCk-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-h7FPeFBi3Mo-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-S6xhmSe7RdA-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-Z_wBSL_fPzw-unsplash.jpg"
    useTouchZoom="true"
    vertical="true"
    elementWidth="160px"
    elementSpacing="4px"
    alignment="0.5"
    id="thumbbar"
    paddingTop="0"
    paddingBottom="4px"
    autoCrop="cc"
    viewerSelector="#viewer"
  >
  </fsi-thumbbar>
  <fsi-viewer id="viewer"
              style="flex: 1 1 100%;"
              width="100%"
              height="100%"
              plugins="resize,fullScreen"
              fullScreenElement="fsi-showcase-1630681849054-8658698"
              skin="white"
  >
  </fsi-viewer>
</div>
```

You might notice we switched from the **dir** parameter shown in the Publish Tab to **imagesources**:

```html
imagesources="images/samples/showcase/pdp/kate-skumen-3FoSvueTVCk-unsplash.jpg,
images/samples/showcase/pdp/kate-skumen-h7FPeFBi3Mo-unsplash.jpg,
images/samples/showcase/pdp/kate-skumen-S6xhmSe7RdA-unsplash.jpg,
images/samples/showcase/pdp/kate-skumen-Z_wBSL_fPzw-unsplash.jpg"
```

If you have a directory where more images are located than you need in your showcase - like in our case, where there are different color variants
of the dress in the same directory, you can use **imagesources** to directly adress the images which should be visible.

For all parameters which can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-viewer).

## Switching color variants

By clicking on the color variant thumbnail on the right, you can switch between the different color variants.

This is achieved by the function **changeImage** which is called onClick of the thumbnail:

```html
<div class="col-4 h-100 d-inline-block">
            <img class="thumbnail img-fluid" onclick="changeImage('0')" src="//docs.neptunelabs.com/fsi/server?type=image&source=images/samples/showcase/pdp/kate-skumen-Z_wBSL_fPzw-unsplash.jpg&height=150" height="150" alt="">
            <p>
              <small>Charcoal</small>
            </p>
          </div>
          <div class="col-4 h-100 d-inline-block"  >
            <img class="thumbnail img-fluid" onclick="changeImage('1')" src="//docs.neptunelabs.com/fsi/server?type=image&source=images/samples/showcase/pdp/kate-skumen-PJRabkuH3_Q-unsplash.jpg&height=150" height="150" alt="">
            <p>
              <small>Burgundy</small>
            </p>
          </div>
          <div class="col-4 h-100 d-inline-block">
            <img class="thumbnail img-fluid" onclick="changeImage('2')" src="//docs.neptunelabs.com/fsi/server?type=image&source=images/samples/showcase/pdp/kate-skumen-XsFiUIamdTo-unsplash.jpg&height=150" height="150" alt="">
            <p>
              <small>Mountain Grey</small>
            </p>
          </div>
```

The function itself can be found in the corresponding **pdp.js**.
It basically just switches the image sources called in the **imagesources** parameter in FSI ThumbBar and the image shown in FSI Viewer:

```javascript
function changeImage(buttonID){
  let imagesrc;
  let src;
  switch (buttonID) {
    case "0":
      imagesrc =  'images/samples/showcase/pdp/kate-skumen-3FoSvueTVCk-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-h7FPeFBi3Mo-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-S6xhmSe7RdA-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-Z_wBSL_fPzw-unsplash.jpg';
      src = 'images/samples/showcase/pdp/kate-skumen-3FoSvueTVCk-unsplash.jpg';
      break
   case "1":
     imagesrc = 'images/samples/showcase/pdp/kate-skumen-PJRabkuH3_Q-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-n268Z4TSd6M-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-glmDobIx4o0-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-PJRabkuH3_Q-unsplash-x.jpg';
     src = 'images/samples/showcase/pdp/kate-skumen-PJRabkuH3_Q-unsplash.jpg';
     break
    case "2":
      imagesrc = 'images/samples/showcase/pdp/kate-skumen-XsFiUIamdTo-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-KFz7sRs0ddI-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-XsFiUIamdTo-unsplash-x.jpg, images/samples/showcase/pdp/kate-skumen-KFz7sRs0ddI-unsplash-x.jpg';
      src = 'images/samples/showcase/pdp/kate-skumen-XsFiUIamdTo-unsplash.jpg';
      break
  }
  document.getElementsByTagName("fsi-thumbbar")[0].changeConfig(undefined, {imagesources: imagesrc, autoCrop: "cc", vertical: true,  elementWidth:"160px"});
  document.getElementsByTagName("fsi-viewer")[0].changeConfig(undefined, {imagesrc: src});

}
```

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
