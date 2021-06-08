import axios from 'axios';
import { customAlphabet } from 'nanoid';
import React, { useState, useEffect } from 'react'
import { dataActivity, dataDays, dataHours, dataMobility } from '../../data/dataModalAjouter';
import { rightUrl } from '../../utils/methods';
import { IconCloseModal } from '../svg/mainIcons';


const nanoid = customAlphabet('1234567890', 5)



const ModalMatchingOffres = ({ openModalHook, userInfo, matchingoffresHook, modalDemande }) => {


    const [openModal, setOpenModal] = openModalHook

    const [listOffresMatching, setListOffresMatching] = matchingoffresHook



    useEffect(() => {

    },
        [])



    // just for TRANSITION 
    const [ModalScale, setModalScale] = useState(50);
    // just transitino 
    useEffect(() => {
        const tm = setTimeout(() => setModalScale(105), 10)

        return () => {
            clearTimeout(tm)

        }
    }, [])




    return (
        <div >
            <div className="fixed  z-20 bg-black opacity-70 top-0 right-0 left-0 bottom-0 " style={{ fontFamily: "Montserrat" }}></div>
            <div className={`fixed z-30 top-12 md:right-20 md:left-20 left-10 right-10 bg-white flex flex-col p-6  transform scale-${ModalScale}  transition-transform ease-in rounded-xl`} style={{ transitionDuration: "200ms" }}>
                <button className="absolute right-3 top-2 hover:text-red-400  " onClick={() => setOpenModal(false)}><IconCloseModal /></button>

                {
                    listOffresMatching.length ?


                        <div className=" flex flex-col space-y-4 w-ful h-full    " style={{ minHeight: "500px" }}>
                            <h1 className="pb-5 text-sm font-bold text-gray-800 ">Toutes les offres qui correspondent a votres Demandes : </h1>
                            {
                                listOffresMatching.map(offre => (<div className="flex flex-col relative space-y-2 p-6  border border-gray-100 rounded-lg shadow-md    md:w-96 w-full   ">
                                    <h3>{offre.user.nom} {" "} {offre.user.prenom}</h3>


                                    <button

                                        onClick={() => {

                                            const dataToSend = {
                                                id: Number(`${modalDemande.id}${offre.id}`),
                                                idOffreur: offre.user.email,
                                                idDemandeur: userInfo.email,
                                                etat: "attente",
                                                commentOffreur: null,
                                                commnetDemandeur: null

                                            }

                                            console.table(dataToSend)

                                            axios.post(rightUrl(`/demandeOffre/add/${modalDemande.id}/${offre.id}`), dataToSend)
                                                .then(res => {
                                                    if (res.status) alert("envoi du demande avec Success")
                                                    console.log({ resppoonse: res.data })
                                                })
                                                .catch(e => console.error({ error_Choisir: e }))
                                        }}



                                        className="absolute bottom-3 right-2  p-2 px-6 w-40  rounded-md bg-blue-600 text-gray-50 hover:bg-hamid   ">Choisir </button>

                                </div>))
                            }

                        </div>

                        :

                        <div className=" flex flex-col items-center justify-center h-full w-full     text-lg capitalize  " style={{ minHeight: "500px" }}>
                            <p> pas d'offres qui correspondent a votre demande pour le moment!</p>

                        </div>



                }



            </div>

        </div >
    )
}

export default ModalMatchingOffres