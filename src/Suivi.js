import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from "./components/navbar2"
import { rightUrl } from './utils/methods';

import { useLocation } from "@reach/router"
import { parse } from "query-string"
import moment from "moment"
import { IconLoader } from './components/svg/mainIcons';
import Countdown from 'react-countdown';
import StaticMapbox from './components/map/StaticMapbox';
import { FaHandsHelping } from 'react-icons/fa';
import { Rating } from '@material-ui/lab';

const Suivi = ({ id, demandeOffreId }) => {

  const location = useLocation()
  const searchParams = parse(location.search)

  console.log({ searchParams })

  const [demandeOffre, setDemandeOffre] = useState(null);

  const [commentaire, setCommentaire] = useState("")

  const [isCanTerminate, setIsCanTerminate] = useState(false)

  const [value, setValue] = React.useState(3);


  useEffect(() => {

    axios.get(rightUrl("/demandeOffre/demandeOffres"))
      .then(res => {


        console.log({ aallOffresDemandes: res.data })

        setDemandeOffre(res.data.find(item => item.id == demandeOffreId))
        console.log({ founddemandeOffre: res.data.find(item => item.id == demandeOffreId) })
      })
      .catch(e => console.error({ errorInDemandeOffres: e }))


  }, [])


  if (!demandeOffre) return (
    <div>


      <div className=" flex flex-col h-screen  " >
        <Navbar />

        <div className="flex  flex-col items-center p-16"><IconLoader /> <p>chargememnt...</p></div>
      </div>
    </div>
  )


  return (
    <div className="flex flex-col  w-full space-y-5" style={{ fontFamily: "Montserrat" }}>
      <div className="Navbar w-full    " >
        <Navbar isHelper={false} ></Navbar>

        <section class="pb-5 pt-5 bg-gray-200 ">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white p-5 mb-0
                text-indigo-600 text-center font-bold text-xl ">

            <p>Temps restants</p>


            <Countdown
              date={new Date(`${demandeOffre.demande.date}`).getTime()}
              onComplete={() => { alert("time is up "); setIsCanTerminate(true) }}
            />

          </div>


          <h3 className="text-center py-2 border-b border-gray-300  text-xl font-medium text-gray-600"> Recapitulatif:</h3>

          <div class="Main flex flex-wrap md:space-x-32 md:p-10 w-full  px-4 mr-auto ml-auto">

            <div
              class="flex-1 flex flex-col min-w-0 break-words  mb-6 shadow-lg rounded-lg bg-purple-600 p-5 mb-0
                "
            >
              <h1 className={`md:text-3xl text-lg text-gray-50  p-2 px-4 rounded-full flex items-center ml-40 `} style={{ fontWeight: "600" }}>Demande: #{demandeOffre.demande.id} </h1>


              <div className="Type Activite">

                <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Type activite</p>

                <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                  <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
                    <FaHandsHelping className="w-6 h-6 text-gray-300" />
                    <div className="text-gray-300">
                      <p >{demandeOffre.demande.type_activite}</p>

                      {/* <p >acitive divers</p> */}
                    </div>
                  </div>


                </div>

              </div>


              <div className="description">

                <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Description</p>

                <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                  <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
                    <div className="text-gray-300">
                      <p >{demandeOffre.demande.description}</p>

                    </div>
                  </div>

                </div>

              </div>


              <div className="date">

                <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>date </p>

                <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                  <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
                    <div className="text-gray-300">
                      <p >{demandeOffre.demande.date}</p>


                    </div>

                  </div>


                </div>

                <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Heure </p>

                <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                  <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
                    <div className="text-gray-300 flex ">

                      <span className="text-lg text-gray-300 " style={{ fontWeight: "700" }}>{demandeOffre.demande.time}h</span>

                    </div>

                  </div>


                </div>
                <div className="Localisation">
                  <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Localisation</p>

                  <StaticMapbox localisationX={demandeOffre.demande.localisationX} localisationY={demandeOffre.demande.localisationY} />
                </div>


              </div>




            </div>



            <div
              class=" 
                flex flex-col  flex-1 h-80  bg-green-500  hover:bg-green-400   mb-6 shadow-lg rounded-lg  p-10 mt-0
                "
            >
              <h1 className={`md:text-2xl text-lg text-gray-50  p-2 px-4  `}
                style={{ fontWeight: "600" }}>

                Offreur associé
              </h1>



              <div className="idoffre">

                <p className="capitalize text-sm text-gray-200 " style={{ fontWeight: "500" }}>id offre: </p>

                <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                  <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
                    <div className="text-gray-300">
                      <p className="text-gray-50" >{demandeOffre.offre.id}</p>


                    </div>

                  </div>


                </div>

              </div>

              <div className="nom">

                <p className="capitalize text-sm text-gray-200 " style={{ fontWeight: "500" }}>nom et prenom: </p>

                <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                  <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
                    <div className="text-gray-300">
                      <p className="text-gray-50" >{demandeOffre.offre.user.nom}, {demandeOffre.offre.user.prenom}</p>



                    </div>

                  </div>


                </div>

              </div>




            </div>







          </div>

        </section>

        <div class="mt-10">
          <div class="md:flex items-stretch ... ml-40 hidden   ">

            <div class="ml-40">
              DEMARRER
    <div class="py-4 px-2 flex items-center ...">
                <p class="rounded-full  mr-2 h-6 w-6 flex items-center bg-green-600"></p>
                <p class=" h-2 px-10 bg-green-600"></p>
              </div>
            </div>

            <div class="">
              DEPART
    <div class="py-4 px-2 flex items-center ...">
                <p class="rounded-full  mr-2 h-6 w-6 flex items-center bg-gray-300"></p>
                <p class=" h-2 px-10 bg-gray-300"></p>
              </div>
            </div>

            <div class="">
              EN COURS
    <div class="py-4 px-2 flex items-center ...">
                <p class="rounded-full  mr-2 h-6 w-6 flex items-center bg-gray-300"></p>
                <p class=" h-2 px-10 bg-gray-300"></p>
              </div>
            </div>

            <div class="">
              FIN
    <div class="py-4 px-2 flex items-center ...">
                <p class="rounded-full  mr-2 h-6 w-6 flex items-center bg-gray-300"></p>
                <p class=" h-2 px-10 bg-gray-300"></p>
              </div>
            </div>



            <div class="">
              COMMENTAIRE
    <div class="py-4 px-2 flex items-center ...">
                <p class="rounded-full  mr-2 h-6 w-6 flex items-center bg-gray-300"></p>


              </div>
            </div>
          </div>

          <div class="flex flex-col items-stretch ... ml-40 md:hidden  ">

            <div class="">
              DEMARRER
    <div class="py-4 px-2 flex items-center ...">
                <p class="rounded-full  mr-2 h-6 w-6 flex items-center bg-green-600"></p>

              </div>
              <p class="  w-2 py-10 ml-4 bg-green-600"></p>
            </div>


            <div class="">
              DEPART
    <div class="py-4 px-2 flex items-center ...">
                <p class="rounded-full  mr-2 h-6 w-6 flex items-center bg-gray-300"></p>

              </div>
              <p class="  w-2 py-10 ml-4 bg-gray-300"></p>
            </div>

            <div class="">
              EN COURS
    <div class="py-4 px-2 flex items-center ...">
                <p class="rounded-full  mr-2 h-6 w-6 flex items-center bg-gray-300"></p>
              </div>
              <p class="  w-2 py-10 ml-4 bg-gray-300"></p>
            </div>

            <div class="">
              FIN
    <div class="py-4 px-2 flex items-center ...">
                <p class="rounded-full  mr-2 h-6 w-6 flex items-center bg-gray-300"></p>
              </div>
              <p class="  w-2 py-10 ml-4 bg-gray-300"></p>
            </div>



            <div class="">
              COMMENTAIRE
    <div class="py-4 px-2 flex items-center ...">
                <p class="rounded-full  mr-2 h-6 w-6 flex items-center bg-gray-300"></p>


              </div>
            </div>
          </div>
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            {
              isCanTerminate &&
              <div className="p-3  flex   items-center  border-t border-b py-2 my-6">
                <p className="text-sm font-semibold px-6  " onClick={() => {

                }}>Terminer la demande et evaluer le Helper?</p>
                <button



                  className="bg-green-600 hover:opacity-75 text-gray-100 rounded-md px-2">Terminer</button>
              </div>
            }


            <div
              class="relative flex flex-col min-w-0 break-words p-4    rounded-lg   w-full   bg-gray-50  mt-8 mb-8">

              <h1 className={`md:text-2xl text-lg text-gray-400  p-2 px-4 rounded-full flex items-center ml-40  `} style={{ fontWeight: "600" }}>
                Evaluation
              </h1>
              <div className="p-2 items-center flex justify-between">
                <p className="text-gray-500 text-sm">note</p>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);

                  }}
                />
              </div>


              <textarea onChange={(e) => setCommentaire(e.target.value)}
                class="bg-transparent pt-4 p-3 w-full text-black text-lg outline-none mt-5 border rounded-md mb-4 bg-white
                " placeholder="Ecrire votre commentaire" rows="5"></textarea>

              <button onClick={() => {

                if (demandeOffre.etat != "termine") return alert("Vous ne pouvez commentez qu'a la fin! ")

                else {
                  searchParams.isOffreur == "1" ?


                    axios.put(rightUrl(`/demandeOffre/modify/${demandeOffre.id}/setcoment/byOffreur/${commentaire}`))
                      .then(res => {
                        if (res.status == 200)
                          alert('commentaire laisse!')
                      })
                      .catch(e => console.error({ errorCommentOff: e }))
                    :

                    axios.put(rightUrl(`/demandeOffre/modify/${demandeOffre.id}/setcoment/byDemandeur/${commentaire}/${value}`))
                      .then(res => {
                        if (res.status == 200)
                          alert('commentaire laisse!')
                      })
                      .catch(e => console.error({ errorCommentOff: e }))




                }

              }}

                class="bg-blue-400 rounded-full text-blue-100  inline-block py-2 px-4" >Publier</button>







            </div>



          </div>

        </div>


      </div>


    </div>


  )
}
export default Suivi;