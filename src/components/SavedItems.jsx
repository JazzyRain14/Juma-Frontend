import axios from "axios";
import React, { useEffect, useState } from "react";
const SavedItems = () => {
  const [countIncreament, setCountIncreament] = useState(0);
  const [AllCart, setAllCart] = useState([]);
  const endpoint = "https://juma-backend-delta.vercel.app/usercontrol/getsavedproduct";
  useEffect(() => {
    const getCart = async () => {
      let userId = localStorage.getItem("userId");
      let userOBJ = { userId };
      let productCart = await axios.post(endpoint, userOBJ);
      console.log(productCart);
      // setAllCart(productCart.data.cartProducts);
    };
    getCart();
  }, []);
  return (
    <section className="px-4 pt-4 overflow-auto">
      <div className="my-4 xl:flex flex-row w-full gap-5 lg:grid">
        <div className=" basis-3/4">
          <article className="w-full">
            <header className="border-b py-1 text-xl px-4">
              Cart({AllCart.length})
            </header>
            {AllCart.map((Cart, index) => (
              <div
                className="flex border-b flex-row mt-1 justify-between w-full"
                key={index}
              >
                <div className="flex flex-row flex-1 items-center p-4">
                  <div className="max-w-[120px] w-full h-[120px] relative rounded-full object-cover overflow-hidden flex bg-gray-200">
                    <img
                      className="abolute m-auto w-full"
                      src={Cart.productImage}
                      alt=""
                    />
                  </div>
                  <div className="w-full overflow-hidden px-3">
                    <h1 className="truncate text-lg font-semibold uppercase">
                      {Cart.productName}
                    </h1>
                    <p className="text-sm font-normal uppercase">
                      {Cart.productCategory}
                    </p>
                    <h1 className=" text-base text-projectBorder font-semibold">
                      <span className="mr-0.5">&#8358;</span>
                      {Cart.productPrice}.00
                    </h1>
                    <div className="flex gap-6 items-center">
                      <h1 className="font-semibold uppercase text-sm">
                        Quantity
                      </h1>{" "}
                      <div className="flex gap-1 justify-center items-center">
                        <FaMinus className="text-sm cursor-pointer" />
                        <span className="bg-gray-200 px-1 text-center">1</span>
                        <FaPlus className="text-sm cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-lg text-end h-fit p-2">
                  <LiaTimesSolid />
                </div>
              </div>
            ))}
          </article>
        </div>

        <div className="basis-1/4 rounded-lg">
          <article className="rounded-lg max-w-full bg-gray-400  sticky">
            <header className="border-b py-2 text-xl px-4">
              Cart Summarry
            </header>
            <div className="px-4 flex justify-between text-lg border-b py-2">
              <h2>Subtotal</h2>
              <h2>
                <span className="mr-2">&#8358;</span>00.00
              </h2>
            </div>
            <footer className="flex">
              <button className="py-3 m-auto px-4 my-2 bg-projectRed-2 text-white rounded">
                CHECKOUT(&#8358;00.00)
              </button>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SavedItems;
