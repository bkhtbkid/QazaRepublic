import React from "react";
import action from "../../redux/Action";

function Item() {
    const items = action().data;

    return (
        <section className="item">
            <div className="container">
                <div className="item-top__wrapper">
                    <div className="item__image">{items.imageUrl}</div>
                    <div className="item__block block-item">
                        <h4 className="block-item__title">{items.title}</h4>
                        <div className="block-item__sizes"></div>
                        <div className="block-item__price">
                            {items.price} тг.
                        </div>
                        <button className="block-item__button button">
                            Добавить в корзину
                        </button>
                    </div>
                </div>
                <div className="item-bot__wrapper">
                    <h3 className="item-bot__title">{items.title}</h3>
                    <p className="item-bot__description">{items.description}</p>
                </div>
            </div>
        </section>
    );
}

export default Item;
