const Sample = () => {
  return (
    <div className='fsi-viewer-section'>
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
          elementWidth={"240px"}
          elementSpacing={"4px"}
          alignment={0.5}
          paddingTop={0}
          paddingBottom={"4px"}
          debug={true}
        />
      </div>
    </div>
  );
};
