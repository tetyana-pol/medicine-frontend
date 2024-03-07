import { useContext } from "react";
import { CartContext } from "../components/CartContext";

export const CardDrug = ({ card }) => {
  const { title, description } = card;
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">{description}</div>
        <button
          className="button is-primary"
          type="button"
          onClick={() => {
            const itemInCart = cart.find((el) => el.id === card.id);
            if (itemInCart) {
              setCart((prev) =>
                prev.map((el) =>
                  el.id === card.id ? { ...el, count: el.count + 1 } : el
                )
              );
            } else {
              setCart((prev) => [...prev, { ...card, count: 1 }]);
            }
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
