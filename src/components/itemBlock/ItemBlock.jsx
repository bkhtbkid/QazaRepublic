import React from "react";
import { useDispatch } from "react-redux";
import { removeItems } from "../../redux/slices/cartSlice";

function ItemBlock(obj) {
    const dispatch = useDispatch();
    const item = obj[0];

    const onClickRemove = () => {
        dispatch(removeItems(obj[0].id));
    };

    return (
        <>
            {item && (
                <div className="item-block" key={item.id}>
                    <img src={item.imageUrl} alt="img" className="item-image" />
                    <div className="item-block__info info-block">
                        <div className="info-block__wrapper">
                            <h3 className="info-block__title">{item.title}</h3>
                            <p className="info-block__subtitle">{item.color}</p>
                            <div className="info-block__price">
                                {item.price} тг
                            </div>
                            <div className="info-block__gender">
                                {item.gender}
                            </div>
                            <button
                                onClick={onClickRemove}
                                className="info-block__remove button"
                            >
                                Удалить товар
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ItemBlock;
