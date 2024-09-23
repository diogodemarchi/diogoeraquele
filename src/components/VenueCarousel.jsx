import { useRef } from "react";

function VenueCarousel() {
  const carouselRef = useRef(null);
  const images = [
    "/images/sitio1.jpg",
    "/images/sitio2.jpg",
    "/images/sitio3.jpg",
    "/images/sitio4.jpg",
    "/images/sitio5.jpg",
    "/images/sitio6.jpg",
    "/images/sitio7.jpg",
    "/images/sitio8.jpg",
  ];

  const carouselScroll = (itemNumber) => {
    const carousel = carouselRef.current;
    const itemWidth = carousel.scrollWidth / images.length;
    carousel.scrollTo({
      left: (itemNumber - 1) * itemWidth,
      behavior: "smooth",
    });
  };

  const CarouselItem = ({ src, index }) => (
    <div className="carousel-item relative w-full">
      <img
        alt=""
        className="rounded-lg m-12 w-11/12 h-fit"
        src={process.env.PUBLIC_URL + src}
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button
          className="btn btn-circle"
          onClick={() => carouselScroll(index === 0 ? images.length : index)}
        >
          ❮
        </button>
        <button
          className="btn btn-circle"
          onClick={() =>
            carouselScroll(index + 2 > images.length ? 1 : index + 2)
          }
        >
          ❯
        </button>
      </div>
    </div>
  );

  return (
    <div className="carousel items-center" ref={carouselRef}>
      {images.map((src, index) => (
        <CarouselItem key={index} src={src} index={index} />
      ))}
    </div>
  );
}

export default VenueCarousel;
