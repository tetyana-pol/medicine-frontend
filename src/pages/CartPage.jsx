import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext";
import { CardCart } from "../components/CardCart";
import { authService } from "../services/authService";

export const CartPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
  });

  const { cart } = useContext(CartContext);
  const { addOrder } = authService;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("adress", formData.adress);
    for (let item of cart) {
      data.set("idDrug", item.id);
      data.set("count", item.count);
      await addOrder(data);
    }

    setFormData((prevData) => ({
      ...prevData,
      name: "",
      email: "",
      phone: null,
      adress: "",
    }));
  };

  const totalPrice = () => {
    return 999;
  };

  console.log(cart);

  return (
    <div className="container">
      <div className="companies">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Adress</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="adress"
                value={formData.adress}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <button type="submit" className="button is-primary">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="drugs">
        {cart.map((el) => (
          <CardCart key={el.id} card={el} />
        ))}
        <div>Total price: {totalPrice()}</div>
      </div>
    </div>
  );
};
