import { useState } from "react";
import { useEffect } from "react";
import left from "../images/icon-previous.svg";
import right from "../images/icon-next.svg";
import { Arrow } from "./Arrow";

export function ImageContainer({ product }) {
  const [image, setImage] = useState(0);

  function handleNext() {
    setImage((items) =>
      image >= product.imagesThumb.length - 1 ? 0 : items + 1
    );
  }

  function handlePrevious() {
    setImage((items) =>
      image === 0 ? product.imagesThumb.length - 1 : items - 1
    );
  }
  useEffect(() => {
    const intervalId = setInterval(handleNext, 6000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="md:flex md:flex-col gap-6 lg:px-12 relative">
      <div className="w-full ">
        <img
          className="w-full object-cover md:rounded-2xl"
          src={product.images[image]}
          alt="hey"
        ></img>
      </div>
      <div className="hidden md:grid md:grid-cols-4 gap-3 ">
        {product.imagesThumb.map((pic, i) => (
          <img
            className={`rounded-lg cover hover:opacity-40 cursor-pointer ${
              image === i ? "border-[2px] border-orange" : ""
            }`}
            src={pic}
            alt={`Item ${i + 1}`}
            key={i + 1}
            onClick={() => setImage(i)}
          ></img>
        ))}
      </div>
      <Arrow dir="left" onClick={handlePrevious}>
        {left}
      </Arrow>
      <Arrow dir="right" onClick={handleNext}>
        {right}
      </Arrow>
    </div>
  );
}
