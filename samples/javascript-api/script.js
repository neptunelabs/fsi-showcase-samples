document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('thumbBtn').addEventListener('click', () => {

    const container = document.getElementById('showcase');
    if (container.firstChild) return; // viewers already setup

    container.appendChild(
      $FSI.createNode("fsi-viewer", {
        id: "zoomViewer",
        width: 1100,
        height: 600,
        skin: 'white',
        debug: true
      })
    )

    container.appendChild(
      $FSI.createNode("fsi-thumbbar", {
        src: "images/samples/ssi/furniture/living-room-7547558.jpg",
        width: "100%",
        height: 200,
        debug: true,
        imagesources: "images/samples/ssi/furniture/living-room-7547558.jpg, images/samples/ssi/furniture/living-room-7547559.jpg,\timages/samples/ssi/furniture/home-7547557.jpg",
        useTouchZoom: false,
        elementWidth: "350px",
        elementSpacing: "4px",
        alignment: 0.5,
        paddingTop: 0,
        autoCrop: "cc",
        viewerSelector: "#zoomViewer"
      })
     );

  })
})
