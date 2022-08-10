import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartSvg from "../../assets/icons/cart.svg";
import mainLogo from "../../assets/logo/logo.png";

import Menu from "./Menu";
import Search from "./Search";

function Header() {
    const [menuBody, setMenuBody] = useState(false);

    const toggle = () => setMenuBody(!menuBody);

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to={"/"} className="header__logo">
                        <img src={mainLogo} alt="Logo" />
                    </Link>
                    <Menu toggle={toggle} menuBody={menuBody} />
                    <div className="menu-header__block">
                        <div className="menu-header__help">Помощь</div>
                        <div className="menu-header__item">
                            <Search />
                            <Link to={"/cart"}>
                                <img
                                    src={cartSvg}
                                    alt=""
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
