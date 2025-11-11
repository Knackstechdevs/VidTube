import React from "react";
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recommended from "../../components/Recommended/Recommended";
import { useParams } from "react-router-dom";
import "./Video.css";

const Video = () => {
  const { categoryId, videoId } = useParams();

  return (
    <div className="play-container flex-div">
      <PlayVideo videoId={videoId} />
      <Recommended category={categoryId} />
    </div>
  );
};

export default Video;
