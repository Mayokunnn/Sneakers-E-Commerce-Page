import cart from "../images/icon-cart.svg";
import { Button } from "./Button";
import { Count } from "./Count";

export function Description({
  itemsCount,
  handleItemsCount,
  product,
  onClick,
}) {
  function handleClick() {
    handleItemsCount(1);
    onClick();
  }

  return (
    <div className="px-6 xl:py-24 md:px-0">
      <div className="space-y-3 xl:space-y-5 xl:pr-28">
        <h3 className="tracking-widest uppercase text-sm font-semibold text-orange">
          Sneaker Company
        </h3>
        <h2 className="font-bold text-2xl lg:text-4xl text-left">
          {product.name}
        </h2>
        <p className="leading-relaxed text-grayishBlue font-medium">
          {product.description}
        </p>
        <div>
          <div className="flex gap-3 items-center ">
            <p className="text-2xl font-bold ">${product.price}.00 </p>
            <span className="text-orange text-sm bg-paleOrange px-2 rounded-sm font-medium ">
              {product.discount}%
            </span>
          </div>
          <p className="font-medium text-grayishBlue line-through">
            ${product.originalPrice}.00
          </p>
        </div>
        <div className="flex flex-col md:flex-row xl:w-3/4 gap-3 items-center">
          <Count itemsCount={itemsCount} setItemsCount={handleItemsCount} />
          <Button onClick={handleClick}>
            <img src={cart} className="w-4 " alt="Cart"></img> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
