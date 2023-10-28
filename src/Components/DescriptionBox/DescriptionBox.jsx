import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
        <div className="descriptionbox-des">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            vero a temporibus accusamus error, reprehenderit voluptas deserunt
            debitis. Dignissimos laudantium in ipsam non praesentium odit sequi
            reprehenderit quaerat voluptate aperiam?
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, nobis esse labore vel corrupti facilis veritatis,
            cupiditate beatae modi harum voluptatem omnis, quis eaque
            repellendus quos soluta et ducimus ipsum?
          </p>
        </div>
    </div>
  );
};

export default DescriptionBox;
