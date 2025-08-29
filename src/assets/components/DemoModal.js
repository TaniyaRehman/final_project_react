import React from "react";
import { FiX } from "react-icons/fi";
import DemoCard from "./DemoCard";

function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const demoItems = [
    {
      title: "Consulting",
      link: "https://rainbowit.net/themes/inbio/consulting/",
      image:
        "https://rainbowit.net/themes/inbio/wp-content/plugins/rainbow-demo/assets/demo/home-consulting.png",
    },
    {
      title: "Technician",
      link: "https://rainbowit.net/themes/inbio/technician/",
      image:
        "https://rainbowit.net/themes/inbio/wp-content/plugins/rainbow-demo/assets/demo/index-technician.png",
    },
    // ➝ You can add all other demo items here
  ];

  return (
    <div className="demo-modal-area">
      <div className="wrapper">
        <div className="rn-modal-inner">
          <div className="close-icon">
            <button className="demo-close-btn" onClick={onClose} title="Close">
              <FiX />
            </button>
          </div>

          <div className="demo-top text-center">
            <h2 className="title">InBio</h2>
            <p className="subtitle">
              It’s a personal portfolio theme that can run a website in an
              authentic manner.
            </p>
          </div>

          <div className="content">
            <div className="row">
              {demoItems.map((demo, index) => (
                <DemoCard
                  key={index}
                  title={demo.title}
                  link={demo.link}
                  image={demo.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoModal;
