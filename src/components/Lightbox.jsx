import iconPrevious from "../assets/icon-previous.svg";
import iconNext from "../assets/icon-next.svg";
import iconCloseWhite from "../assets/icon-close-white.svg";

import Thumbnails from "./Thumbnails";

function Lightbox({
  currentId,
  setCurrentId,
  currentImage,
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

  function handleCloseLightBox() {
    setDisplayLightbox(false);
  }

  return (
    <div className="hidden fixed top-0 left-0 w-screen h-screen bg-black-opacified-bg z-40 items-center justify-center overflow-hidden md:flex">
      <main className="w-max space-y-6">
        {/****** Close Icon */}
        <img
          src={iconCloseWhite}
          className="h-4 ml-auto"
          onClick={handleCloseLightBox}
        />

        <section className="relative w-full h-[400px]">
          {/**** Current Display Image */}
          <img
            src={currentImage}
            className="w-full h-full object-cover rounded-xl"
          />

          {/**** Previous Icon */}
          <div
            className={`absolute top-[50%] left-0 translate-x-[-50%] translate-y-[-50%] h-10 w-10 rounded-full bg-white flex items-center justify-center ${
              currentId === 1 ? "opacity-60" : ""
            }`}
            onClick={handlePreviousImage}
          >
            <img src={iconPrevious} className="h-3" />
          </div>

          {/**** Next Icon */}
          <div
            className={`absolute top-[50%] right-0 translate-x-[50%] translate-y-[-50%] h-10 w-10 rounded-full bg-white flex items-center justify-center ${
              currentId === 4 ? "opacity-60" : ""
            }`}
            onClick={handleNextImage}
          >
            <img src={iconNext} className="h-3" />
          </div>
        </section>

        <Thumbnails
          thumbnailImages={thumbnailImages}
          currentId={currentId}
          setCurrentId={setCurrentId}
          thumbnailContainerClass={"justify-around px-8"}
          thumbnailClass={"border-black-opacified-bg"}
          thumbnailImageClass={"lg:w-16"}
        />
      </main>
    </div>
  );
}

export default Lightbox;
