import { Button, Rate } from "antd";
import RootLayout from "@/components/Layouts/RootLayout";

const ProductDetails = ({ product }) => {
  if (!product?._id) return <h1>Loading...</h1>;

  const {
    productName,
    image,
    price,
    rating,
    category,
    type,
    features,
    description,
  } = product;

  return (
    <div>
      <div className="h-full xl:h-screen flex flex-col lg:flex-row items-center lg:items-start gap-8 border-b border-gray-300">
        <div className="w-full  lg:w-[50%] mx-auto">
          <img
            src={image}
            alt={productName}
            quality={100}
            layout="responsive"
            priority
            className="mx-auto lg:pb-3 w-full"
          />
        </div>

        {/* details info  */}
        <div className="w-[93%] md:w-[40%]">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:pt-10">
            {productName}
          </h1>

          <p>{description}</p>

          <div className="pb-2">
            <span className="font-bold">Category:</span> {category}
          </div>

          <div>
            <p className="md:text-xl font-bold text-primary">
              <span className="font-bold text-black">Price:</span> {price}$
            </p>
          </div>

          <div className="flex items-center h-8">
            <p className="text-sm font-bold">Rating: </p>
            <Rate
              disabled
              defaultValue={rating}
              allowHalf
              className="pl-2 pb-1 text-xs md:text-sm"
            />
          </div>

          <div>
            <h4 className="text-sm">Key Features:</h4>
            <p>{features}</p>
          </div>

          <Button type="primary">Buy Now</Button>
        </div>
      </div>

      {/* reviews  */}
    </div>
  );
};

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductDetails;

export async function getStaticPaths() {
  // if (typeof window === "undefined") {
  //   return { paths: [], fallback: "blocking" };
  // }

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/product`);
  const products = await res.json();
  const paths = products?.data?.map((product) => ({
    params: {
      productId: product._id,
    },
  }));

  return { paths, fallback: "blocking" };
}

// SSG
export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/product?id=${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
    revalidate: 60000,
  };
}
