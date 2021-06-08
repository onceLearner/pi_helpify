import React, { useState, useEffect, useLayoutEffect } from 'react'
import { dataActivity, dataDays, dataHours, dataMobility } from '../../data/dataModalAjouter';
import { IconCloseModal } from '../svg/mainIcons';

import { rightUrl } from "../../utils/methods"

import Select from "react-select"


// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import { MapWithCircle } from '../map/MapWithCircle';
// import { MapWithMarker } from '../map/MapWithMarker'

import { customAlphabet } from 'nanoid'
import axios from 'axios';
import MapBox from '../map/MapBox';
const nanoid = customAlphabet('1234567890', 4)






const ModalAjouter = ({ openModalHook, setListOffres, listOffres, userInfo, setRefresh }) => {

    const [openModal, setOpenModal] = openModalHook




    const [position, setPosition] = useState([35.6475, 2]);

    const [perimeterForMap, setPerimtreForMap] = useState(1);


    const [choosedData, setChoosedData] = useState({

        id: nanoid(),
        isActive: true,
        typeActivity: {
            id: 1,
            title: ""
        },



        daysFrame: {
            start: {
                label: "lundi",
                value: "1"

            },
            end: {
                label: "mardi",
                value: "2"

            },
        },

        hoursFrame: {
            start: {
                label: "09:00",
                value: 9

            },
            end: {
                label: "12:00",
                value: 12

            }
        }
        ,
        mobilite: "velo",

        perimetre: 20,

    })
    const [etape, SetEtape] = useState(1);

    useEffect(() => {

        console.log({ choosedData })
    },
        [choosedData])



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
            <div className={`fixed z-30 top-12 md:right-20 md:left-20 left-10 right-10 bg-white flex flex-col p-3  transform scale-${ModalScale}  transition-transform ease-in rounded-xl`} style={{ transitionDuration: "200ms" }}>
                <button className="absolute right-3 top-2 hover:text-red-400  " onClick={() => setOpenModal(false)}><IconCloseModal /></button>

                <div className=" flex flex-col   " style={{ minHeight: "500px" }}>

                    {etape == 1 &&
                        <div className="TypeActivite">
                            <h2 className="text-gray-700 text-center p-2 ">Etape 1 : choisir type d'activite</h2>

                            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gri grid-cols-1 gap-4 ">
                                {
                                    dataActivity.map(item => (
                                        <button className={`md:w-52 w-full border-2   rounded-lg  hover:border-blue-500    `} onClick={() => setChoosedData(choosedData => ({ ...choosedData, typeActivity: { id: item.id, title: item.title } }))} key={item.id}>
                                            <img className="md:w-52 w-full h-60  object-cover" src={item.imgUrl} />
                                            <h4 className="py-2 text-lg text-gray-500">{item.title}</h4>


                                        </button>

                                    ))

                                }
                            </div>




                        </div>
                    }


                    {etape == 2 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 ">
                            <h2 className="text-gray-800 font-semibold ">Etape 2 : choisir votre moyen de deplacement disponible AKA mobilite</h2>

                            {
                                dataMobility.map(item => (
                                    <div onClick={() => setChoosedData(choosedData => ({ ...choosedData, mobilite: item.title }))} key={item.id} className={`flex flex-col items-center space-x-2 text-gray-600 bg-gray-200 rounded-md p-2 w-40 hover:bg-gray-300 hover:text-blue-600  cursor-pointer  capitalize text-xl ${choosedData.mobilite ? choosedData.mobilite.includes(item.title) && 'border-2 border-blue-500' : ''}`} >
                                        {item.Icon}
                                        <p>{item.title}</p>



                                    </div>


                                ))
                            }







                        </div>
                    }


                    {etape == 3 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-800 font-semibold  ">Etape 3 : choisir une   localization:</h2>

                            {/* <MapWithMarker positionHook={[position, setPosition]} /> */}


                            <MapBox setPosition={setPosition} position={position} />



                        </div>
                    }


                    {etape == 4 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-800 font-semibold ">Etape 4 : choisir votre  perimetre</h2>

                            <input type="range" onChange={(e) => { setPerimtreForMap(e.target.value); setChoosedData(choosedData => ({ ...choosedData, perimetre: e.target.value })) }} />

                            <h4 className="text-6xl text-blue-600  flex items-center " style={{ fontWeight: "800" }}>{choosedData.perimetre}    <p className="text-gray-500 text-3xl px-2">km</p></h4>




                            <MapBox setPosition={setPosition} />




                        </div>
                    }


                    {/* 
                    {etape == 3 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-700 ">Etape 3 : choisir votre   localization:</h2>

                            <input type="range" onChange={(e) => setChoosedData(choosedData => ({ ...choosedData, perimetre: e.target.value }))} />

                            <h4 className="text-4xl text-blue-600  " style={{ fontWeight: "800" }}>{choosedData.perimetre} </h4>
                            <p>km</p>

                          





                </div> */}





                    {etape == 5 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-700 ">Etape 5 : choisir votre cadre temporel:</h2>

                            <p>choisir la date </p>


                            <div className="flex space-x-4 items-center">
                                du
                                <Select
                                    className="w-40"
                                    options={dataDays}
                                    // value={choosedData.daysFrame.start}
                                    onChange={selected => setChoosedData({ ...choosedData, daysFrame: { ...choosedData.daysFrame, start: selected } })}


                                />

                               a :
                             <Select
                                    className="w-40"

                                    options={dataDays.filter(itemm => itemm.value >= choosedData.daysFrame.end.value)}
                                    value={choosedData.daysFrame.end}
                                    onChange={selected => setChoosedData({ ...choosedData, daysFrame: { ...choosedData.daysFrame, end: selected } })}


                                />
                            </div>


                            <p>choisir l'heure:</p>
                            <div className="flex space-x-4 items-center">
                                du
                                <Select
                                    className="w-40"
                                    options={dataHours}
                                    value={choosedData.hoursFrame.start}
                                    onChange={selected => setChoosedData({ ...choosedData, hoursFrame: { ...choosedData.hoursFrame, start: selected } })}

                                />

                               a :
                             <Select
                                    className="w-40"
                                    options={dataHours}
                                    value={choosedData.hoursFrame.end}
                                    onChange={selected => setChoosedData({ ...choosedData, hoursFrame: { ...choosedData.hoursFrame, end: selected } })}


                                />
                            </div>



                        </div>
                    }





                    <div className=" flex flex-wrap justify-center  scla space-x-4 p-2 mt-4 ">
                        <button onClick={() => SetEtape(etape + 1)} className={`p-2 bg-blue-600  ${etape == 5 && 'hidden'} hover:opacity-50 w-40 text-gray-50 rounded-3xl`}>Continuer</button>

                        <button className={`p-2  bg-blue-600   ${etape != 5 && 'hidden'} hover:opacity-50 w-40 text-gray-50 rounded-3xl`} onClick={() => {
                            const dataToSend = {

                                id: Number(choosedData.id),
                                start_day: parseInt(choosedData.daysFrame.start.value),
                                end_day: parseInt(choosedData.daysFrame.end.value),
                                start_time: `${choosedData.hoursFrame.start.label}`,
                                end_time: `${choosedData.hoursFrame.end.label}`,
                                perimetre: parseFloat(choosedData.perimetre),
                                type_activite: choosedData.typeActivity.title,
                                moyen_de_transport: choosedData.mobilite,
                                localisationX: position[0],
                                localisationY: position[1],
                                etat: "active",

                            }
                            console.table(dataToSend)

                            axios.post(rightUrl(`/user/${userInfo.email}/offre/add`), dataToSend)
                                .then(res => {
                                    console.log({ res: res.data })
                                    if (res.status === 200) {
                                        setOpenModal(false);
                                        setRefresh(nanoid())


                                    }

                                })
                                .catch(e => console.error({ e }))



                        }}>Confirmer</button>
                        <button onClick={() => SetEtape(etape > 1 ? etape - 1 : 1)} className={`p-2   w-40 bg-gray-200 hover:opacity-50 text-gray-600 rounded-3xl`}>precedent</button>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default ModalAjouter