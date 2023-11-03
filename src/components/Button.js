export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex gap-2 w-full items-center justify-center bg-orange text-white text-sm font-medium py-3  rounded-lg cursor-pointer hover:opacity-80 "
    >
      {children}
    </button>
  );
}
