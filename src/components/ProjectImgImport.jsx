import burger1 from '../assets/Images/pexels-horizon-content-3738730.jpg'
import burrrito1 from '../assets/Images/pexels-nishant-aneja-2955819.jpg'
import burrrito2 from '../assets/Images/pexels-pixabay-461198.jpg'
import { FaHouse, FaUser, FaList, FaCartShopping, FaAngleRight, FaAngleDown, FaBurger, FaJar, FaWineGlass, FaIceCream } from 'react-icons/fa6'
import { LuCroissant, LuCupSoda } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";

const projectImport = [
    {
        Product1: [
            {
                categoryName: "Burgers",
                categoryLink: '',
                categories: [
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    }
                ]
            }
        ],
        Product2: [
            {
                categoryName: "Burritos",
                categoryLink: '',
                categories: [
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burrrito1,
                        productPrice: "5000"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burrrito2,
                        productPrice: "5000"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burrrito1,
                        productPrice: "5000"
                    }
                ]
            }
        ],
        Product3: [
            {
                categoryName: "Burgers",
                categoryLink: '',
                categories: [
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    }
                ]
            }
        ],
        Product4: [
            {
                categoryName: "Burritos",
                categoryLink: '',
                categories: [
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burrrito1,
                        productPrice: "5000"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burrrito2,
                        productPrice: "5000"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burrrito1,
                        productPrice: "5000"
                    }
                ]
            }
        ],
        Product5: [
            {
                categoryName: "Burgers",
                categoryLink: '',
                categories: [
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    }
                ]
            }
        ],
        Product6: [
            {
                categoryName: "Burritos",
                categoryLink: '',
                categories: [
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burrrito1,
                        productPrice: "5000"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burrrito2,
                        productPrice: "5000"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burrrito1,
                        productPrice: "5000"
                    }
                ]
            }
        ],
        Product7: [
            {
                categoryName: "Burgers",
                categoryLink: '',
                categories: [
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    },
                    {
                        productName: "Portrait Burger With hot spicy Roasted Pork (450g)",
                        productImage: burger1,
                        productPrice: "6500"
                    }
                ]
            }
        ],
    }
]

const SidebarData = [
    {
        name: "Home",
        icon: <FaHouse />,
        path: "/home"
    },
    {
        name: "All Categories",
        icon: <FaList />,
        path: "/#",
        iconIsOpened: <FaAngleDown />,
        iconIsClosed: <FaAngleRight />,
        subItems: [
            {
                name: "Snacks",
                icon: <FaBurger />,
                path: "categories/cart1"
                // link:
            },
            {
                name: "Sauces & Condiments",
                icon: <FaJar />,
                path: "categories/cart2"
                // link:
            },
            {
                name: "Ethnic Food",
                icon: <ImSpoonKnife />,
                path: "categories/cart3"
                // link:
            },
            {
                name: "Bakery Items",
                icon: <LuCroissant />,
                path: "categories/cart4"
                // link:
            },
            {
                name: "Soft Drinks",
                icon: <LuCupSoda />,
                path: "categories/cart5"
                // link:
            },
            {
                name: "Alcoholic Beverages",
                icon: <FaWineGlass />,
                path: "categories/cart6"
                // link:
            },
            {
                name: "Desert & Sweets",
                icon: <FaIceCream />,
                path: "categories/cart7"
                // link:
            },
        ]
    },
    {
        name: "Profile",
        icon: <FaUser />,
        path: "userprofile"
    },
    {
        name: "Cart",
        icon: <FaCartShopping />,
        path: "product cart"
    },
    {
        name: "Help & Support",
        icon: < FaUser />,
        path: "help&support"
    },
]
const AdminSidebarData = [
    {
        name: "Home",
        icon: <FaHouse />,
        path: "/adminhome"
    },
    {
        name: "All Categories",
        icon: <FaList />,
        path: "/#",
        iconIsOpened: <FaAngleDown />,
        iconIsClosed: <FaAngleRight />,
        subItems: [
            {
                name: "Snacks",
                icon: <FaBurger />,
                path: "/adminhome/snacks"
                // link:
            },
            {
                name: "Sauces & Condiments",
                icon: <FaJar />,
                path: "/adminhome/saucesandcondiments"
                // link:
            },
            {
                name: "Ethnic Food",
                icon: <ImSpoonKnife />,
                path: "/adminhome/ethnicfood"
                // link:
            },
            {
                name: "Bakery Items",
                icon: <LuCroissant />,
                path: "/adminhome/bakeryitems"
                // link:
            },
            {
                name: "Soft Drinks",
                icon: <LuCupSoda />,
                path: "/adminhome/softdrinks"
                // link:
            },
            {
                name: "Alcoholic Beverages",
                icon: <FaWineGlass />,
                path: "/adminhome/alcoholicbeverages"
                // link:
            },
            {
                name: "Desert & Sweets",
                icon: <FaIceCream />,
                path: "/adminhome/desertandsweets"
                // link:
            },
        ]
    },
    {
        name: "Profile",
        icon: <FaUser />,
        path: "/adminprofile"
    }
]



export { projectImport, SidebarData, AdminSidebarData }