import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import VideoCard from "../components/VideoCard";
import { useSelector } from "react-redux";

const fetchVideos = async () => {
  const response = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY} `
  );

  return response?.data;
};

const Home = () => {
  const newData = useSelector((state) => state.items.data);
  console.log(newData);
  const { data, isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchVideos,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.items?.map((item) => {
        return <VideoCard key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Home;
