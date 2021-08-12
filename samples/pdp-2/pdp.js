function switchImageSample() {
  // add "click" handler to all 3 thumbnail images
  for (var i = 1; i < 4; i++){
    var el = document.getElementById("img" + i);
    $FSI.addEvent(el, "click", onThumbnailClick);
  }
}


function onThumbnailClick(){
  var img = this.getElementsByTagName("img");
  let imagesrc;
  switch (img) {
    case "img1":
      imagesrc =  'images/samples/showcase/pdp/kate-skumen-3FoSvueTVCk-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-h7FPeFBi3Mo-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-S6xhmSe7RdA-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-Z_wBSL_fPzw-unsplash.jpg';
      break
   case "img2":
     imagesrc = 'images/samples/showcase/pdp/kate-skumen-PJRabkuH3_Q-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-n268Z4TSd6M-unsplash.jpg';
      break
    case "img3":
      imagesrc = 'images/samples/showcase/pdp/kate-skumen-XsFiUIamdTo-unsplash.jpg, images/samples/showcase/pdp/kate-skumen-KFz7sRs0ddI-unsplash.jpg';
      break
  }
  var parameters = {"imagesources" : imagesrc};
  console.log (imagesrc)
  var thumbbar = document.getElementById("thumbbar");
  thumbbar.changeConfig(parameters)
}


