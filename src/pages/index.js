import RootLayout from "../../components/Layouts/RootLayout";
import { BsMotherboard } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      {/* Featured Products */}
      <div className="pt-8 text-4xl font-bold text-center">
        Featured Products
      </div>
      <div class="flex pt-5 flex-wrap items-center justify-center">
        <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
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
            </div>
            <div class="flex justify-between pt-2">
              <span class="text-sm items-center">⭐⭐⭐⭐⭐ (50)</span>
              <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $45.00
              </span>
            </div>
            <span class="block opacity-75 -mb-1 font-medium">In Stock</span>
          </div>
        </div>
      </div>
      {/* Featured Categories */}
      <div className="pt-24 text-4xl font-bold text-center">
        Featured Categories
      </div>
      <ul className="list-none max-w-screen-xl mx-auto grid items-center gap-6  md:grid-cols-2 lg:grid-cols-3 ">
        <li>
          <ul
            className="list-none mt-5 space-y-6 border"
            style={{ zIndex: 9999 }}
          >
            <li className="group">
              <a
                href={"javascript:void(0)"}
                className="flex gap-3 items-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                  <BsMotherboard size={32} />
                </div>
                <div>
                  <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                    Motherboard
                  </span>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul
            className="list-none mt-5 space-y-6 border"
            style={{ zIndex: 9999 }}
          >
            <li className="group">
              <a
                href={"javascript:void(0)"}
                className="flex gap-3 items-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                  <BsMotherboard size={32} />
                </div>
                <div>
                  <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                    Motherboard
                  </span>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul
            className="list-none mt-5 space-y-6 border"
            style={{ zIndex: 9999 }}
          >
            <li className="group">
              <a
                href={"javascript:void(0)"}
                className="flex gap-3 items-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                  <BsMotherboard size={32} />
                </div>
                <div>
                  <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                    Motherboard
                  </span>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul
            className="list-none mt-5 space-y-6 border"
            style={{ zIndex: 9999 }}
          >
            <li className="group">
              <a
                href={"javascript:void(0)"}
                className="flex gap-3 items-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                  <BsMotherboard size={32} />
                </div>
                <div>
                  <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                    Motherboard
                  </span>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul
            className="list-none mt-5 space-y-6 border"
            style={{ zIndex: 9999 }}
          >
            <li className="group">
              <a
                href={"javascript:void(0)"}
                className="flex gap-3 items-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                  <BsMotherboard size={32} />
                </div>
                <div>
                  <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                    Motherboard
                  </span>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul
            className="list-none mt-5 space-y-6 border"
            style={{ zIndex: 9999 }}
          >
            <li className="group">
              <a
                href={"javascript:void(0)"}
                className="flex gap-3 items-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                  <BsMotherboard size={32} />
                </div>
                <div>
                  <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                    Motherboard
                  </span>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
