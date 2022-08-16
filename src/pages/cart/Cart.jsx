import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemBlock from "../../components/itemBlock/ItemBlock";
import { clearItems } from "../../redux/slices/cartSlice";
import classes from "./cart.module.scss";

function Cart() {
    const dispatch = useDispatch();
    const { orders, totalPrice } = useSelector((state) => state.cart);

    const emptyCart = orders.map((obj, index) => {
        return <ItemBlock key={index} {...obj} />;
    });

    const onClickClear = () => {
        dispatch(clearItems());
    };

    return (
        <section className="cart">
            <div className="container">
                <div className="cart__wrapper">
                    {orders.length ? (
                        <>
                            <div className={classes.topCart}>
                                <h2 className="topCart__title">
                                    <svg
                                        top="10px"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                    Корзина
                                </h2>
                                <button
                                    onClick={onClickClear}
                                    className="top-cart__button button"
                                >
                                    Очистить корзину
                                </button>
                            </div>
                            <div className="cart__content content-cart">
                                {emptyCart}
                            </div>
                            <div className={classes.cartBot}>
                                <p className="cartBot__text">
                                    Общая сумма заказа: <b>{totalPrice}</b> тг.
                                </p>
                                <button className="cart-bot__button button">
                                    Оплатить сейчас.
                                </button>
                            </div>
                        </>
                    ) : (
                        <h1
                            style={{
                                textAlign: "center",
                                margin: "0 auto",
                                height: "300px",
                                padding: "40px 0",
                            }}
                        >
                            Корзина пустая.
                        </h1>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Cart;
