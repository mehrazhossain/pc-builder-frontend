import React from "react";
import RootLayout from "../../../components/Layouts/RootLayout";
import { GrPowerReset } from "react-icons/gr";
import { BsMotherboard } from "react-icons/bs";
import { Col, Row } from "antd";

const PcBuilderPage = () => {
  const containerStyle = {
    border: "2px solid black",
    padding: "10px", // Optional: Add some padding to create space between the border and content
  };

  return (
    <>
      <div className="flex justify-between items-center px-10 mt-3">
        <div className="text-center">
          <div className="text-3xl font-medium">PC Builder</div>
          <div>Select Your Components</div>
        </div>
        <div className="text-center">
          <button className="flex items-center px-6 py-2 border-2 focus:outline-none font-bold">
            Total: 0 TK
          </button>
        </div>
      </div>
      <div className="mt-3" style={{ backgroundColor: "#EEEDED" }}>
        <div className="flex justify-between item-center px-6">
          <span>
            <p className="font-medium text-gray-700">Your Build PC</p>
          </span>
          <span>
            <p>
              <GrPowerReset size={20} color={"yellow"} />
            </p>
          </span>
        </div>
      </div>

      {/* <div className="flex justify-between items-center px-10 mt-3">
        <div>
          <button class=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
            <BsMotherboard size={32} /> Motherboard
          </button>
        </div>

        <div className="text-center border-b border-gray-700">
          <button class=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
            Select
          </button>
        </div>
      </div> */}
      <div>
        <Row>
          <Col
            span={6}
            push={18}
            style={{
              border: "1px solid rgb(226 232 240)",
              padding: "10px",
              backgroundColor: "skyblue",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a className="inline-block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              SELECT
            </a>
          </Col>
          <Col
            span={18}
            pull={6}
            style={{
              border: "1px solid rgb(226 232 240)",
              borderRight: "0px",
              padding: "10px",
              backgroundColor: "pink",
              display: "flex",
              alignItems: "center",
            }}
          >
            <BsMotherboard size={32} />
            <span className="ml-2 text-lg">Motherboard</span>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
