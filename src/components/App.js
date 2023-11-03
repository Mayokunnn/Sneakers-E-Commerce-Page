import { useState } from "react";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import imagethumb1 from "../images/image-product-1-thumbnail.jpg";
import imagethumb2 from "../images/image-product-2-thumbnail.jpg";
import imagethumb3 from "../images/image-product-3-thumbnail.jpg";
import imagethumb4 from "../images/image-product-4-thumbnail.jpg";
import { NavBar } from "./NavBar";
import { Main } from "./Main";
import { Menu } from "./Menu";

const images = [image1, image2, image3, image4];
const imagesThumb = [imagethumb1, imagethumb2, imagethumb3, imagethumb4];
export const product = {
  images: images,
  imagesThumb: imagesThumb,
  name: "Fall Limited Edition Sneakers",
  description: `These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.`,
  discount: 50,
  originalPrice: 250,
  price: (50 / 100) * 250,
  count: 2,
  id: crypto.randomUUID(),
};

console.log(product);

export const navItems = ["Collections", "Men", "Women", "About", "Contact"];

function App() {
  const [itemsCount, setItemsCount] = useState(1);
  const [numProduct, setNumProduct] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleCartClick() {
    setIsCartOpen((cart) => (cart = !cart));
  }

  function handleItemsCount(item) {
    setItemsCount(item);
  }

  function handleMenuClick() {
    setMenuOpen((menu) => !menu);
  }

  return (
    <div className=" md:mx-auto md:container relative">
      {/* <Button>
        <img src={cart} className="w-4 " alt="Cart"></img> Add to Cart
      </Button>
      <Button>Checkout</Button> */}
      {menuOpen && <Menu setMenu={setMenuOpen} />}
      <NavBar
        array={numProduct}
        setArray={setNumProduct}
        setItemsCount={setItemsCount}
        isCartOpen={isCartOpen}
        handleCartClick={handleCartClick}
        setMenu={handleMenuClick}
      />
      <Main
        itemsCount={itemsCount}
        handleItemsCount={handleItemsCount}
        setArray={setNumProduct}
      />
    </div>
  );
}

export default App;
