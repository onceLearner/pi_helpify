import Img1 from "../photos/register.jpg"
import Img2 from "../photos/marjane.jpg"
import Img3 from "../photos/activity3.jpg"
import Img4 from "../photos/activity4.jpg"

import { MdDirectionsBike, MdDirectionsCar, MdDirectionsWalk } from "react-icons/md"
import { BiMapPin } from "react-icons/bi"


export const dataActivity = [
    {
        id: 1,
        title: "Gardenage",
        imgUrl: Img1
    },
    {
        id: 2,
        title: "faire les courses",
        imgUrl: Img2
    },
    {
        id: 3,
        title: "déménagement",
        imgUrl: Img3
    },
    {
        id: 4,
        title: "divers",
        imgUrl: Img4
    },
]


export const dataMobility = [
    {
        id: 1,
        title: "a pied",
        Icon: <MdDirectionsWalk className="w-16 h-16" />
    },
    {
        id: 2,
        title: "velo",
        Icon: <MdDirectionsBike className="w-16 h-16" />

    },
    {
        id: 3,
        title: "motorise",
        Icon: <MdDirectionsCar className="w-16 h-16" />

    }

]

export const dataDays = [
    {
        value: 1,
        label: "lundi"

    }
    ,
    {
        value: 2,
        label: "mardi"


    },
    {

        value: 3,
        label: "mercredi"
    },
    {
        value: 4,
        label: "jeudi"

    }
    , {
        value: 5,
        label: "vendredi"

    }
    , {
        value: 6,
        label: "samedi"

    }
    , {
        value: 7,
        label: "dimanche"

    }

]



export const dataHours = [
    {
        value: 6,
        label: "06:00"

    }
    ,
    {
        value: 7,
        label: "07:00"


    },
    {

        value: 8,
        label: "08:00"
    },
    {
        value: 9,
        label: "09:00"

    }
    , {
        value: 10,
        label: "10:00"

    }
    , {
        value: 11,
        label: "11:00"

    }
    , {
        value: 12,
        label: "12:00"

    }
    , {
        value: 13,
        label: "13:00"

    }

    , {
        value: 14,
        label: "14:00"

    }

    , {
        value: 15,
        label: "15:00"

    }

    , {
        value: 16,
        label: "16:00"

    }

    , {
        value: 17,
        label: "16:00"

    }

    , {
        value: 18,
        label: "18:00"

    }

    , {
        value: 19,
        label: "19:00"

    }

    , {
        value: 20,
        label: "20:00"

    }
    , {
        value: 21,
        label: "21:00"

    }


]