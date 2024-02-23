import React, { useState } from "react"
import { FaCamera } from "react-icons/fa6"
const EditUserModal = ({ EditUserModal }) => {
    return (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
            <div
                onClick={EditUserModal}
                className="w-full h-full top-0 left-0 right-0 bottom-0 fixed 
                bg-[rgba(49,49,49,0.8)]"></div>
            <div className="absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 bg-[#f1f1f1] p-4 max-w-[500px] w-full">
                <div className="flex items-center justify-between">
                    <h2>Edit Details</h2>
                    <button onClick={EditUserModal} className="border rounded text-white bg-projectRed-2 py-1  px-3">
                        close
                    </button>
                </div>
                <input
                    className="block outline-none px-2 py-1 border rounded w-full my-4"
                    placeholder="username"
                    type="text" />
                <input
                    className="block outline-none px-2 py-1 border rounded w-full mb-4"
                    placeholder="email"
                    type="email" />
                <button
                    className="block outline-none p-2 border bg-projectRed-2 text-white rounded w-full mb-4">
                    Submit
                </button>
            </div>
        </div>
    )
}
const EditUserPhotoModal = ({ EditUserPhotoModal }) => {

    return (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
            <div
                onClick={EditUserPhotoModal}
                className="w-full h-full top-0 left-0 right-0 bottom-0 fixed 
                bg-[rgba(49,49,49,0.8)]"></div>
            <div
                className="absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 p-4 max-w-[500px] w-full  bg-[#f1f1f1]">
                <div className="flex items-center justify-between">
                    <h2>Edit Profile Pic</h2>
                    <button
                        onClick={EditUserPhotoModal}
                        className="border rounded text-white bg-projectRed-2 py-1  px-3">
                        close
                    </button>
                </div>
                <label
                    className="grid gap-2"
                    htmlFor="">
                    Select Image
                    <div className=" w-fit cursor-pointer border rounded bg-white shadow py-1 border-red-500 flex items-center">
                        <FaCamera className="mx-2" />
                        <input
                            className="file:hidden w-full cursor-pointer"
                            type="file"
                            src=""
                            alt="" accept="image/*" />
                    </div>
                </label>
            </div>
        </div>
    )
}
export { EditUserModal, EditUserPhotoModal }