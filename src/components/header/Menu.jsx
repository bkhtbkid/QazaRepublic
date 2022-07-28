import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
    return (
        <div className="header__menu menu menu-header">
            <div className="menu-header__help--media">Помощь</div>
            <button
                onClick={props.toggle}
                type="button"
                className={
                    props.menuBody
                        ? "menu__icon icon-menu menu__icon--active"
                        : "menu__icon icon-menu"
                }
            >
                <span></span>
            </button>
            <nav
                className={
                    props.menuBody
                        ? "menu__body--active menu__body"
                        : "menu__body"
                }
            >
                <ul className="menu__list">
                    <li className="menu__item">
                        <Link to={"/latest"} className="menu__link">
                            Новинки
                        </Link>
                    </li>
                    <li className="menu__item">
                        <Link to={"/male"} className="menu__link">
                            Мужчины
                        </Link>
                    </li>
                    <li className="menu__item">
                        <Link to={"/female"} className="menu__link">
                            Женщины
                        </Link>
                    </li>
                    <li className="menu__item">
                        <Link to={"/kids"} className="menu__link">
                            Дети
                        </Link>
                    </li>
                    <li className="menu__item">
                        <Link to={"/souvenirs"} className="menu__link">
                            Сувениры
                        </Link>
                    </li>
                    <li className="menu__item">
                        <Link to={"/accessories"} className="menu__link">
                            Аксессуары
                        </Link>
                    </li>
                    <li className="menu__item">
                        <Link to={"/collections"} className="menu__link">
                            Коллекции
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
