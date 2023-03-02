import { useEffect, useRef } from "react";

const VideoHero = () => {
  const vidRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="section rounded-xl">
      <video
        width="320"
        height="140"
        className="w-full rounded-[20px]"
        loop
        muted
        autoPlay
        ref={vidRef}
      >
        <source src="/resort.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoHero;
