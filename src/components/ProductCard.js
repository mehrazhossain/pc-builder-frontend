import { Col } from "antd";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { _id, image, productName, type, quantity, price, rating } = product;
  return (
    <Col className="gutter-row" xs={24} md={8} span={6}>
      <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg">
        <div class="relative pt-10 px-10 flex items-center justify-center">
          <img class="relative w-full" src={image} />
        </div>
        <div class="relative px-6 pb-6 mt-6">
          <span class="block opacity-75 -mb-1">{type}</span>
          <div class="">
            <Link
              href={`/product-details/${_id}`}
              className="font-semibold text-gray-800 text-xl block overflow-hidden whitespace-nowrap link link-underline font-semibold old truncate w-50"
            >
              {productName}
            </Link>
          </div>
          <div class="flex justify-between pt-2">
            <span class="text-sm items-center">⭐⭐⭐⭐⭐ ({rating})</span>
            <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              ${price}
            </span>
          </div>
          {quantity > 0 ? (
            <span class="block opacity-75 -mb-1 font-medium">In Stock</span>
          ) : (
            <span class="block text-red-500 opacity-75 -mb-1 font-medium">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
