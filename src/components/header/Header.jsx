import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import cartSvg from "../../assets/icons/cart.svg";
import mainLogo from "../../assets/logo/logo.png";
import { useSelector } from "react-redux";
import Menu from "./Menu";
import Search from "./Search";

function Header() {
    const { orders } = useSelector((state) => state.cart);
    const [menuBody, setMenuBody] = useState(false);
    const isMounted = useRef(false);

    const toggle = () => setMenuBody(!menuBody);

    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(orders);
            localStorage.setItem("cart", json);
        }
        isMounted.current = true;
    }, [orders]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to={"/"} className="header__logo">
                        <img src={mainLogo} alt="Logo" />
                    </Link>
                    <Menu toggle={toggle} menuBody={menuBody} />
                    <div className="menu-header__block">
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
                                <span className="cart-count">
                                    {orders.length}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
