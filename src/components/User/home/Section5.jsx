import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import burger1 from "../../../assets/Images/pexels-horizon-content-3738730.jpg";
import { FaCartShopping, FaHeart, FaNairaSign } from "react-icons/fa6";
import { projectImport } from "../../ProjectImgImport";
import { Link, json, useNavigate } from "react-router-dom";
import { LoadingScreen } from "./Modals";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../../../CartContext";
const Section5 = (props) => {
  const [newProduct, setnewProduct] = useState([]);
  const { dispatch } = useCart();
  const [message, setMessage] = useState("");
  const [isTrue, setisTrue] = useState(false);

  const productEndpoints =
    "https://juma-backend-delta.vercel.app/getproduct/getethnicfood";
  const addToCartEndPoints =
    "https://juma-backend-delta.vercel.app/usercontrol/addtocart";

  const savedItemsEndPoints =
    "https://juma-backend-delta.vercel.app/usercontrol/saveditems";

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await fetch(productEndpoints);
        const data = await product.json();
        setnewProduct(data.ethnicFoodProduct);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProduct();
  }, []);

  const goToDetails = (index) => {
    let filteredArray = newProduct.filter((item, ind) => index == ind);
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

  const AddToCart = async (index) => {
    const findProduct = newProduct.find((item, ind) => index === ind);
    console.log(findProduct);
    const userId = localStorage.getItem("userId");
    const quantityOfProduct = "1";
    const productOBJ = {
      productImage: findProduct.productImage,
      productName: findProduct.productName,
      productCategory: findProduct.productCategory,
      productdescription: findProduct.productdescription,
      productPrice: findProduct.productPrice,
      userId,
      quantityOfProduct,
    };
    try {
      const response = await axios.post(addToCartEndPoints, productOBJ);
      toast(response.data.message);

      dispatch({ type: "ADD_TO_CART", payload: findProduct });
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  const AddSavedItems = async (index) => {
    let filteredArray = newProduct.filter((item, ind) => index == ind);
    if (filteredArray.length > 0) {
      let userId = localStorage.getItem("userId");
      let productName = filteredArray[0].productName;
      let productCategory = filteredArray[0].productCategory;
      let productPrice = filteredArray[0].productPrice;
      let productdescription = filteredArray[0].productdescription;
      let productImage = filteredArray[0].productImage;
      let productOBJ = {
        productImage,
        productName,
        productCategory,
        productdescription,
        productPrice,
        userId,
      };
      console.log(productOBJ);
      try {
        let result = await axios.post(savedItemsEndPoints, productOBJ);
        if (result) {
          console.log(result.data.message);
          setMessage(result.data.message);
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No matching record");
    }
  };

  return (
    <>
      <section className="py-4">
        <ToastContainer />
        <div className="flex items-center justify-between">
          <h1 className="lg:text-xl sm:text-lg max-sm:text-base font-semibold">
            Ethnic Food
          </h1>
          <Link className="text-projectRed-2">see more...</Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4 mt-2 sideBarScroll pb-6">
            {newProduct.map((product, index) => (
              <div key={index} className="card">
                <div onClick={() => goToDetails(index)}>
                  <div
                    className=" h-[200px]
                            relative overflow-hidden"
                  >
                    <img
                      src={product.productImage}
                      alt=""
                      className="w-full absolute h-full object-contain"
                    />
                  </div>
                  <div className="cardTitle">
                    <h1 className="truncate font-semibold">
                      {product.productName}
                    </h1>
                    <p className="flex items-center font-semibold text-[14px]">
                      <FaNairaSign className=" text-[14px] text-[#434242]" />
                      {product.productPrice}
                    </p>
                  </div>
                </div>
                <div className="flex text-lg justify-between gap-4 items-center">
                  <button
                    className="cardButton"
                    onClick={() => AddToCart(index)}
                  >
                    Add to cart
                    <FaCartShopping />
                  </button>
                  <button onClick={() => AddSavedItems(index)}>
                    <FaHeart className=" text-2xl text-projectBorder mr-4 hover:text-projectRed-2 transition-colors duration-200 ease-in-out cursor-pointer" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isTrue && <LoadingScreen />}
    </>
  );
};

export default Section5;
