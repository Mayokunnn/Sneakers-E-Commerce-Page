import { CartItem } from "./CartItem";
import { Button } from "./Button";

export function Cart({ array, setArray, setCount }) {
  function handleDeleteItem(id) {
    // const newArr = array.filter((item) => item._id !== id);
    setArray((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckout() {
    console.log(array);
    setArray([]);
    setCount(1);
  }

  return (
    <div className="cart bg-white z-10 flex flex-col rounded-lg absolute w-4/5 min-h-[200px] shadow-xl md:w-[320px] ">
      <h2 className="p-3 font-bold border-b-[1.5px] ">Cart</h2>

      {array.length < 1 ? (
        <div className="flex m-auto">
          <p className=" text-darkGrayishBlue font-semibold ">
            Your cart is empty
          </p>
        </div>
      ) : (
        <div className="flex flex-col h-full p-3 ">
          {array.map((prod, i) => (
            <CartItem
              prod={prod}
              key={i}
              altText={i}
              onClick={handleDeleteItem}
            />
          ))}
          <div className="flex-end p-2">
            <Button onClick={handleCheckout}>Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
}
