import { CgSmartphoneRam } from "react-icons/cg";
import RootLayout from "../../components/Layouts/RootLayout";
import { BsCpu, BsMotherboard } from "react-icons/bs";
import { PiMonitor } from "react-icons/pi";
import { ImPower } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { RxMixerHorizontal } from "react-icons/rx";
import { Col, Divider, Row } from "antd";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";

const featuredCategories = [
  {
    id: 1,
    icon: <BsCpu size={32} />,
    name: "CPU / Processor",
    url: "/category/cpu",
  },
  {
    id: 2,
    icon: <BsMotherboard size={32} />,
    name: "Motherboard",
    url: "/category/motherboard",
  },
  {
    id: 3,
    icon: <CgSmartphoneRam size={32} />,
    name: "RAM",
    url: "/category/ram",
  },
  {
    id: 4,
    icon: <PiMonitor size={32} />,
    name: "Monitor",
    url: "/category/monitor",
  },
  {
    id: 5,
    icon: <ImPower size={32} />,
    name: "Power Supply",
    url: "/category/power-supply",
  },
  {
    id: 6,
    icon: <MdStorage size={32} />,
    name: "Storage Device",
    url: "/category/storage",
  },
  {
    id: 7,
    icon: <RxMixerHorizontal size={32} />,
    name: "Others",
    url: "/category/others",
  },
];

const HomePage = ({ products }) => {
  return (
    <div>
      <Divider className="text-3xl" orientation="center">
        Featured Products
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {products?.slice(0, 8)?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>

      <Divider className="text-3xl" orientation="center">
        Featured Categories
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {featuredCategories.map((category) => (
          <Col className="gutter-row" xs={24} md={6} span={6} key={category.id}>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
              }}
            ></div>
            <img
              class="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Ram</span>
            <div class="">
              <span class="font-semibold text-xl">
                Peace Lily Peace Lily Peace Lil
              </span>
            </div>
            <div class="flex justify-between pt-2">
              <span class="text-sm items-center">⭐⭐⭐⭐⭐ (50)</span>
              <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $45.00
              </span>
            </div>
            <span class="block opacity-75 -mb-1 font-medium">In Stock</span>
          </div>
        </div>
        <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
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
              src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
              alt=""
            />
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Ram</span>
            <div class="">
              <span class="font-semibold text-xl">
                Peace Lily Peace Lily Peace Lil
              </span>
            </div>
            <div class="flex justify-between pt-2">
              <span class="text-sm items-center">⭐⭐⭐⭐⭐ (50)</span>
              <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $45.00
              </span>
            </div>
            <span class="block opacity-75 -mb-1 font-medium">In Stock</span>
          </div>
        </div>
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
            <span class="block opacity-75 -mb-1">Ram</span>
            <div class="">
              <span class="font-semibold text-xl">
                Peace Lily Peace Lily Peace Lil
              </span>
              <span className="font-medium">{category.name}</span>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
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
