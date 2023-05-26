# Product Detail Page - Using FSI Showcase for Thumbnail Image Zoom

This readme describes how the detail page example is achieved with _FSI Showcase_.
The aim of the demo is to show how you can easily integrate images with thumbnail zoom by simply adding
two simple custom tags.

To display the Showcase, simply add the following scripts to the head of your website:

```html
<script src="//fsi.domain.tld/fsi/viewer/applications/viewer/js/fsiviewer.js"></script>
<script src="//fsi.domain.tld/fsi/viewer/applications/touchzoom/js/fsitouchzoom.js"></script>
<script src="//fsi.domain.tld/fsi/viewer/applications/thumbbar/js/fsithumbbar.js"></script>
```

This will ensure that the viewers are loaded.

Next, you need to place the tags you see in the Publish section where you want the viewer to appear.
In our example, this will look like this:

```html
<div
  style="width:100%;height:100%;display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;"
  id="fsi-showcase-1630681849054-8658698"
>
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
  <fsi-viewer
    id="viewer"
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

You may notice that we have switched from the **dir** parameter shown in the Publish tab to **imagesources**:

```html
imagesources="images/samples/showcase/pdp/kate-skumen-3FoSvueTVCk-unsplash.jpg,
images/samples/showcase/pdp/kate-skumen-h7FPeFBi3Mo-unsplash.jpg,
images/samples/showcase/pdp/kate-skumen-S6xhmSe7RdA-unsplash.jpg,
images/samples/showcase/pdp/kate-skumen-Z_wBSL_fPzw-unsplash.jpg"
```

If you have a directory with more images than you need for your showcase - as in our case, where we have different colour versions of the dress in the same directory
of the dress in the same directory, you can use **imagesources** to directly address the images you want to be visible.

For all the parameters that can be used, please consult the [manual](https://docs.neptunelabs.com/fsi-viewer/latest/fsi-viewer).

## Switching colour variants

By clicking on the thumbnail of the colour variant on the right, you can switch between the different colour variants.

This is done by calling the **changeImage** function onClick of the thumbnail:

```html
<div class="col-4 h-100 d-inline-block">
  <img
    class="thumbnail img-fluid"
    onclick="changeImage('0')"
    src="//fsi.domain.tld/fsi/server?type=image&source=images/samples/showcase/pdp/kate-skumen-Z_wBSL_fPzw-unsplash.jpg&height=150"
    height="150"
    alt=""
  />
  <p>
    <small>Charcoal</small>
  </p>
</div>
<div class="col-4 h-100 d-inline-block">
  <img
    class="thumbnail img-fluid"
    onclick="changeImage('1')"
    src="//fsi.domain.tld/fsi/server?type=image&source=images/samples/showcase/pdp/kate-skumen-PJRabkuH3_Q-unsplash.jpg&height=150"
    height="150"
    alt=""
  />
  <p>
    <small>Burgundy</small>
  </p>
</div>
<div class="col-4 h-100 d-inline-block">
  <img
    class="thumbnail img-fluid"
    onclick="changeImage('2')"
    src="//fsi.domain.tld/fsi/server?type=image&source=images/samples/showcase/pdp/kate-skumen-XsFiUIamdTo-unsplash.jpg&height=150"
    height="150"
    alt=""
  />
  <p>
    <small>Mountain Grey</small>
  </p>
</div>
```

The function itself can be found in the corresponding **script.js**.
Basically it just switches the image sources specified in the **imagesources** parameter in FSI ThumbBar and the image shown in FSI Viewer:

```javascript
function changeImage(buttonID) {
  let imagesrc
  let src
  switch (buttonID) {
    case '0':
      imagesrc =
        'images/samples/showcase/pdp/kate-skumen-3FoSvueTVCk-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-h7FPeFBi3Mo-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-S6xhmSe7RdA-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-Z_wBSL_fPzw-unsplash.jpg'
      src = 'images/samples/showcase/pdp/kate-skumen-3FoSvueTVCk-unsplash.jpg'
      break
    case '1':
      imagesrc =
        'images/samples/showcase/pdp/kate-skumen-PJRabkuH3_Q-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-n268Z4TSd6M-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-glmDobIx4o0-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-PJRabkuH3_Q-unsplash-x.jpg'
      src = 'images/samples/showcase/pdp/kate-skumen-PJRabkuH3_Q-unsplash.jpg'
      break
    case '2':
      imagesrc =
        'images/samples/showcase/pdp/kate-skumen-XsFiUIamdTo-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-KFz7sRs0ddI-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-XsFiUIamdTo-unsplash-x.jpg, images/samples/showcase/pdp/kate-skumen-KFz7sRs0ddI-unsplash-x.jpg'
      src = 'images/samples/showcase/pdp/kate-skumen-XsFiUIamdTo-unsplash.jpg'
      break
  }
  document
    .getElementsByTagName('fsi-thumbbar')[0]
    .changeConfig(undefined, { imagesources: imagesrc, autoCrop: 'cc', vertical: true, elementWidth: '160px' })
  document.getElementsByTagName('fsi-viewer')[0].changeConfig(undefined, { imagesrc: src })
}
```

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
