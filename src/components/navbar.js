import { Link } from '@reach/router'
import React, { useState } from 'react'
import { IconClose, IconMenu } from './svg/mainIcons'


const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
}


const Navbar = ({ refs }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex   w-full justify-between md:px-10  purpitems-center p-3 " style={{ fontFamily: "Montserrat" }}>


            <div className=" flex  items-center space-x-2">

                <span className="text-lg  text-white  capitalize " >helpify</span>
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="45" height="35.997" viewBox="0 0 45 35.997">
                    <path id="Icon_awesome-hands-helping" data-name="Icon awesome-hands-helping" d="M34.313,13.5H23.625v3.938a5.063,5.063,0,0,1-10.125,0V8.887L8.937,11.63A4.49,4.49,0,0,0,6.75,15.483v3.326L1.125,22.057A2.245,2.245,0,0,0,.3,25.13l5.625,9.745A2.251,2.251,0,0,0,9,35.7l7.27-4.2h9.6a4.5,4.5,0,0,0,4.5-4.5H31.5a2.248,2.248,0,0,0,2.25-2.25v-4.5h.563A1.683,1.683,0,0,0,36,18.563V15.188A1.683,1.683,0,0,0,34.313,13.5ZM44.7,10.87,39.073,1.125A2.251,2.251,0,0,0,36,.3L28.73,4.5H21.544a4.534,4.534,0,0,0-2.384.682L16.8,6.652A2.235,2.235,0,0,0,15.75,8.557v8.88a2.812,2.812,0,0,0,2.813,2.813c1.554,0,2.813-2.812,2.813-2.812V11.25H34.313a3.94,3.94,0,0,1,3.938,3.938v2l5.625-3.248A2.252,2.252,0,0,0,44.7,10.87Z" transform="translate(0.002 -0.002)" fill="#31e7ee" />
                </svg>

            </div>

            <div className=" md:flex   items-center text-white  ">

                <div className=" md:flex  space-x-4 items-center text-white  hidden">
                    {refs.map(item => (
                        <span onClick={() => handleScroll(item.refName)}
                            className="   capitalize cursor-pointer hover:text-hamid "
                            style={{ fontWeight: "500" }}
                        >
                            {item.tabName}
                        </span>
                    ))}
                </div>

                <div className=" md:hidden" onClick={() => setIsOpen(true)}>
                    <IconMenu />
                </div>




                <div className="md:flex hidden items-center  space-x-4 pl-12">
                    <Link to="/login" >
                        <button className=" text-hamid md:text-base text-sm  " style={{ fontWeight: "500" }}>s'authentifier </button>
                    </Link>
                    <Link to="/register" >
                        <a className=" p-2 text-white md:text-base text-sm   bg-hamid rounded-3xl " style={{ fontWeight: "500" }}>creer compte </a>
                    </Link>


                </div>





            </div>

            { isOpen &&

                <div className="  absolute top-0 right-0 left-0 bottom-0 bg-gray-800">

                    <div className="absolute right-4 top-5 " onClick={() => setIsOpen(false)}>
                        <IconClose />
                    </div>
                    <div className="   flex flex-col py-20   space-y-10 items-center text-white  ">
                        {refs.map(item => (
                            <span onClick={() => handleScroll(item.refName)}
                                className="   capitalize cursor-pointer hover:text-hamid text-lg "
                                style={{ fontWeight: "500" }}
                            >
                                {item.tabName}
                            </span>
                        ))}
                    </div>

                    <div className=" flex  items-center justify-center  space-x-5  ">
                        <Link to="/login" >
                            <button className=" text-hamid md:text-base text-sm  " style={{ fontWeight: "500" }}>s'authentifier </button>
                        </Link>
                        <Link to="/register" >
                            <a className=" p-2 text-white md:text-base text-sm   bg-hamid rounded-3xl " style={{ fontWeight: "500" }}>creer compte </a>
                        </Link>


                    </div>


                </div>
            }






        </div>
    )
}

export default Navbar
