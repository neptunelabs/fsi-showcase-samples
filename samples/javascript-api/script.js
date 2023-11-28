document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('thumbBtn').addEventListener('click', () => {
    openPopUp()

    const ele = document.createElement("div");
    ele.style.width = '1100px'
    ele.style.height = '600px'
    ele.setAttribute("id", 'zoomViewer');
    document.getElementById('showcase').appendChild(ele);

    const instance = new $FSI.Viewer(ele,{
      src: 'images/samples/ssi/furniture/living-room-7547558.jpg',
      debug: true,
      plugins: 'resize,fullScreen',
      skin: 'white',
      fullScreenElement:'showcase',
    });
    instance.start();

    const thumbViewer = document.createElement("div");
    thumbViewer.style.width = '1100px'
    thumbViewer.style.height = '200px'
    thumbViewer.setAttribute("id", 'thumbViewer');
    document.getElementById('showcase').appendChild(thumbViewer);

    let thumbInstance = new $FSI.ThumbBar(thumbViewer, {
      width:'100%',
      height:'200px',
      debug:'true',
      imagesources:'images/samples/ssi/furniture/living-room-7547558.jpg, images/samples/ssi/furniture/living-room-7547559.jpg,\timages/samples/ssi/furniture/home-7547557.jpg',
      useTouchZoom:'false',
      elementWidth:'350px',
      elementSpacing:'4px',
      alignment:'0.5',
      paddingTop:'0',
      autoCrop:'cc',
      onReady: () => {
        // assignViewer
        addViewer()
      },
    }, true)

    function addViewer () {
      // toggle page index
      thumbInstance.assignFSIViewer('zoomViewer')
    }

  })


  function openPopUp(evt, oCell) {
    const modalToggle = document.getElementById('myModal')
    modalToggle.addEventListener('hidden.bs.modal', (event) => {
      document.getElementById('thumbViewer').assignFSIViewer('zoomViewer')
    })
  }

})
