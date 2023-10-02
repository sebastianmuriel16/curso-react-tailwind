import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { OrderCard } from "../OrderCard";
import "./styles.css";

const CheckOutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts} =
    useContext(ShoppingCartContext);
    console.log('Product: ', cartProducts);



  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XCircleIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={closeCheckoutSideMenu}
          />
        </div>
      </div>
      {
        cartProducts.map((product)=>{
          return (
          <OrderCard
            key={product.id}
            title={product.title}
            imagenUrl={product.images[0]}
            price={product.price}
          />
          )
        })
      }
    </aside>
  );
};

export { CheckOutSideMenu };
