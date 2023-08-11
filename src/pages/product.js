import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/ProductCard";
import { Divider, Row } from "antd";
import React from "react";

const ProductPage = ({ products }) => {
  return (
    <div>
      <Divider className="text-3xl" orientation="center">
        All Products
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;

ProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/product`);
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
    revalidate: 60000,
  };
}
