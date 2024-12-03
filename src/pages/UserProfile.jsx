import React, { useRef, useState } from "react";
import SideBar from "../components/SideBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import profilePics from "../assets/Images/babyChef.jpg";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaAngleRight, FaBell, FaHeart, FaUser } from "react-icons/fa6";
import { FaAngleLeft, FaHistory, FaWallet } from "react-icons/fa";
import {
  EditUserModal,
  EditUserPhotoModal,
} from "../components/User/home/Modals";
// import Modal from 'react-overlays/Modal';
const UserProfile = () => {
  const ref = useRef();
  const [ifTrue, setifTrue] = useState(true);
  const [isEditUserOpened, setIsEditUserOpened] = useState(false);
  const [isEditUserPhotoOpened, setIsEditUserPhotoOpened] = useState(false);
  const openAccord = () => {
    setifTrue(!ifTrue);
  };
  const EditUser = () => {
    setIsEditUserOpened(!isEditUserOpened);
  };
  const EditUserPhoto = () => {
    setIsEditUserPhotoOpened(!isEditUserPhotoOpened);
  };
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <>
      <div className=" w-full flex items-center justify-between text-white font-semibold bg-projectBlack py-2">
        <aside className="flex items-center ml-3 text-4xl">
          <button onClick={goBack}>
            <FaAngleLeft />
          </button>
        </aside>
        <aside className="flex items-center gap-2 mr-3">
          <FaWallet className="text-green-700" />
          &#8358;80.00
        </aside>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col bg-projectBlack gap-2 py-2  items-center">
          <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden  object-cover mt-4">
            <img
              className="absolute w-full"
              src={profilePics}
              alt="My_Profile_Pics"
            />
          </div>

          <p className="mt-2 font-semibold text-xl text-white">@Baby Chef</p>
          <p className="font-semibold text-xl text-white">
            babychef123@gmail.com
          </p>

          <div className="flex border justify-around py-4 min-w-[500px] max-sm:min-w-full">
            <div className=" flex justify-between flex-col font-semibold text-white text-lg items-center">
              <LiaClipboardListSolid className="text-3xl" />
              My Orders
            </div>

            <Link
              to="/home/saveditems"
              className=" flex justify-between flex-col font-semibold text-white text-lg items-center"
            >
              <div className="flex items-center">
                <FaHeart className="text-3xl " />
                <span
                  className="flex justify-center items-center bg-projectRed-1 ring-2 ring-white text-sm rounded-full 
                            min-w-[20px] min-h-[20px] relative -left-1.5"
                ></span>
              </div>
              Wishlist
            </Link>

            <div className=" flex justify-between flex-col font-semibold text-white text-lg items-center">
              <div className=" flex items-center">
                <FaBell className="text-3xl" />
                <span
                  className="flex justify-center items-center bg-projectRed-1 ring-2 ring-white text-sm rounded-full 
                            min-w-[20px] min-h-[20px] relative -left-1.5"
                ></span>
              </div>
              Notifications
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-20 border max-sm:mx-0">
          <div className="border-b">
            <div
              onClick={openAccord}
              className="flex text-xl justify-between py-4 items-center transition 
                        duration-200 cursor-pointer"
            >
              <span className="flex gap-2 items-center">
                <FaUser />
                Edit Profile
              </span>
              <FaAngleRight />
            </div>
            <div className={`${ifTrue === true ? "hidden" : "block"}`}>
              <div className="flex items-center justify-center gap-x-4 mb-1 overflow-hidden">
                <button
                  onClick={EditUserPhoto}
                  className="border p-3 bg-projectRed-2 rounded-lg text-lg font-semibold text-white"
                >
                  Change Profile Pic
                </button>
                {isEditUserPhotoOpened && (
                  <EditUserPhotoModal EditUserPhotoModal={EditUserPhoto} />
                )}

                <button
                  onClick={EditUser}
                  className="border p-3 bg-projectRed-2 rounded-lg text-lg font-semibold text-white"
                >
                  Change Details
                </button>
                {isEditUserOpened && <EditUserModal EditUserModal={EditUser} />}
              </div>
            </div>
          </div>

          <NavLink
            to="/home/juma wallet"
            className="flex border-b text-xl justify-between  py-4 items-center"
          >
            <span className="flex gap-2 items-center">
              <FaWallet />
              Juma Wallet
            </span>
            <FaAngleRight />
          </NavLink>

          <div className="flex text-xl justify-between  py-4 items-center border-b">
            <span className="flex gap-2 items-center">
              <FaHistory />
              Transanction History
            </span>
            <FaAngleRight />
          </div>

          <div className="flex text-xl justify-between  py-4 items-center border-b">
            <span className="flex gap-2 items-center">
              <FaUser />
              Delete Account
            </span>
            <FaAngleRight />
          </div>

          <button className="text-white border bg-projectRed-2 py-2 rounded-lg text-lg font-semibold mt-6 mb-4">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
