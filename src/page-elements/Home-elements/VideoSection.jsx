// src/components/VideoSection.jsx

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import videoThumb from "../../assets/img/video-bg.jpg";

const VideoSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="video-section">
        <div className="container">
          <div className="video-sec">
            <img src={videoThumb} alt="video" />

            <div className="video-overlay"></div>

            <button className="play-btn" onClick={() => setOpen(true)}>
              <FaPlay />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div className="video-modal" onClick={() => setOpen(false)}>
          <div className="video-box" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/6qHhQp6F3vY?autoplay=1"
              allow="autoplay"
              title="video"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
