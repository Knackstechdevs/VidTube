import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { API_KEY, value_converter } from "../../data.js";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const relatedvideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      const res = await fetch(relatedvideo_url);
      const data = await res.json();
      if (data.items) {
        setApiData(data.items);
      } else {
        setApiData([]);
      }
    } catch (error) {
      console.error("Failed to fetch videos", error);
      setApiData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]); // Added categoryId dependency to refetch when category changes

  if (loading) {
    return <div>Loading related videos...</div>;
  }

  if (!apiData.length) {
    return <div>No related videos found.</div>;
  }

  return (
    <div className="recommended">
      {apiData.map((item) => (
        <Link
          to={`/video/${item.snippet.categoryId}/${item.id}`}
          className="side-video-list"
          key={item.id}
        >
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title || "video thumbnail"}
          />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
