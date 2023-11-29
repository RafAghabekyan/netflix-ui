export const MainFeaturedContent = ({
  category,
  titleImage,
  releaseYear,
  mpaRating,
  duration,
  description,
}) => {
  return (
    <div className="flex flex-col justify-around absolute left-44 top-40 w-2/5 h-1/3">
      <div className="w-full columns-1 font-bold text-neutral-500	uppercase text-2xl">
        {category}
      </div>
      <img
        src={`/assets/${titleImage}`}
        alt="TitleImage"
        className="w-full h-1/4"
        draggable={false}
      />
      <div className="text-neutral-300 font-bold text-xl">
        <div className="inline">{releaseYear}</div>
        <div className="inline ml-5">{mpaRating}</div>
        <div className="inline ml-5">{duration}</div>
        <div className="max-w-full">{description}</div>
      </div>
      <div className="flex flex-row w-4/6 h-1/5">
        <div className="w-5/12 h-full bg-white rounded-full	flex flex-row items-center justify-center font-bold text-xl cursor-pointer">
          <img
            src="/assets/icons/play.png"
            alt="playIcon"
            draggable={false}
            className="w-2/12 h-1/2 mr-2"
          />
          Play
        </div>
        <div className="flex justify-center items-center w-5/12 h-full bg-blue-600 cursor-pointer rounded-full	font-bold text-xl text-white ml-3">
          More Info
        </div>
      </div>
    </div>
  );
};
