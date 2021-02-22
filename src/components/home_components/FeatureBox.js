import React from "react";

const FeatureBox = ({ id, img, title, text, options }) => {
  return (
    <div
      className={`d-lg-flex justify-content-around 
      ${id % 2 === 0 ? ` flex-row-reverse ` : ""}
       align-items-center p-lg-5 my-2`}
    >
      <img className="col-lg-4" src={img} alt="Feature"></img>
      <div className="col-lg-6">
        <p className="display-1 fw-bolder ">
          #<span className="color">{id}</span>
        </p>
        <h1>{title}</h1>
        <p>{text}</p>
        <ul>
          {options.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(FeatureBox);
