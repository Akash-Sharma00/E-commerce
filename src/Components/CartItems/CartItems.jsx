import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItem, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
  console.log(cartItem);

  return (
    <div className="cartitems">
      <div className="cartitem-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item, i) => {
        if (cartItem[item.id] > 0) {
          return (
            <div key={i}>
              <div className="cartitem-formate cartitem-formate-main">
                <img
                  src={item.image}
                  alt=""
                  className="cartitem-product-icon"
                />
                <p>{item.name}</p>
                <p>₹{item.new_price}</p>
                <button className="cartitem-quantity">
                  {cartItem[item.id]}
                </button>
                <p>{item.new_price * cartItem[item.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  className="cartitems-remove-icon"
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
            <button>Proceed To Checkout</button>
          </div>
          </div>
          <div className="cartitem-promocode">
            <p>If you have a promocode enter here</p>
            <div className="cartitem-promocodebox">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
