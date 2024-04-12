import React, { useState } from 'react'
import AdminSideBar from '../../components/AdminSidebar'
const AdminHome = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <AdminSideBar/>
            <div className={`w-full overflow-hidden rounded-md sm:ml-20 max-sm:ml-20 lg:ml-[300px] transition-all duration-300 ease-in-out 
    ${isOpen ? 'sm:translate-x-[220px] max-sm:translate-x-[220px]' : 'sm:ml-0 max-sm:ml-0'}`}>
                Admin Home
            </div>
        </>
    )
}

export default AdminHome