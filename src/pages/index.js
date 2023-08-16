import { CgSmartphoneRam } from "react-icons/cg";
import { BsCpu, BsMotherboard } from "react-icons/bs";
import { PiMonitor } from "react-icons/pi";
import { ImPower } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { RxMixerHorizontal } from "react-icons/rx";
import { Col, Divider, Row } from "antd";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import RootLayout from "@/components/Layouts/RootLayout";

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
        {products?.slice(0, 6)?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>

      <Divider className="text-3xl" orientation="center">
        Featured Categories
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {featuredCategories.map((category) => (
          <Col key={category.id} className="gutter-row" xs={12} md={6} span={6}>
            <li className="group list-none flex items-center justify-center mb-4">
              <Link
                href={category.url}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                  {category.icon}
                </div>
                <div>
                  <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                    {category.name}
                  </span>
                </div>
              </Link>
            </li>
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
