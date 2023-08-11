import ProductCard from "@/components/ProductCard";
import RootLayout from "@/components/Layouts/RootLayout";
import { Divider, Row } from "antd";

const ProductCategoryPage = ({ products }) => {
  return (
    <>
      <Divider className="text-3xl" orientation="center">
        Category-wise
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {products?.slice(0, 8)?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>
    </>
  );
};

export default ProductCategoryPage;

ProductCategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/product`);
  const products = await res.json();
  const paths = products?.data?.map((product) => ({
    params: {
      categoryType: product.type,
    },
  }));

  return { paths, fallback: "blocking" };
}

// SSG
export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/product?type=${params.categoryType}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
    revalidate: 60000,
  };
}
