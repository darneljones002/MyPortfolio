import { useState, useMemo } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import g1 from "../assets/Designs/NaijaG1.jpeg";
import g2 from "../assets/Designs/NaijaG2.jpeg";
import g3 from "../assets/Designs/NaijaG3.jpeg";
import g4 from "../assets/Designs/DomJones1.jpeg";
import g5 from "../assets/Designs/DomJones2.jpeg";
import g6 from "../assets/Designs/DomJones3.jpeg";
import g7 from "../assets/Designs/DomJones4.jpeg";
import g8 from "../assets/Designs/SAGtour.jpeg";
import g9 from "../assets/Designs/Logo2.jpeg";
import g10 from "../assets/Designs/Logo1.jpeg";
import g11 from "../assets/Designs/Logo3.jpeg";
import g12 from "../assets/Designs/HighSchool2.jpeg";
import g13 from "../assets/Designs/HighSchool1.jpeg";
import g14 from "../assets/Designs/BamaSpeaker.jpeg";
import g15 from "../assets/Designs/AAU1.jpeg";
import g16 from "../assets/Designs/NAGameday.jpeg";

function DriveGallery() {
  const images = useMemo(() => [
    { src: g1, caption: "Exhibit 1 | Naija G" },
    { src: g2, caption: "Exhibit 2 | Naija G" },
    { src: g3, caption: "Exhibit 3 | Naija G" },
    { src: g4, caption: "Exhibit 4 | Dom Jones" },
    { src: g5, caption: "Exhibit 5 | Dom Jones" },
    { src: g6, caption: "Exhibit 6 | Dom Jones" },
    { src: g7, caption: "Exhibit 7 | Dom Jones" },
    { src: g8, caption: "Exhibit 8 | Tour Art" },
    { src: g9, caption: "Exhibit 9 | Logo Art" },
    { src: g10, caption: "Exhibit 10 | Logo Art" },
    { src: g11, caption: "Exhibit 11 | Logo Art" },
    { src: g12, caption: "Exhibit 12 | High School Hoops" },
    { src: g13, caption: "Exhibit 13 | High School Hoops" },
    { src: g14, caption: "Exhibit 14 | Big Bama" },
    { src: g15, caption: "Exhibit 15 | AAU Basketball" },
    { src: g16, caption: "Exhibit 16 | High School Gameday" }
  ], []);

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section id="drive-gallery" className="py-20 px-4 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">My Graphics Gallery</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => {
              setPhotoIndex(i);
              setIsOpen(true);
            }}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-center text-gray-700">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageCaption={images[photoIndex].caption}
        />
      )}
    </section>
  );
}

export default DriveGallery;
