import { useEffect, useState } from "react";
import { CgSmartphoneRam } from "react-icons/cg";
import { BsCpu, BsMotherboard } from "react-icons/bs";
import { PiMonitor } from "react-icons/pi";
import { ImPower } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { RxMixerHorizontal } from "react-icons/rx";
import { Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const dropdownNavs = [
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

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const handleNavigate = (url) => {
    router.push(url);
  };

  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });

  const navigation = [
    {
      title: "Categories",
      path: "javascript:void(0)",
      isDrapdown: true,
    },
    { title: "Products", path: "/product", isDrapdown: false },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu"))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);

  return (
    <>
      <nav
        className={`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <img
                src="https://www.floatui.com/logo.svg"
                width={120}
                height={50}
                alt="Float UI logo"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="list-none items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.isDrapdown ? (
                      <p
                        className="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600"
                        onClick={() =>
                          setDrapdownState({
                            idx,
                            isActive: !drapdownState.isActive,
                          })
                        }
                      >
                        {item.title}
                        {drapdownState.idx == idx && drapdownState.isActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </p>
                    ) : (
                      <Link
                        className="block text-gray-700 hover:text-indigo-600"
                        href={item.path}
                      >
                        {item.title}
                      </Link>
                    )}
                    {item.isDrapdown &&
                    drapdownState.idx == idx &&
                    drapdownState.isActive ? (
                      <div className="mt-6 inset-x-0 top-20 w-1/2 ml-20 md:absolute md:border-y md:shadow-md md:mt-0 bg-white z-50 p-5">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          {dropdownNavs.map((dropdownItem) => (
                            <Col
                              key={idx}
                              className="gutter-row mt-5"
                              xs={12}
                              md={6}
                              span={6}
                            >
                              <li className="group list-none flex items-center justify-center">
                                <Link
                                  href={dropdownItem.url}
                                  className="flex flex-col items-center justify-center text-center"
                                >
                                  <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                                    {dropdownItem.icon}
                                  </div>
                                  <div>
                                    <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                                      {dropdownItem.name}
                                    </span>
                                  </div>
                                </Link>
                              </li>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <li>
                  <Link
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    href="/tool/pc-builder"
                  >
                    PC Builder
                  </Link>
                </li>
                {session?.user?.name ? (
                  <li>
                    <Link
                      onClick={() => signOut()}
                      href="javascript:void(0)"
                      className="inline-block text-white bg-gradient-to-br from-gray-600 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      href="/login"
                      className="inline-block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Log in
                    </Link>
                  </li>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
