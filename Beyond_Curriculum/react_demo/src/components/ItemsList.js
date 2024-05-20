import React from "react";

const ItemsList = (props) => {
  return (
    <>
      {props.images.map((image) => (
        <div key={image.id} className="col-auto px-1 mt-1 mx-1">
          <a href={image.pageURL}><img src={image.previewURL} alt="" className="img-thumbnail"/></a>
        </div>
      ))}
    </>
  );
};
export default ItemsList;
