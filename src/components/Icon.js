import React from "react"
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa"

const Icon = ({ name }) => {
    switch (name) {
        case 'circle':
            return <FaRegCircle classname="Icon" />
        case 'cross':
            return <FaTimes classname="Icon" />
        default:
            return <FaPen classname="Icon" />



    }
};

export default Icon;