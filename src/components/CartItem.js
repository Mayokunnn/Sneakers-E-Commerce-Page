import iconDelete from "../images/icon-delete.svg";

export function CartItem({ prod, altText, onClick }) {
  const totalPrice = prod.price * prod.count;
  return (
    <div className="flex w-full p-2 h-20 gap-3 text-darkGrayishBlue font-semibold ">
      <img
        className="w-[25%] rounded-lg"
        src={prod.imagesThumb[0]}
        alt={`Item ${altText}`}
      ></img>
      <div className="font-medium  flex flex-col justify-center text-base">
        <p className="text-sm">{prod.name}</p>
        <p>
          {prod.price}.00 x {prod.count}{" "}
          <span className="font-bold text-black"> ${totalPrice}.00</span>{" "}
        </p>
      </div>
      <div className="flex items-center">
        <img
          onClick={() => onClick(prod.id)}
          className="cursor-pointer"
          src={iconDelete}
          alt="Delete"
        ></img>
      </div>
    </div>
  );
}
