import Button from "./Button";

import iconDelete from "../assets/icon-delete.svg";

function Cart({
  cartInfo,
  setCartInfo,
  showCart,
  setShowCart,
  setMessage,
  setDisplayMessage,
}) {
  const totalPrice = cartInfo.price * cartInfo.quantity;

  function handleDeleteCart() {
    setCartInfo({ price: 0, quantity: 0, image: "" });
  }

  function handleCheckoutCart() {
    setCartInfo({ price: 0, quantity: 0, image: "" });
    setShowCart(false);
    setDisplayMessage(true);
    setMessage("You have successfully checked out and your order placed!");
  }

  return (
    <div
      className={`${
        showCart ? "flex" : "hidden"
      } flex-col w-[calc(100%_-_1rem)] max-w-[315px] bg-white absolute top-full h-[200px] z-20 -ml-3 mt-2 rounded-lg  overflow-hidden md:right-0 md:-ml-3 md:-mt-3`}
    >
      <div className="w-full px-5 py-3 border-b-[1px] border-b-grayish-blue">
        <p className="text-base text-black font-bold">Cart</p>
      </div>

      <section className="w-full h-full">
        {/*** Displays this div only if no item in cart */}
        {!cartInfo.quantity && (
          <div className="w-full h-full flex items-center justify-center text-dark-grayish-blue text-base font-bold">
            Your cart is empty
          </div>
        )}

        {cartInfo.quantity && (
          <div className="w-full h-full p-5 space-y-4">
            <main className="flex space-x-1 justify-between items-center h-10">
              <img src={cartInfo.image} className="h-full rounded-[0.2rem] " />

              <div className="flex flex-col justify-between text-sm text-dark-grayish-blue font-semibold">
                <p>Fall Limited Edition Sneakers</p>

                <div className="flex space-x-2">
                  <span>
                    {`$${cartInfo.price.toFixed(2)} × ${cartInfo.quantity}`}{" "}
                  </span>{" "}
                  <span className="font-bold text-black">
                    {`$${totalPrice.toFixed(2)}`}
                  </span>
                </div>
              </div>

              {/** Delete icon */}
              <img
                src={iconDelete}
                className="h-4"
                onClick={handleDeleteCart}
              />
            </main>

            <Button onClick={handleCheckoutCart}>Checkout</Button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Cart;
