import React, { useState, useEffect, useRef } from 'react'
import Img2 from "./photos/home9.jpg"
import ImgTest from "./photos/home4.jpg"
import { Link } from "@reach/router"
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Comment from './components/Comment'
import Community from './components/Community'
import Contact from './components/Contact'





const Home = () => {

    const HomeRef = useRef()
    const CommentREf = useRef()
    const CommunityRef = useRef()
    const ContactRef = useRef()


    const arrRef = [{ refName: HomeRef, tabName: "Accueil" }, { refName: CommentREf, tabName: "processus" }, { refName: CommunityRef, tabName: "Community" }, { refName: ContactRef, tabName: "Contact" }]





    return (
        <div className="flex flex-col  w-full" style={{ fontFamily: "Montserrat" }}>
            <div className=" relative" style={{ height: "800px" }}>

                <img className="w-full h-full object-cover z-0   " src={ImgTest} style={{ backgroundPosition: "bottom right" }} />

            </div>
            <div ref={HomeRef} className=" absolute top-0 right-0 left-0  bottom-0 bg-gradient-to-b from-purple-700 to-indigo-800 opacity-80  text-white " style={{ height: "800px" }}  >
            </div>

            <div className="w-full h-82   absolute top-0 right-0 left-0 z-50  flex flex-col " style={{ height: "800px" }}>
                <Navbar refs={arrRef} />
                <div className="flex flex-col  space-y-10 md:mt-40 mt-24 md:ml-20 md:items-baseline items-center px-10 ">
                    <h1 className="md:text-5xl text-2xl md:w-7/12 text-gray-100 " style={{ fontWeight: "600" }}>
                        “ C'est la seule perfection qu'il y a, la perfection d'aider les autres. ”
                  </h1>
                    <h2 className="text-gray-300 text-sm  pb-10 ">
                        Il ne peut y avoir de plus grand don que celui de donner son temps <br /> et son énergie pour aider les autres sans rien attendre en retour.
                    </h2>
                    <Link to="/register" >
                        <a className="   p-3 px-6 text-white md:text-xl   hover:bg-teal-500  bg-hamid rounded-3xl " style={{ fontWeight: "500" }}>Inscrivez vous Maintenant </a>
                    </Link>
                </div>
            </div>


            <div className=" flex-1 flex flex-col ">
                <div ref={CommentREf} >
                    <Comment />
                </div>

                <div ref={CommunityRef}>
                    <Community />
                </div>
                <div ref={ContactRef}>
                    <Contact />
                </div>

            </div>


            <footer >
                <Footer />
            </footer>

        </div>
    )
}

export default Home
