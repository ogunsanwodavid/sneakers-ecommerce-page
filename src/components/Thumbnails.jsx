//////////// This thumbnail is customizable with the thumbnailContainerClass, thumbnailClass and thumbnailImageClass props.

function Thumbnails({
  thumbnailImages,
  currentId,
  setCurrentId,
  thumbnailContainerClass,
  thumbnailClass,
  thumbnailImageClass,
}) {
  return (
    <ul
      className={`hidden relative  space-x-4  md:flex ${thumbnailContainerClass}`}
    >
      {thumbnailImages.map((thumbnailimage) => {
        return (
          <li
            key={thumbnailimage.id}
            className={`relative overflow-hidden rounded-lg border-2 transition-all duration-100 ease-linear bg-white group ${
              thumbnailimage.id === currentId ? "border-2 !border-orange" : ""
            } ${thumbnailClass}`}
            onClick={() => {
              setCurrentId(thumbnailimage.id);
            }}
          >
            <img
              src={thumbnailimage.url}
              className={`w-16 group-hover:opacity-40 ${
                thumbnailimage.id === currentId ? " opacity-40" : ""
              } ${thumbnailImageClass}`}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Thumbnails;
