const Sample = () => {
  return (
    <div className="container mx-auto">
      <div className="row row-cols-1 g-3 px-5 py-3">
        <div className="col-lg-8">
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
          elementWidth={"150px"}
          elementSpacing={"4px"}
          alignment={0.5}
          paddingTop={0}
          paddingBottom={"4px"}
          debug={true}
        />
      </div>
    </div>
        </div>
        <div className="col-lg-4">
          <div className="p-3 text-left">
            <h2 className="display-5">Camu</h2>
            <p>Sneaker, Camouflage Suede</p>
            <p>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <small>(4664) Ratings</small>
            </p>
            <p>Sturdy, classy and minimal.</p>
            <p>Nice shoe for any occasion. The minimal design fits a lot of outfits.</p>
            <p>
              <small>Dispatched in 4 working days</small>
            </p>
            <div className="btn-group py-3">
              <button type="button" className="btn btn-lg btn-outline-dark">Add to basket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
