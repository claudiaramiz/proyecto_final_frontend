import React from "react";
import { useTranslation } from 'react-i18next';
import {  Button } from 'react-bootstrap';


const NavbarInferior = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div className="containerNav">

            <div className="btn-group-lang">
                <button onClick={changeLanguage} value='en' className='btn btn-primary'>English</button>
                <button onClick={changeLanguage} value='es' className='btn btn-primary' >Español</button>
            </div>
        </div>
    );
}

export default NavbarInferior;