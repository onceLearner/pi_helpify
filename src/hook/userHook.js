import axios from 'axios';
import React, { useEffect, useState } from 'react'



const useUser = (email) => {

    const [user, setUser] = useState(null);



    axios.get(`https://helpify-back.herokuapp.com/findUser?email=${email}`)
        .then(res =>

            setUser(res.data)

        )


    return user;




}

export default useUser;