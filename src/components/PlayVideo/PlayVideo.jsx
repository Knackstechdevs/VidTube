import React from "react";
import "./PlayVideo.css";
import Video_1 from "../../assets/Video_1.mp4";
import { ThumbsUp, ThumbsDown, Forward, Save } from "lucide-react";
import User_1 from "../../assets/User_1.jpeg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={Video_1} controls autoPlay muted></video>
      <h3>Best Youtube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>15K views &bull; 2 days ago</p>
        <div>
          <div className="icons">
            <div className="icon">
              <ThumbsUp />
            </div>
            <span>125</span>
          </div>
          <div className="icons">
            <div className="icon">
              <ThumbsDown />
            </div>
            <span>2</span>
          </div>
          <div className="icons">
            <div className="icon">
              <Forward />
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <Save />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={User_1} alt="" />
        <div className="publisher-info">
          <p>Greatstack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>Channel That Make Learning Easy</p>
        <p>Subscribe Greatstack to watch more tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comments">
          <img src={User_1} alt="" />
          <div>
            <h3>
              Jack Nicolas <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              connection of interconnected networks using standardize
              communication protocols.
            </p>
            <div className="comment-actions">
              <div className="icon">
                <ThumbsUp />
              </div>
              <span>244</span>
              <div className="icon">
                <ThumbsDown />
              </div>
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={User_1} alt="" />
          <div>
            <h3>
              Jack Nicolas <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              connection of interconnected networks using standardize
              communication protocols.
            </p>
            <div className="comment-actions">
              <div className="icon">
                <ThumbsUp />
              </div>
              <span>244</span>
              <div className="icon">
                <ThumbsDown />
              </div>
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={User_1} alt="" />
          <div>
            <h3>
              Jack Nicolas <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              connection of interconnected networks using standardize
              communication protocols.
            </p>
            <div className="comment-actions">
              <div className="icon">
                <ThumbsUp />
              </div>
              <span>244</span>
              <div className="icon">
                <ThumbsDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
