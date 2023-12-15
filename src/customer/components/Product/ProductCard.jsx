import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${1}`)}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png"
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3 ">
        <div>
          <p className="font-bold opacity-60"> Iphone 15 pro max</p>
          <p>{product.title}</p>
        </div>

        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice}$</p>
          <p className="opacity-50 line-through">{product.price}$</p>
          <p className="text-green-600 font-semibold">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
}
