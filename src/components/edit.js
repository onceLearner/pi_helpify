import axios from 'axios'
import React, { useEffect, useState } from 'react'


import * as EmailValidator from 'email-validator';
import { GiCheckMark, GiSwordSpin } from 'react-icons/gi';
import { Link } from '@reach/router';
import { FaHandsHelping } from 'react-icons/fa';

import { rightUrl } from "../utils/methods"

const handleEdit = (data, setMessage) => {
    console.log(15425)

    const url = {
        remote: "https://helpify-back.herokuapp.com/user/edit",
        local: "http://localhost:8081/user/edit"
    }


    if (!EmailValidator.validate(data.email))
        return setMessage("email no valid")


    setMessage(<GiSwordSpin size="30px" className="animate-spin text-purple-600" />)


    axios.post(rightUrl("/user/edit"), data)
        .then(res => {
            console.log(res.data)
            if (res.data)
                setTimeout(() => { setMessage(<div className="text-green-500  flex items-center  gap-2"> <GiCheckMark /> Profile bien mis a jour !</div>) }, 2000)

            else setMessage("Erreure! veuillez reessayer")
        })
        .catch(e => console.error(e))
}














const Edit = () => {


    const [data, setData] = useState({
        email: "hamid@gmail.com",
        prenom: "hamid",
        nom: "doe",
        adress: "tata",
        telephone: "000049984",


    })






    const [message, setMessage] = useState(null)




    useEffect(() => {


        const url = {
            remote: "https://helpify-back.herokuapp.com/findUser",
            local: "http://localhost:8081"
        }


        axios.get(rightUrl("/findUser") + "?email=" + localStorage.getItem("email")).then(
            res => {

                setData(res.data)
            })



    }, [])






    return (
        <div className="h-screen w-screen overflow-hidden flex items-center justify-center" style={{ background: "#edf2f7" }} onload='document.email.focus()'>
            <div className="w-screen min-h-screen bg-gradient-to-tr from-purple-800 to-blue-400  flex items-center justify-center px-5 py-5">
                <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
                    <div className="md:flex w-full">
                        <div className="hidden text-center border-4  md:flex flex-col justify-center items-center md:block w-1/2 m-0 bg-white ">


                            <Link to="/">
                                <div className="flex flex-col items-center ">
                                    <FaHandsHelping className="text-blue-400" style={{ color: "#31E7EE" }} size="120px" />

                                    <p className="text-5xl " style={{ color: "#6F4BFF", fontWeight: "600" }}>
                                        Helpify
                                 </p>
                                </div>
                            </Link>

                        </div>
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="text-center mb-10">
                                <h1 className="font-bold text-3xl text-gray-900">Informations du profil</h1>
                                <p>Modifier vos informations personnelles</p>
                            </div>
                            <div>

                                <div className="flex -mx-3">
                                    <div className="w-1/2 px-3 mb-5">
                                        <label for="" className="text-xs font-semibold px-1">Nom</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input value={data.nom} onChange={(evt) => setData({ ...data, nom: evt.target.value })} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" a="El Harchi" required />
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3 mb-5">
                                        <label for="" className="text-xs font-semibold px-1">Prenom</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input value={data.prenom} onChange={(evt) => setData({ ...data, prenom: evt.target.value })} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" a="Abderrahmane" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label for="" className="text-xs font-semibold px-1">Email</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input value={data.email} onChange={(evt) => setData({ ...data, email: evt.target.value })} type="email" id='email' className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 cursor-not-allowed" disabled a="Harrouch@gmail.com" required />
                                        </div>
                                        <p id="msg" style={{ fontSize: "12px" }} className="text-red-400"></p>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-1/2 px-3 mb-5">
                                        <label for="" className="text-xs font-semibold px-1">Mot de pass</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input onChange={(evt) => setData({ ...data, password: evt.target.value })} type="password" id="pass" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" minlength="8" a="************" />
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3 mb-5">
                                        <label for="" className="text-xs font-semibold px-1">Repeter le mot de pass</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input type="password" id="Conpass" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" minlength="8" a="************" />
                                        </div>
                                    </div>

                                </div>

                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label for="" className="text-xs font-semibold px-1">Adresse</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input value={data.adress} onChange={(evt) => setData({ ...data, adress: evt.target.value })} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" a="145, rue tejdur yussufia marrakech" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <button

                                            onClick={() => handleEdit(data, setMessage)}
                                            className="block  text-white rounded-lg px-3 py-3 font-semibold w-full max-w-xs mx-auto bg-gradient-to-r from-purple-800 to-blue-400 hover:shadow-lg">Enregistrer les modifications</button>
                                    </div>
                                </div>
                                <div>
                                    {message}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Edit
