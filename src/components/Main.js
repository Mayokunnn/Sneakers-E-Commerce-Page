import { Description } from "./Description";
import { product } from "./App";
import { ImageContainer } from "./ImageContainer";

export function Main({ itemsCount, handleItemsCount, setArray }) {
  function handleOnClick(item, count, id) {
    setArray((prevItem) => [...prevItem, { ...item, count: count, id: id }]);
  }

  const id = crypto.randomUUID();

  return (
    <div className="flex flex-col gap-6 md:gap-12 md:mx-auto md:px-24 md:p-12 md:grid md:grid-cols-2">
      <ImageContainer product={product} />
      <Description
        itemsCount={itemsCount}
        handleItemsCount={handleItemsCount}
        product={product}
        onClick={() => handleOnClick(product, itemsCount, id)}
      />
    </div>
  );
}
