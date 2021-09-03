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


