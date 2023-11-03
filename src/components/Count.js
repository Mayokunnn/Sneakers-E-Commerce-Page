export function Count({ itemsCount, setItemsCount }) {
  function handleNext() {
    setItemsCount((items) => items + 1);
  }

  function handlePrevious() {
    if (itemsCount <= 1) return;

    setItemsCount((items) => items - 1);
  }

  return (
    <div className="w-full flex items-center justify-between font-bold text-xl flex gap-6 py-2 px-4 bg-lightGrayishBlue rounded-sm md:w-[50%] ">
      <button className="text-orange" onClick={handlePrevious}>
        -
      </button>
      <p>{itemsCount}</p>
      <button className="text-orange" onClick={handleNext}>
        +
      </button>
    </div>
  );
}
