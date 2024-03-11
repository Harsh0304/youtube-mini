import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ data }) => {
  return (
    <div>
      <Link to={`/${data.id}`} className="shadow-xl">
        <img
          className="w-[27rem] rounded-xl"
          src={data?.snippet?.thumbnails?.high?.url}
          alt=""
        />
        <h3 className="w-[20rem]">{data?.snippet?.title}</h3>
      </Link>
    </div>
  );
};

export default VideoCard;
