import React from "react";
import "./PlayVideo.css";
import Video_1 from "../../assets/Video_1.mp4";
import { ThumbsUp, ThumbsDown, Forward, Save } from "lucide-react";
import User_1 from "../../assets/User_1.jpeg";
import { useState, useEffect } from "react";
import { API_KEY, value_converter } from "../../data.js";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();

  const [apidata, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);

  const fetchVideoData = async () => {
    // fetch video data from youtube api
    const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.items[0]);
        console.log(data.items[0]);
      });
  };

  const fetchOtherData = async () => {
    if (!apidata) return;

    // fetch other data from youtube api
    const channelData_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => {
        setChannelData(data.items[0]);
        console.log(data.items[0]);
      });

    // fetching comment data
    const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => {
        setCommentData(data.items);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apidata]);

  return (
    <div className="play-video">
      {/* <video src={Video_1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apidata?.snippet?.title || "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apidata ? value_converter(apidata.statistics.viewCount) : "16K"}{" "}
          views &bull;{" "}
          {apidata
            ? moment(apidata.snippet.publishedAt).fromNow()
            : "some minute ago"}
        </p>
        {/* we use moment for date round off and from now */}
        <div>
          <div className="icons">
            <div className="icon">
              <ThumbsUp />
            </div>
            <span>
              {apidata ? value_converter(apidata.statistics.likeCount) : 177}
            </span>
          </div>
          <div className="icons">
            <div className="icon">
              <ThumbsDown />
            </div>
            <span></span>
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
        <img
          src={
            channelData ? channelData.snippet.thumbnails.default.url : "User_1"
          }
          alt=""
        />
        <div className="publisher-info">
          <p>{apidata ? apidata.snippet.channelTitle : "Your Channel Name"}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>
          {apidata
            ? apidata.snippet.description.slice(0, 250)
            : "video description here"}
        </p>
        <hr />
        <h4>
          {apidata ? value_converter(apidata.statistics.commentCount) : 140}{" "}
          Comments
        </h4>
        {Array.isArray(commentData) ? (
          commentData.map((item, index) => {
            if (!commentData) return <div key={index}>Loading comments...</div>;
            else {
              return (
                <div key={index} className="comments">
                  <img
                    src={
                      item.snippet.topLevelComment.authorProfileImage ||
                      item.snippet.topLevelComment.snippet.authorProfileImageUrl
                    }
                    alt=""
                  />
                  <div>
                    <h3>
                      {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                      <span>1 day ago</span>
                    </h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className="comment-actions">
                      <div className="icon">
                        <ThumbsUp />
                      </div>
                      <span>
                        {value_converter(
                          item.snippet.topLevelComment.snippet.likeCount
                        )}
                      </span>
                      <div className="icon">
                        <ThumbsDown />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div>Loading comments...</div>
        )}
      </div>
    </div>
  );
};

export default PlayVideo;
