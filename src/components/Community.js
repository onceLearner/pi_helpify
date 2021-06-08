import React from 'react'
import Img1 from "../../src/photos/community1.jpg"
import Img2 from "../../src/photos/community2.jpg"
import Img3 from "../../src/photos/community3.jpg"


const Community = () => {
    return (
        <div className="flex py-16 flex-col items-center  bg-gradient-to-b from-purple-700 to-indigo-700 text-gray-50">
            <h1 className="text-5xl px-2  mb-6" style={{ fontWeight: "600" }}> Une communaute tres implique</h1>

            <div className="flex flex-wrap  md:space-x-8 mt-6 md:space-y-0 space-y-10 md:p-20 p-4  ">

                <div className="flex  flex-col items-center space-y-5 md:w-60 p-2 w-full ">
                    <img src={Img1} alt="img" className="rounded-full w-40 h-40 object-cover " />
                    <h2 className="text-xl text-hamid " > Abdellah</h2>

                    <p >
                        "
                        Aider les autres, pour moi, est comme un devoir ; une chance de  connaître et de me faire connaitre.                        "
                </p>

                </div>

                <div className="flex  flex-col items-center space-y-5 md:w-60 p-2 w-full " >
                    <img src={Img2} alt="img" className="rounded-full w-40 h-40 object-cover" />
                    <h2 className="text-xl text-hamid "> Abdellah</h2>

                    <p>
                        "
                        Quand les ges  s'entraident, le malheur ne peut pas les atteindre.                        "
                </p>

                </div>


                <div className="flex  flex-col items-center space-y-5 md:w-60 p-2 w-full">
                    <img src={Img3} alt="img" className="rounded-full w-40 h-40 object-cover " />
                    <h2 className="text-xl text-hamid"> Abdellah</h2>

                    <p>
                        "
                        Helpify me donne l'opportunite d'aider  mes voisin, de me sentir utile
                        "
                </p>

                </div>

                <div className="flex  flex-col items-center space-y-5 md:w-60 p-2 w-full " >
                    <img src={Img2} className="rounded-full w-40 h-40 object-cover" />
                    <h2 className="text-xl text-hamid"> Abdellah</h2>

                    <p>
                        "
                        Rien ne va m'arreter , je vais toujours etre a la hauteur d'aider  les gens , on est plus fort ensemble
                        "
                </p>

                </div>




            </div>

        </div>
    )
}

export default Community
