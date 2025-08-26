import { useState } from "react";

const HotelCard = ({ hotel }) => {
  const { _id, image, imageArr, name, address, state, price, rating } = hotel;

  const [isFavourite, setIsFavourite] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const [currentImg, setCurrentImg] = useState(
    image || (imageArr?.length > 0 ? imageArr[0] : "/placeholder.jpg")
  );

  const handleImageError = () => {
    if (imageArr && imgIndex < imageArr.length - 1) {
      const nextIndex = imgIndex + 1;
      setImgIndex(nextIndex);
      setCurrentImg(imageArr[nextIndex]);
    } else if (image && currentImg !== image) {
      setCurrentImg(image);
    } else {
      setCurrentImg("/placeholder.jpg");
    }
  };

  return (
    <div className="relative">
      {/* Removed fixed height h-[350px] */}
      <div className="w-[340px] flex flex-col shadow-2xl rounded-md overflow-hidden cursor-pointer">
        
        {/* Card Image */}
        <div className="relative">
          <img
            src={currentImg}
            alt={name || "Hotel"}
            className="h-[220px] w-full object-cover"
            onError={handleImageError}
          />
          <button
            className="absolute top-2 right-2 cursor-pointer "
            onClick={() => setIsFavourite(!isFavourite)}
          >
            <span
              className={`material-icons-outlined text-[24px] ${
                isFavourite ? "text-red-500" : "text-gray-500"
              }`}
            >
              {isFavourite ? "favorite" : "favorite_border"}
            </span>
          </button>
        </div>

        {/* Card Details */}
        <div className="p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">
              {address}, {state}
            </span>
            <span className="flex items-center gap-1 text-gray-700">
              <span className="material-icons-outlined text-[20px]">star</span>
              {rating}
            </span>
          </div>
          <p className="text-[15px] text-gray-600">{name}</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="font-semibold">Rs.{price}</span>
            <span className="text-[15px] text-gray-600">/ night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
