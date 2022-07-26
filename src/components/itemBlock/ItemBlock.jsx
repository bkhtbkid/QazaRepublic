import React from "react";

function ItemBlock({
    id,
    imageUrl,
    title,
    item,
    types,
    sizes,
    price,
    category,
    description,
    color,
    sale,
    gender,
}) {
    return (
        <div className="item-block">
            <img
                src="https://avatars.mds.yandex.net/i?id=ce1d5b3333c76cc4fa340badf0f7e95a_l-5313292-images-thumbs&n=13"
                alt="img"
            />
            <div className="item-block__info info-block">
                <div className="info-block__wrapper">
                    <h3 className="info-block__title">Fleece</h3>
                    <p className="info-block__subtitle">Худи унисекс</p>
                </div>
                <div className="info-block__price">22 000 тг</div>
            </div>
        </div>
    );
}

export default ItemBlock;
