import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:videoID" element={<VideoDetail />} />
      </Routes>
    </>
  );
};

export default App;
