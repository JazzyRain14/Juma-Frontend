import React, { useContext, useEffect, useState } from "react";
import {
  FaDumpster,
  FaMinus,
  FaPlus,
  FaRecycle,
  FaTrash,
} from "react-icons/fa6";
import cartImg from "../assets/Images/pexels-horizon-content-3738730-removebg-preview.png";
import TopNav from "../components/User/home/TopNav";
import Burger from "../assets/Images/pexels-horizon-content-3738730-removebg-preview.png";
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CheckOutModal } from "../components/User/home/Modals";
import { stringify } from "postcss";
import { number } from "yup";
import { CartProvider, CartContext, useCart } from "../CartContext";

const AllCart = () => {
  const [countIncreament, setCountIncreament] = useState(1);
  const [isTrue, setisTrue] = useState(false);
  const [checkoutModalIsTrue, setCheckoutModalIsTrue] = useState(false);
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();
  // const [AllCart, setAllCart] = useState([]);
  // const [cart, setCart] = useState("");
  // let AllCart = []
  // const endpoint =
  //   "https://juma-backend-delta.vercel.app/usercontrol/getcartproduct";
  const deleteEndpoint =
    "https://juma-backend-delta.vercel.app/usercontrol/deleteallitems";
  const deleteEachEndpoint =
    "https://juma-backend-delta.vercel.app/usercontrol/deleteoneproductincart";
  const updateProductQuantity =
    "https://juma-backend-delta.vercel.app/usercontrol/updatequantityofproduct";
  const endpoint =
    "https://juma-backend-delta.vercel.app/usercontrol/getcartproduct";

  // useEffect(() => {
  //   const getCart = async () => {
  //     let userId = localStorage.getItem("userId");
  //     let userOBJ = { userId };
  //     let productCart = await axios.post(endpoint, userOBJ);
  //     console.log(productCart);
  //     setAllCart(productCart.data.cartProducts);
  //     // AllCart = productCart.data.cartProducts
  //     // console.log(AllCart)
  //   };
  //   getCart();
  // }, []);}

  const deleteALLContent = async () => {
    let userId = localStorage.getItem("userId");
    try {
      let allContentDeleted = await axios.post(deleteEndpoint, { userId });
      console.log(allContentDeleted);
      dispatch({ type: "CLEAR_CART" });
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  const deleteEachProduct = async (index) => {
    let filteredArray = cart.find((item, ind) => index === ind);
    const Id = filteredArray._id;
    let oneProductdeleted = await axios.post(deleteEachEndpoint, { Id });
    console.log(oneProductdeleted);
    dispatch({ type: "REMOVE_FROM_CART", payload: filteredArray });
  };

  const goToDetails = (index) => {
    let filteredArray = cartItems.find((item, ind) => index == ind);
    localStorage.setItem("ProductDesc", JSON.stringify(filteredArray));
    let itemCategory = filteredArray[0].productCategory;
    let item_id = filteredArray[0]._id;
    setisTrue(true);
    setTimeout(() => {
      navigate(`/home/${itemCategory}/${item_id}`, {
        state: { filteredArray },
      });
      setisTrue(false);
    }, 1000);
  };

  const checkOut = () => {
    setCheckoutModalIsTrue(!checkoutModalIsTrue);
  };

  const increament = async (productId) => {
    try {
      const product = cart.find((item) => item._id === productId);

      let currentQuantity = 1;
        // parseInt(product.quantityOfProduct, 10);
      console.log(currentQuantity ++);
      // const newQuantity = currentQuantity

      // dispatch({
      //   type: "INCREMENT_QUANTITY",
      //   payload: { _id: productId, quantityOfProduct: newQuantity },
      // });

      // const response = await axios.patch(updateProductQuantity, {
      //   Id: productId,
      //   quantityOfProduct: newQuantity,
      // });
      // console.log("Backend confirmed update:", response.data);

     
    } catch (error) {
      console.error("Failed to increment quantity:", error);
    }
  };

  const decrement = async (index) => {
    try {
      const product = cart[index];
      const Id = product._id;

      if (product.quantityOfProduct <= 1) return;

      const updatedProductQuantity = await axios.patch(updateProductQuantity, {
        Id,
        quantityOfProduct: product.quantityOfProduct + 1,
      });

      console.log(updatedProductQuantity);

      dispatch({ type: "DECREMENT_QUANTITY", payload: { _id: index } });
    } catch (error) {
      console.error("Failed to decrement quantity:", error);
    }
  };

  const prices = cart.map((product) => parseInt(product.productPrice));
  const totalPrices = prices.reduce((a, b) => a + b, 0);

  return (
    <>
      <section className="px-4 pt-4 overflow-auto">
        <div className="my-4 xl:flex flex-row w-full gap-5 lg:grid">
          <div className=" basis-3/4">
            <article className="w-full">
              <header className="border-b py-1 text-xl px-4">
                Cart({cart.length})
              </header>
              {/* {error ? <h1>{error}</h1> : null} */}
              {/* {Loading ? (
                  <h1>Loading</h1>
                ) : ( */}
              {cart.length === 0 ? (
                <p className="border text-2xl font-semibold text-center py-5 my-2 rounded-lg bg-projectRed-2/20 text-projectRed-2/80">
                  Your cart is empty
                </p>
              ) : (
                cart.map((item, index) => (
                  <div
                    className="flex border-b flex-row mt-1 justify-between w-full"
                    key={item._id}
                  >
                    <div className="flex flex-row flex-1 items-center p-4">
                      <div className="max-w-[120px] w-full h-[120px] relative rounded-full object-cover overflow-hidden flex bg-gray-200">
                        <img
                          className="abolute m-auto w-full"
                          src={item.productImage}
                          alt=""
                        />
                      </div>
                      <div className="w-full overflow-hidden px-3">
                        <h1 className="truncate text-lg font-semibold uppercase">
                          {item.productName}
                        </h1>
                        <p className="text-sm font-normal uppercase">
                          {item.productCategory}
                        </p>
                        <h1 className=" text-base text-projectBorder font-semibold">
                          <span className="mr-0.5">&#8358;</span>
                          {item.productPrice}.00
                        </h1>
                        <div className="flex gap-6 items-center">
                          <h1 className="font-semibold uppercase text-sm">
                            Quantity
                          </h1>{" "}
                          <div className="flex gap-1 justify-center items-center">
                            <FaMinus
                              onClick={() => decrement(item._id)}
                              className="text-sm cursor-pointer"
                            />
                            <span className="bg-gray-200 px-1 text-center">
                              {item.quantityOfProduct}
                            </span>
                            <FaPlus
                              onClick={() => increament(item._id)}
                              className="text-sm cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-lg text-end p-2 grid">
                      <LiaTimesSolid
                        onClick={() => deleteEachProduct(index)}
                        className="cursor-pointer"
                      />
                      <button
                        onClick={() => goToDetails(index)}
                        className="text-[16px] text-projectRed-2 underline"
                      >
                        view details
                      </button>
                    </div>
                  </div>
                ))
              )}

              {/* {cartItems.map((Cart, index) => (
                <>
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
                            <FaMinus
                              onClick={() => decrement(index)}
                              className="text-sm cursor-pointer"
                            />
                            <span className="bg-gray-200 px-1 text-center">
                              {Cart.quantityOfProduct}
                            </span>
                            <FaPlus
                              onClick={() => increment(index)}
                              className="text-sm cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-lg text-end p-2 grid">
                      <LiaTimesSolid
                        onClick={() => deleteEachProduct(index)}
                        className="cursor-pointer"
                      />
                      <button
                        onClick={() => goToDetails(index)}
                        className="text-[16px] text-projectRed-2 underline"
                      >
                        view details
                      </button>
                    </div>
                  </div>
                </>
              ))} */}
            </article>
            <button
              onClick={deleteALLContent}
              className="w-full p-4 my-4 bg-projectRed-1 rounded-xl text-white text-lg font-semibold mt-2"
            >
              Delete all
            </button>
          </div>

          <div className="basis-1/4 rounded-lg">
            <article className="rounded-lg max-w-full bg-gray-400  sticky">
              <header className="border-b py-2 text-xl px-4">
                Cart Summarry
              </header>
              <div className="px-4 flex justify-between text-lg border-b py-2">
                <h2>Subtotal</h2>
                {/* {AllCart.map((Cart, index) => ( */}
                <h2>
                  <span className="mr-2">&#8358;</span>
                  {totalPrices}
                </h2>
                {/* ))} */}
              </div>
              <footer className="flex">
                <button
                  onClick={checkOut}
                  className="py-3 m-auto px-4 my-2 bg-projectRed-2 text-white rounded"
                >
                  CHECKOUT(&#8358; {totalPrices})
                </button>
              </footer>
            </article>
          </div>
        </div>
        {checkoutModalIsTrue && <CheckOutModal CheckOut={checkOut} />}
      </section>
    </>
  );
};

export default AllCart;
