import React, { useState } from "react"
const EditUser = ({toggleModal}) => {
    // const [modal, setModal] = useState(false)
    // const toggleModal = () => {
    //     // event.stopPropagation()
    //     setModal(!modal)
    // }
    return (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
            <div
                onClick={toggleModal}
                className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)]"></div>
            <div className="absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 bg-[#f1f1f1]">
                <h2>Hello Modal</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati rerum labore? Nostrum quibusdam illum fugit temporibus officiis id incidunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam assumenda voluptatem, corrupti nulla dolorem voluptatum fugiat nemo, ut magnam quibusdam possimus a quos et id repellendus ullam natus at neque?
                </p>
                <button onClick={toggleModal} className="absolute top-3 right-3 py-1  px-2">
                    close
                </button>
            </div>
        </div>
    )
}
export default EditUser