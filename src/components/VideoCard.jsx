import React from "react";

const VideoCard = ({ videoId, title, description }) => {
  return (
    <div className="w-full bg-base-100 max-w-2xl mx-auto shadow-md rounded-lg my-4">
      <div className="w-full">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full md:h-full rounded-t-lg h-[256px] sm:min-h-[480px] min-w-[25vw] shadow-lg"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          {/* <p className="text-sm">{description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
