import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ContextoGeneral'

const NavbarInferior = () => {
    const { t } = useTranslation();
    const { isLogin } = useContext(ThemeContext);
    const { name } = useContext(ThemeContext);

    return (
        <div className="containerNav">
            <p>{t("name")} {name}</p>
            <p>{t("isLogin")} {isLogin}</p>
        </div>
    );
}

export default NavbarInferior;