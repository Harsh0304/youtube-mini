import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const fetchSingleVideo = async (id) => {
  const response = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  return response;
};

const VideoDetail = () => {
  const { videoID } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["video", videoID],
    queryFn: () => fetchSingleVideo(videoID),
  });
  if (isLoading) {
    <div>Loading....</div>;
  }
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoID}`}
        title={data?.items?.snippet?.title}
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoDetail;
