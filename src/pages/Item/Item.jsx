import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import action from "../../redux/Action";
import classes from "../../components/scss/components/item.module.scss";
import { addItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function Item() {
    const dispatch = useDispatch();
    const items = action();
    const [order, setOrder] = useState();
    const { id } = useParams();
    const some = useRef();

    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios(
                    `https://62d40ad6cd960e45d4522b59.mockapi.io/QazaqRepublic/${id}`
                );
                setOrder(data);
            } catch (error) {
                alert(error);
            }
        }
        getData();
    }, []);

    if (!order) {
        return "Загрузка...";
    }

    const addOnClick = (event) => {
        const item = items.filter((elem) => {
            let obj;
            if (event.target.id === elem.id) {
                obj = {
                    title: elem.title,
                    imageUrl: elem.imageUrl,
                    id: elem.id,
                    price: elem.price,
                    collection: elem.collection,
                };
            }
            return obj;
        });
        dispatch(addItem(item));
    };

    return (
        <section className="item">
            <div className={classes.itemTopWrapper}>
                <div className={classes.itemImage}>
                    <img src={order.imageUrl} alt="" />
                </div>
                <div className={classes.blockItem}>
                    <h2 className="block-item__title">{order.title}</h2>
                    <div className="block-item__sizes"></div>
                    <div className="block-item__price">
                        Цена: <b>{order.price} тг.</b>
                    </div>
                    <button
                        className="block-item__button button"
                        onClick={addOnClick}
                        ref={some}
                        id={order.id}
                    >
                        Добавить в корзину
                    </button>
                </div>
            </div>
            <div className="item-bot__wrapper">
                <p className={classes.paragraph}>Описание</p>
                <p className={classes.description}>{order.description}</p>
            </div>
        </section>
    );
}

export default Item;
