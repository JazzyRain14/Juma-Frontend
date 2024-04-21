import React, { useContext, useState } from 'react'
import AdminSideBar from '../../components/AdminSidebar'
import TopNav from '../../components/User/home/TopNav';
import { SharedContext } from '../../components/User/home/SharedContextProvider';
import AdminHomeSection1 from '../../components/AdminModal/AdminHomeSection1';
const AdminHome = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const { isOpen, toggleOpen } = useContext(SharedContext);
    return (
        <>
            <section className='flex gap-4 justify-between h-full w-full'>
                <AdminSideBar />
                <div className={`w-full border overflow-hidden rounded-md sm:ml-0 max-sm:ml-0 lg:ml-[300px] transition-all duration-300 ease-in-out 
    ${isOpen ? 'sm:translate-x-[300px] max-sm:translate-x-[300px]' : 'sm:ml-0 max-sm:ml-0'}`}>
                    <div className='px-4 pt-4'>
                        <TopNav />
                        <hr className='rounded-lg bg-[#585757] h-0.5 my-2' />
                    </div>
                    <div className='py-4 px-4'>
                        <AdminHomeSection1/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminHome