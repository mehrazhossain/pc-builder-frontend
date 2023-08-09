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
              href={category.url}
              className="ml-2 text-lg"
            >
              <span
                className="text-gray-700"
                style={{ marginRight: "8px", color: "#2563eb" }}
              >
                {category.icon}
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
