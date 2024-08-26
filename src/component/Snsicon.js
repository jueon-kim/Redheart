import react from 'react';

import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";

import '../css/Snsicon.css';


const Snsicon = () => {

    return (
<>
    <div className="Icon-Componet">
        <p className="icon Youtube-icon"><FaYoutube /></p>
        <p className="icon Insta-icon"><RiInstagramFill /></p>
        <p className="icon share-icon"><IoMdShare /></p>
    </div>
</>
    );
}

export default Snsicon;