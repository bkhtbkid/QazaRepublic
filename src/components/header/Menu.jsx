import React from "react";

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
                        <a href="" className="menu__link">
                            Новинки
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            Мужчины
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            Женщины
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            Дети
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            Сувениры
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            Аксессуары
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            Коллекция
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
