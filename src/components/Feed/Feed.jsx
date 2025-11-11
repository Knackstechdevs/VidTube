import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data.js";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${category}&maxResults=50&key=${API_KEY}`;
      const response = await fetch(videoList_url);
      const result = await response.json();

      if (result.items) {
        setData(result.items);
      } else {
        console.error("No items in response:", result);
        setData([]);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item) => (
        <Link
          key={item.id}
          to={`/video/${category}/${item.id}`}
          className="card"
        >
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_converter(item.statistics.viewCount)} views &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
