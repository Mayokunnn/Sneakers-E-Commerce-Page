export function Arrow({ children, dir, onClick }) {
  return (
    <div
      className={`rounded-full px-3 flex items-center cursor-pointer py-2 bg-white hover:opacity-90 absolute font-bold text-lg  md:hidden ${
        dir === "left" ? "left" : "right"
      } `}
      onClick={onClick}
    >
      <img src={children} alt={dir}></img>
    </div>
  );
}
