import { useRef } from "react";
import VideoCard from "./VideoCard";
import { useTranslation } from "react-i18next";

function VideoCarousel() {
  const carouselRef = useRef(null);
  const { t } = useTranslation();
  const videos = [
    {
      id: "K3SsPof0-GI",
      title: "Lauterbrunnen",
      description: t("lauterbrunnen_description"),
    },
    { id: "dQw4w9WgXcQ", title: "Everest", description: "description2" }, // Changed the ID for demonstration purposes
    {
      id: "l10Ygr5BaeA",
      title: "Oberstdorf Oytal",
      description: "description2",
    },
    {
      id: "14kBBudWWW0",
      title: "Schynige Platte",
      description: "description2",
    },
    { id: "Nd_Jg7_L5f4", title: "Mürren", description: "description2" },
    { id: "TCrzqsTgtRw", title: "Coron", description: "description2" },
    { id: "6_he_BCF5LM", title: "Männlichen", description: "description2" },
    { id: "UdbKT6laSOA", title: "Brienzersee", description: "description2" },
    { id: "4-8fx7ChjZE", title: "Schwarzwald", description: "description2" },
    { id: "S7Phu_z9aqs", title: "Harder Kulm", description: "description2" },
    {
      id: "m77BxV3chYA",
      title: "Balneário Camboriú",
      description: "description2",
    },
    {
      id: "7BVAwZGihRY",
      title: "Oberstdorf Oytal",
      description: "description2",
    },
    {
      id: "Gv9j5XBkCx4",
      title: "Oberstdorf Gaisalpsee",
      description: "description2",
    },
  ];

  const carouselScroll = (itemNumber) => {
    const carousel = carouselRef.current;
    const itemWidth = carousel.scrollWidth / videos.length;
    carousel.scrollTo({
      left: (itemNumber - 1) * itemWidth,
      behavior: "smooth",
    });
  };

  const CarouselItem = ({ videoMeta, index }) => (
    <div className="carousel-item relative w-full" id={`item${index}`}>
      <VideoCard
        videoId={videoMeta.id}
        title={videoMeta.title}
        description={videoMeta.description}
      />
    </div>
  );

  return (
    <div className="flex flex-col">
      <div className="carousel items-center" ref={carouselRef}>
        {videos.map((videoMeta, index) => (
          <CarouselItem key={index} videoMeta={videoMeta} index={index} />
        ))}
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center gap-2 py-2 px-4 min-w-max">
          {videos.map((videoMeta, index) => (
            <button
              className="btn btn-sm"
              onClick={() => carouselScroll(index + 1)}
            >
              {videoMeta.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoCarousel;
