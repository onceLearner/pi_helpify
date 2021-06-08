import React from 'react'

const Contact = () => {
    return (
        <div className="  flex flex-col flex-1 bg-gray-50  items-center  space-y-8 py-12  " style={{ fontFamily: "Gilroy Regular" }}>

            <h1 className="text-xl md:text-4xl text-gray-700 " style={{ fontFamily: "Gilroy Bold" }}> Get in Touch</h1>
            <h5 className="text-gray-400 text-sm md:text-lg transform -translate-y-6">Feel free to send us your queries </h5>
            <div className="flex flex-col space-y-6  p-3 w-full md:w-2/3">

                <input className="p-3 border border-gray-100  " type="text" placeholder="Subject" />
                <input className="p-3 border border-gray-100 " type="text" placeholder="Your Email" />

                <textarea className="  h-32 p-2" placeholder="I want to get in touch with you because ..." />


            </div>
            <button className="p-3 px-8 text-center bg-gradient-to-r from-teal-700 to-indigo-700 text-white rounded-md  " >Submit</button>


        </div>
    )
}

export default Contact
