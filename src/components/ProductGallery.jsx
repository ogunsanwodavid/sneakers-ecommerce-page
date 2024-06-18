import iconPrevious from "../assets/icon-previous.svg";
import iconNext from "../assets/icon-next.svg";
import Thumbnails from "./Thumbnails";

function ProductGallery({
  currentId,
  setCurrentId,
  currentImage,
  isDesktopWidth,
  thumbnailImages,
  setDisplayLightbox,
}) {
  function handlePreviousImage() {
    if (currentId === 1) return;

    setCurrentId((c) => c - 1);
  }

  function handleNextImage() {
    if (currentId === 4) return;

    setCurrentId((c) => c + 1);
  }

  return (
    <div className="w-full space-y-6">
      <main className="relative w-full h-[250px] md:h-max">
        {/**** Current Product Image */}
        <img
          src={currentImage}
          className="w-full h-full object-cover md:h-auto md:rounded-xl"
          onClick={() => {
            setDisplayLightbox(true);
          }}
        />

        {/**** Previous Icon */}
        {!isDesktopWidth && (
          <div
            className={`absolute top-[50%] left-4 translate-y-[-50%] h-8 w-8 rounded-full bg-white flex items-center justify-center ${
              currentId === 1 ? "opacity-60" : ""
            }`}
            onClick={handlePreviousImage}
          >
            <img src={iconPrevious} className="h-3" />
          </div>
        )}

        {/**** Next Icon */}
        {!isDesktopWidth && (
          <div
            className={`absolute top-[50%] right-4 translate-y-[-50%] h-8 w-8 rounded-full bg-white flex items-center justify-center ${
              currentId === 4 ? "opacity-60" : ""
            }`}
            onClick={handleNextImage}
          >
            <img src={iconNext} className="h-3" />
          </div>
        )}
      </main>

      {/**Thumbnails display */}
      <Thumbnails
        thumbnailImages={thumbnailImages}
        currentId={currentId}
        setCurrentId={setCurrentId}
        thumbnailContainerClass={"justify-between"}
        thumbnailImageClass={"lg:w-20"}
      />
    </div>
  );
}

export default ProductGallery;
