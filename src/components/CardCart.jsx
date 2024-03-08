import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";

export const CardCart = ({ card }) => {
  const [count, setCount] = useState(card.count);
  const { title, price, img } = card;
  const { setCart } = useContext(CartContext);

  return (
    <div className="card card-cart">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={`${process.env.REACT_APP_API_URL}/drug/image/${img}`}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{price}</p>
          </div>
          <input
            type="number"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
              setCart((prev) =>
                prev.map((item) =>
                  item.id !== card.id
                    ? item
                    : { ...item, count: e.target.value }
                )
              );
            }}
          />
          <button
            type="button"
            className="button is-primary"
            onClick={() => {
              setCart((prev) => prev.filter((item) => item.id !== card.id));
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
