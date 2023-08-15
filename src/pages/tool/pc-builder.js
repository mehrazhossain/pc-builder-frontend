import { Button, Collapse, Row, Col } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { DownOutlined } from "@ant-design/icons";
import { addBuilderProduct } from "@/redux/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import RootLayout from "@/components/Layouts/RootLayout";

let builderRequerdProducts = [
  {
    id: 1,
    name: "CPU/Processor",
    type: "cpu",
  },
  {
    id: 2,
    name: "Motherboard",
    type: "motherboard",
  },
  {
    id: 3,
    name: "Monitor",
    type: "monitor",
  },
  {
    id: 4,
    name: "Ram",
    type: "ram",
  },
  {
    id: 5,
    name: "Power supply unit",
    type: "power-supply",
  },
  {
    id: 6,
    name: "Storage device",
    type: "storage",
  },
];

const PCBuilder = ({ products }) => {
  const router = useRouter();
  const { builderProducts } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleProductChoose = (product) => {
    if (product.type === "power-supply") {
      product = { ...product, type: "powerSupply" };
    }
    dispatch(addBuilderProduct(product));
    router.push("/tool/pc-builder");
  };

  const handleCompleteBuilder = () => {
    window.alert("PC Build successfully");
  };

  useEffect(() => {
    if (builderProducts.length) {
      const newBuilderRequerdProducts = builderRequerdProducts.map(
        (requerdProduct) => ({
          ...requerdProduct,
          product: builderProducts.filter(
            (product) =>
              product.type ===
              (requerdProduct.type === "power-supply"
                ? "powerSupply"
                : requerdProduct.type)
          ),
        })
      );
      builderRequerdProducts = newBuilderRequerdProducts;
    }
  }, [builderProducts]);

  return (
    <div className="md:px-16">
      {/* if not exist type  */}
      {products.length < 1 && (
        <div className="lg:w-[65%] mx-auto">
          {builderRequerdProducts.map((requiredProduct) => (
            <>
              <div
                key={requiredProduct.id}
                className="flex justify-between items-center gap-2 "
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`${
                      requiredProduct?.product?.length > 0 ? "hidden" : "block"
                    } md:block`}
                  >
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <h3 className="text-sm md:text-xl font-semibold ">
                        {requiredProduct.name}
                      </h3>
                      <span className="text-xs">*** Required?</span>
                    </div>
                  </div>

                  {/* show selected product  */}
                  {requiredProduct?.product?.length > 0 && (
                    <Collapse
                      bordered={false}
                      defaultActiveKey={["1"]}
                      expandIcon={({ isActive }) => (
                        <DownOutlined rotate={isActive ? 90 : 0} />
                      )}
                      style={{ background: "white" }}
                      items={requiredProduct.product.map((item, index) => ({
                        key: index + 1,
                        label: (
                          <p>
                            <span className="text-primary">
                              {item.productName}
                            </span>{" "}
                            selected
                          </p>
                        ),
                        children: <div></div>,
                      }))}
                    />
                  )}
                </div>
                <div className="w-28">
                  <Link
                    href={`/tool/pc-builder?categoryType=${requiredProduct.type}`}
                  >
                    <Button
                      type="primary"
                      className="w-full bg-sky-500"
                      disabled={requiredProduct.product?.length > 0}
                    >
                      Select
                    </Button>
                  </Link>
                </div>
              </div>
              {/* <hr color="text-secondary" /> */}
            </>
          ))}

          <div className="flex justify-center my-6">
            <Button
              disabled={builderProducts.length < 6}
              onClick={handleCompleteBuilder}
              type="primary"
              className="bg-primary"
            >
              Complete Builder
            </Button>
          </div>
        </div>
      )}

      {/* render selectd component  */}
      {products?.length > 0 && (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {products.map((product) => (
            <Col className="gutter-row" xs={24} md={8} span={6}>
              <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                <svg
                  class="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.1 }}
                >
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div class="relative pt-10 px-10 flex items-center justify-center">
                  <div
                    class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                    style={{
                      background: "radial-gradient(black, transparent 60%)",
                      transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                      opacity: 0.2,
                    }}
                  ></div>
                  <img
                    class="relative w-40"
                    src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                    alt=""
                  />
                </div>
                <div class="relative text-white px-6 pb-6 mt-6">
                  <span class="block opacity-75 -mb-1">{product.type}</span>
                  <div class="">
                    <span class="font-semibold text-xl block overflow-hidden whitespace-nowrap link link-underline font-semibold old truncate w-50">
                      {product.productName}
                    </span>
                  </div>
                  <div class="flex justify-between pt-2">
                    <span class="text-sm items-center">⭐⭐⭐⭐⭐ (50)</span>
                    <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $45.00
                    </span>
                  </div>
                  <span class="block opacity-75 -mb-1 font-medium">
                    In Stock
                  </span>
                  <div class="flex flex-col justify-end h-full mt-4">
                    <Button
                      onClick={() => handleProductChoose(product)}
                      type="primary"
                      class="mt-auto w-full"
                    >
                      Add To Builder
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

PCBuilder.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PCBuilder;

// ssr
export const getServerSideProps = async (context) => {
  const { query } = context;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/product?type=${query.categoryType}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
