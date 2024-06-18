import iconMinus from "../assets/icon-minus.svg";
import iconPlus from "../assets/icon-plus.svg";
import iconCartDark from "../assets/icon-cart-dark.svg";

import Button from "./Button";

function ProductInfo({
  quantity,
  setQuantity,
  originalPrice,
  discountPercentage,
  discountedPrice,
  currentImage,
  setCartInfo,
  setMessage,
  setDisplayMessage,
}) {
  function handleQuantityDec() {
    //set the minimum quantity to 1
    if (quantity === 1) return;

    setQuantity((q) => q - 1);
  }

  function handleQuantityInc() {
    setQuantity((q) => q + 1);
  }

  function handleAddToCart() {
    setCartInfo({
      price: discountedPrice,
      quantity: quantity,
      image: currentImage,
    });
    setQuantity(1);
    setDisplayMessage(true);
    setMessage(
      quantity === 1
        ? "Your item is successfully added to cart"
        : "Your items are sucessfully added to cart"
    );
  }

  return (
    <div className="w-full p-4 pb-16 space-y-4 md:pb-0 md:p-0 md:space-y-5">
      <h1 className="uppercase text-dark-grayish-blue text-[13px] font-bold lg:text-[14px]">
        SNEAKER COMPANY
      </h1>

      <h2 className="text-black text-2xl font-bold md:text-3xl lg:text-4xl">
        Fall Limited Edition Sneakers
      </h2>

      <p className="text-dark-grayish-blue font-medium text-base md:!mt-4 lg:!mt-8">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <section className="flex items-center justify-between md:flex-col md:items-start">
        <div className="flex items-center space-x-3 md:w-full ">
          <h3 className="text-black text-2xl font-bold">{`$${discountedPrice.toFixed(
            2
          )}`}</h3>

          <p className="h-max text-white text-[12px] bg-black font-bold px-2 py-1 rounded-md flex items-center justify-center">
            {`${discountPercentage ? discountPercentage : ""}%`}
          </p>
        </div>

        <div className="text-dark-grayish-blue font-bold line-through md:w-max">
          {`$${originalPrice ? originalPrice.toFixed(2) : ""}`}
        </div>
      </section>

      <section className="space-y-4 md:space-y-0 md:flex md:space-x-3">
        <div className="flex items-center justify-between p-3 bg-light-grayish-blue md:w-[220px]">
          <img
            src={iconMinus}
            className="h-1 hover:opacity-70"
            onClick={handleQuantityDec}
          />

          <p className="text-black text-base font-bold">{quantity}</p>

          <img
            src={iconPlus}
            className="h-3 hover:opacity-70"
            onClick={handleQuantityInc}
          />
        </div>

        {/*** Add to cart button */}
        <Button onClick={handleAddToCart}>
          <div className="flex items-center justify-center space-x-3">
            <img src={iconCartDark} className="h-3" />

            <p>Add to cart</p>
          </div>
        </Button>
      </section>
    </div>
  );
}

export default ProductInfo;
