import "./App.css";

import productImage1 from "./assets/image-product-1.jpg";
import productImage2 from "./assets/image-product-2.jpg";
import productImage3 from "./assets/image-product-3.jpg";
import productImage4 from "./assets/image-product-4.jpg";

import thumbnailImage1 from "./assets/image-product-1-thumbnail.jpg";
import thumbnailImage2 from "./assets/image-product-2-thumbnail.jpg";
import thumbnailImage3 from "./assets/image-product-3-thumbnail.jpg";
import thumbnailImage4 from "./assets/image-product-4-thumbnail.jpg";

import Navbar from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import { useEffect, useMemo, useState } from "react";
import ProductInfo from "./components/ProductInfo";
import AppMessage from "./components/AppMessage";
import Lightbox from "./components/Lightbox";

function App() {
  const productImages = useMemo(() => {
    return [
      {
        id: 1,
        url: productImage1,
      },
      {
        id: 2,
        url: productImage2,
      },
      {
        id: 3,
        url: productImage3,
      },
      {
        id: 4,
        url: productImage4,
      },
    ];
  }, []);

  const thumbnailImages = [
    {
      id: 1,
      url: thumbnailImage1,
    },
    {
      id: 2,
      url: thumbnailImage2,
    },
    {
      id: 3,
      url: thumbnailImage3,
    },
    {
      id: 4,
      url: thumbnailImage4,
    },
  ];

  const [navHeight, setNavHeight] = useState(0);

  const [isDesktopWidth, setIsDesktopWidth] = useState(
    window.innerWidth >= 780
  );

  /**** This effect handles window width changes */
  useEffect(() => {
    const handleResize = () => {
      setIsDesktopWidth(window.innerWidth >= 780);
    };

    /*** This event listener ensures state updates on window width change */
    window.addEventListener("resize", handleResize);

    handleResize();

    /*** Removed event listener as component unmounts */
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsDesktopWidth]);

  const [currentId, setCurrentId] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const originalPrice = 250;
  const discountPercentage = 50;
  const discountedPrice = ((100 - discountPercentage) / 100) * originalPrice;

  const [currentImage, setCurrentImage] = useState("");

  /***** Set current used image using the current active id */
  useEffect(() => {
    function getProductImageUrl(id) {
      const productImage = productImages
        .filter((image) => image.id === id)
        .at(0);
      return productImage.url;
    }

    setCurrentImage(getProductImageUrl(currentId));
  }, [productImages, currentId]);

  {
    /**** Object contains important information about cart */
  }

  const [cartInfo, setCartInfo] = useState({
    price: 0,
    quantity: 0,
    image: "",
  });

  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState(false);

  const [displayLightbox, setDisplayLightbox] = useState(false);

  return (
    <div className="w-full font-kumbh-sans">
      <Navbar
        cartInfo={cartInfo}
        setCartInfo={setCartInfo}
        setMessage={setMessage}
        setDisplayMessage={setDisplayMessage}
        setNavHeight={setNavHeight}
      />

      <div
        className="w-full max-w-[760px] lg:max-w-[1000px] mx-auto md:flex md:flex-row md:items-center md:space-x-10 md:p-10 lg:px-20 lg:py-16 lg:space-x-20"
        style={{ marginTop: `${navHeight}px` }}
      >
        <ProductGallery
          currentId={currentId}
          setCurrentId={setCurrentId}
          currentImage={currentImage}
          navHeight={navHeight}
          isDesktopWidth={isDesktopWidth}
          thumbnailImages={thumbnailImages}
          setDisplayLightbox={setDisplayLightbox}
        />

        <ProductInfo
          quantity={quantity}
          setQuantity={setQuantity}
          originalPrice={originalPrice}
          discountPercentage={discountPercentage}
          discountedPrice={discountedPrice}
          currentImage={currentImage}
          setCartInfo={setCartInfo}
          setMessage={setMessage}
          setDisplayMessage={setDisplayMessage}
        />
      </div>

      {displayMessage && (
        <AppMessage
          message={message}
          setMessage={setMessage}
          setDisplayMessage={setDisplayMessage}
        />
      )}

      {displayLightbox && (
        <Lightbox
          currentId={currentId}
          setCurrentId={setCurrentId}
          currentImage={currentImage}
          navHeight={navHeight}
          isDesktopWidth={isDesktopWidth}
          thumbnailImages={thumbnailImages}
          setDisplayLightbox={setDisplayLightbox}
        />
      )}
    </div>
  );
}

export default App;
