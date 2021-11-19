function changeImage(buttonID){
  let dir;
  switch (buttonID) {
    case "0":
      dir =  'images/samples/Shoe/View1';
      break
    case "1":
      dir = 'images/samples/Shoe/View2';
      break
  }
  document.getElementsByTagName("fsi-viewer")[0].changeConfig(undefined, {dir: dir});

}


