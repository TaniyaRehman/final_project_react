import React from "react";
import { FiExternalLink } from "react-icons/fi";

function DemoCard({ title, link, image, badge }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className={`single-demo ${badge ? "badge-" + badge : ""}`}>
        <div className="inner">
          <div className="thumbnail">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img className="w-100" src={image} alt={title} />
              <span className="overlay-content">
                <span className="overlay-text">
                  View Demo <FiExternalLink />
                </span>
              </span>
            </a>
          </div>
          <div className="inner">
            <h3 className="title">
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoCard;
