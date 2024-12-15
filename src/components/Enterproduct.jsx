import React, { useState } from "react";
import myCategory from "./category";
import { FaCamera } from "react-icons/fa6";

const Enterproduct = ({
  Enterproduct,
  isClose,
  setproductname,
  setproductimage,
  setproductcategory,
  setproductprice,
  setproductdescription,
}) => {
  const [priceError, setPriceError] = useState("");

  const fileChange = (e) => {
    let myImage = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(myImage);
    reader.onload = () => {
      setproductimage(reader.result);
    };
  };

  const validatePrice = (price) => {
    const isValid = /^[0-9]+$/.test(price);
    if (!isValid) {
      setPriceError(
        "Invalid price. Please enter a numeric value. Remove all signs and alphabetical value"
      );
    } else {
      setPriceError(null);
    }
    return price.replace(/[^0-9]/g, "");
  };

  return (
    <>
      <div className="w-full h-full top-0 right-0 bottom-0 fixed">
        <div
          onClick={Enterproduct}
          className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)]"
        ></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 p-4 max-w-3xl w-full bg-[#f1f1f1]">
          <div className="flex items-center justify-between border-b">
            <h2 className="text-lg font-semibold mb-2">Add Product</h2>
            <button
              onClick={Enterproduct}
              className="border rounded mb-2 text-white bg-projectRed-2 py-1  px-3"
            >
              close
            </button>
          </div>

          {/* <div className='gri'> */}
          <div className="grid my-2">
            <span className="text-lg font-semibold">Select Image</span>
            <div className=" w-full cursor-pointer rounded bg-white shadow outline-projectRed-2 py-1 flex items-center">
              <FaCamera className="mx-2" />
              <input
                className="file:hidden w-full cursor-pointer py-2 bg-transparent placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2"
                type="file"
                src=""
                alt=""
                accept="image/*"
                onChange={(e) => fileChange(e)}
              />
            </div>
          </div>

          <input
            type="text"
            placeholder="Enter product name"
            className=" my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2"
            onChange={(e) => setproductname(e.target.value)}
          />

          <textarea
            id=""
            rows="10"
            placeholder="Product Description"
            className="sideBarScroll my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a] text-[#3a3a3a] font-semibold outline-projectRed-2 max-h-[150px] h-full"
            onChange={(e) => setproductdescription(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter product price"
            className=" my-2 py-2 px-2 w-full bg-slate-200  placeholder:text-[#3a3a3a]  text-[#3a3a3a] font-semibold outline-projectRed-2"
            onChange={(e) => {
              const price = validatePrice(e.target.value);
              setproductprice(price);
            }}
          />
          {priceError && <p className="text-red-500 text-sm">{priceError}</p>}

          <button
            className=" my-2  mt-4 py-2 px-2 w-full bg-projectRed-2 text-lg rounded-lg  placeholder:text-[#3a3a3a] text-white font-semibold outline-projectRed-2"
            onClick={isClose}
            disabled={priceError ? true : false}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Enterproduct;
