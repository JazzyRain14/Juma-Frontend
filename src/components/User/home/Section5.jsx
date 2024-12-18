import React, { useEffect, useState } from "react";
import axios from "axios";
import burger1 from "../../../assets/Images/pexels-horizon-content-3738730.jpg";
import { FaCartShopping, FaHeart, FaNairaSign } from "react-icons/fa6";
import { projectImport } from "../../ProjectImgImport";
import { Link, json, useNavigate } from "react-router-dom";
import { LoadingScreen } from "./Modals";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Section5 = (props) => {
  const productEndpoints =
    "https://juma-backend-delta.vercel.app/getproduct/getethnicfood";
  const [newProduct, setnewProduct] = useState([]);
  const [message, setMessage] = useState("");
  const [isTrue, setisTrue] = useState(false);
  const addToCartEndPoints =
    "https://juma-backend-delta.vercel.app/usercontrol/addtocart";
  const savedItemsEndPoints =
    "https://juma-backend-delta.vercel.app/usercontrol/saveditems";
  const navigate = useNavigate();
  useEffect(() => {
    const shoco = async () => {
      let product = await axios.get(productEndpoints);
      setnewProduct(product.data.ethnicFoodProduct);
    };
    shoco();
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
    let filteredArray = newProduct.filter((item, ind) => index == ind);
    if (filteredArray.length > 0) {
      let userId = localStorage.getItem("userId");
      let productName = filteredArray[0].productName;
      let productCategory = filteredArray[0].productCategory;
      let productPrice = filteredArray[0].productPrice;
      let productdescription = filteredArray[0].productdescription;
      let productImage = filteredArray[0].productImage;
      let quantityOfProduct = '1'
      let productOBJ = {
        productImage,
        productName,
        productCategory,
        productdescription,
        productPrice,
        userId,
        quantityOfProduct,
      };
      console.log(productOBJ);
      try {
        let result = await axios.post(addToCartEndPoints, productOBJ);
        if (result) {
          // console.log(result);
          // setMessage(result.data.message);
          toast.success(result.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
          });
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
            {newProduct.map((card, index) => (
              <div key={index} className="card">
                <div onClick={() => goToDetails(index)}>
                  <div
                    className=" h-[200px]
                            relative overflow-hidden"
                  >
                    <img
                      src={card.productImage}
                      alt=""
                      className="w-full absolute h-full object-contain"
                    />
                  </div>
                  <div className="cardTitle">
                    <h1 className="truncate font-semibold">
                      {card.productName}
                    </h1>
                    <p className="flex items-center font-semibold text-[14px]">
                      <FaNairaSign className=" text-[14px] text-[#434242]" />
                      {card.productPrice}
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
