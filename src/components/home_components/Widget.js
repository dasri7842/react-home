import React from "react";

const Widget = ({ quote, title, text }) => {
  return (
    <div className="quote m-4 p-4">
      <i className="fa fa-quote-left fa-3x color m-2" aria-hidden="true"></i>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <h2>Einstein , 2021</h2>
      <p>CEO & Founder Phy</p>
    </div>
  );
};

export default React.memo(Widget);
