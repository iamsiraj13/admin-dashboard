import React from "react";
import LineChartSM from "../components/Charts/LineChartSM";
import DemoChart from "../components/Charts/DemoChart";
import BgColorLineChart from "../components/Charts/BgColorLineChart";
import DounughtChart from "../components/Charts/DounughtChart";
import {
  BsFillTabletLandscapeFill,
  BsPhoneFill,
  BsFillDisplayFill,
} from "react-icons/bs";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { BsFillEyeFill, BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import BgLineChartSmall from "../components/Charts/BgLineChartSmall";
import BarChartBig from "../components/Charts/BarChartBig";
import SimpleDonut from "../components/Charts/SimpleDonut";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const DashboardPage = () => {
  return (
    <div className="p-4 pt-[60px] w-full bg-[#f7f8fa]">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="shadow-my px-4 rounded-md bg-white w-full">
          <div className="flex justify-between pt-2">
            <p className="font-normal text-[12px] capitalize text-soft tracking-wider">
              total order
            </p>
            <p className="text-green  text-[12px]">16.55%</p>
          </div>
          <div className="flex items-center justify-between mt-[-20px]">
            <h3 className="capitalize font-[500] text-[18px] text-gray">
              5,540
            </h3>
            <div className="h-[100px]">
              <LineChartSM />
            </div>
          </div>
        </div>

        <div className="shadow-my px-4 rounded-md bg-white">
          <div className="flex justify-between pt-2">
            <p className="font-normal text-[12px] capitalize text-soft tracking-wider">
              total views
            </p>
            <p className="text-[12px]">16.55%</p>
          </div>
          <div className="flex items-center justify-between mt-[-20px]">
            <h3 className="capitalize font-[500] text-[18px] text-hard ">
              5,540
            </h3>
            <div className="h-[100px] w-[100px]">
              <DemoChart />
            </div>
          </div>
        </div>

        <div className="shadow-my px-4 rounded-md bg-white">
          <div className="flex justify-between pt-2">
            <p className="font-normal text-[12px] tracking-wider capitalize text-soft">
              revenue
            </p>
            <p className="text-[12px] text-soft">16.55%</p>
          </div>
          <div className="flex items-center justify-between mt-[-20px]">
            <h3 className="capitalize font-[500] text-[18px] text-hard">
              5,540
            </h3>
            <div className="h-[100px]">
              <LineChartSM />
            </div>
          </div>
        </div>

        <div className="shadow-my px-4 rounded-md bg-white">
          <div className="flex justify-between pt-2">
            <p className="font-normal text-[12px] capitalize text-soft">
              customers
            </p>
            <p className="text-[12px] text-soft"> 16.55%</p>
          </div>
          <div className="flex items-center justify-between mt-[-20px]">
            <h3 className="capitalize font-[500] text-[18px] text-hard">
              5,540
            </h3>
            <div className="h-[100px] w-[100px]">
              <DemoChart />
            </div>
          </div>
        </div>
      </div>
      {/* ----------  Revenue and device section  start ---------------- */}

      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
        <div className="shadow-lg px-4 bg-white">
          <BgColorLineChart />
        </div>
        <div className="bg-white">
          <div className="flex justify-between items-center p-4">
            <p className="capitalize font-semibold ">by divice</p>
            <p className="text-[30px]">...</p>
          </div>
          <div className="shadow-lg flex flex-col sm:flex-row sm:items-center  py-8 lg:py-[5rem] sm:px-12 sm:gap-8">
            <div className="w-full flex justify-center sm:w-[50%]  ">
              <DounughtChart />
            </div>
            <div className="w-full sm:w-[50%] px-12 flex flex-col space-y-4 ">
              <p className="flex justify-between w-full">
                <span className="text-blue">
                  <BsFillTabletLandscapeFill />
                </span>
                <span className="capitalize text-[16px]">tablet</span>
                <span className="text-[16px]">22.5%</span>
              </p>
              <p className="flex justify-between w-full">
                <span className="text-[#8ea8fd]">
                  <BsPhoneFill />
                </span>
                <span className="capitalize text-[16px]">mobile</span>
                <span className="text-[16px]">62.5%</span>
              </p>
              <p className="flex justify-between w-full">
                <span className="text-[#c1cfff]">
                  <BsFillDisplayFill />
                </span>
                <span className="capitalize text-[16px]">desktop</span>
                <span className="text-[16px]">15.5%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ----------  Revenue and device section  start ---------------- */}
      {/* ----------  traffic , message and vistors  section  start ---------------- */}
      <section className="my-4">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="p-4 shadow-md bg-white rounded-md flex items-center justify-center">
            <SimpleDonut />
          </div>

          {/*--------------- message -------- */}
          <div className="p-4 bg-white rounded-md my-4 shadow-md">
            <div className="w-full border border-gray-light rounded-md p-4">
              <div className="w-full flex justify-between mb-[-30px]">
                <div>
                  <p className="capitalize text-[14px] font-normal text-[#4c5258]">
                    message
                  </p>
                  <p className="text-[24px] text-blue   font-[500]">289</p>
                </div>
                <p className="text-gray text-[30px] font-bold">...</p>
              </div>

              <div className="h-[80px]">
                <BgLineChartSmall />
              </div>
            </div>
            <div className="w-full border border-gray-light rounded-md p-4 my-4">
              <div className="w-full flex justify-between mb-[-30px]">
                <div>
                  <p className="capitalize text-[14px] font-normal text-[#4c5258]">
                    Total post
                  </p>
                  <p className="text-[24px] text-blue   font-[500]">489</p>
                </div>
                <p className="text-gray text-[30px] font-bold">...</p>
              </div>

              <div className="h-[80px]">
                <BgLineChartSmall />
              </div>
            </div>
            <div className="w-full border border-gray-light rounded-md p-4">
              <div className="w-full flex justify-between mb-[-30px]">
                <div>
                  <p className="capitalize text-[14px] font-normal text-[#4c5258]">
                    new tasks
                  </p>
                  <p className="text-[24px] text-blue font-[500]">149</p>
                </div>
                <p className="text-gray text-[30px] font-bold">...</p>
              </div>

              <div className="h-[80px]">
                <BgLineChartSmall />
              </div>
            </div>
          </div>
          {/* bar chart for visitors  */}
          <div className="bg-white rounded-md shadow-md">
            <div className="flex justify-between items-center p-4">
              <p className="capitalize font-semibold"> visitors</p>
              <p className="text-[30px] font-bold">...</p>
            </div>
            <div>
              <BarChartBig />
            </div>
            <div className="p-4  w-full">
              <div className="border border-gray-light py-2 grid grid-cols-2 text-center rounded-lg">
                <div className="border-r border-r-gray-light  ">
                  <p className="text-[#3461ff] text-[28px] font-[500]">8,546</p>
                  <p className="text-[#4c5258] text-[14px] capitalize">
                    new visitors
                  </p>
                </div>
                <div className="">
                  <p className="text-[28px] text-[#cad6ff]">8,546</p>
                  <p className="text-[#4c5258] text-[14px] capitalize">
                    old visitors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------  traffic , message and vistors  section  end ---------------- */}

      {/* geo graphic maps  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* recent order table start */}
        <div className="sm:col-span-2 p-4 shadow-lg bg-white rounded-md w-full">
          <div className="flex justify-between items-center">
            <p className="capitalize font-semibold">recent order</p>
            <p className="text-[30px]">...</p>
          </div>
          <div className="flex flex-col w-full">
            <div className="overflow-x-auto">
              <div className="inline-block max-w-full sm:w-full overflow-x-scroll">
                <div className="overflow-scroll">
                  <table className="min-w-full ">
                    <thead>
                      <th className="text-left">#id</th>
                      <th className="text-left pl-4">Product</th>
                      <th className="text-left pl-4">Quantity</th>
                      <th className="text-left pl-4">Price</th>
                      <th className="text-left pl-4">Date</th>
                      <th className="text-left pl-4">Actions</th>
                    </thead>
                    <tbody className="bg-white">
                      {[1, 2, 3, 4, 5].map(() => (
                        <>
                          <tr className="even:bg-[#f2f2f2]">
                            <td className="pl-2 pr-2 py-4 whitespace-no-wrap">
                              #89742
                            </td>
                            <td className="p-6 py-4 whitespace-no-wrap text-left">
                              <div className="flex items-center">
                                <div className=" flex  flex-col  border border-gray-light justify-center items-center  h-12  w-12 ">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://codervent.com/onedash/demo/ltr/assets/images/products/11.png"
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm leading-5 font-[700] text-[16px] text-[#191b22]">
                                    Iphone is one of the
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap ">
                              <div className="text-sm leading-5 text-gray-900">
                                $18.00
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap ">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                              3-31-2020
                            </td>
                            <td className="px-6 mt-4 text-right text-sm leading-5 font-medium">
                              <button className="text-[#3461ff]">
                                <BsFillEyeFill />
                              </button>
                              <button className="text-[#ffcb32] ml-2">
                                <BsPencilFill />
                              </button>
                              <button className="text-[#e72e2e] ml-2">
                                <BsFillTrashFill />
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* recent order table start */}

        {/* sales by country start  */}

        <div className="p-4 shadow-lg bg-white rounded-md">
          <div className="w-full  object-cover">
            <div className="flex justify-between items-center">
              <p className="capitalize font-semibold">sales by country</p>
              <p className="text-[30px]">...</p>
            </div>
            <div className="sm:h-[320px]">
              <ComposableMap>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#06F"
                        style={{
                          default: {
                            fill: "#06F",
                          },
                          hover: {
                            fill: "#F53",
                          },
                        }}
                      />
                    ))
                  }
                </Geographies>
              </ComposableMap>
            </div>

            {/* progress group  */}
            <div className="mt-4">
              <div>
                <div className="flex justify-between">
                  <p className="capitalize text-[14px] text-[#4c5258]">
                    united
                  </p>
                  <p className="text-[14px] text-[#4c5258]">$2.5k</p>
                </div>
                <div>
                  <div className="w-full h-[6px] bg-[#e9ecef] rounded-md mt-1 relative">
                    <div className="w-[80%] h-[6px] bg-[#0066ff] rounded-md "></div>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <div className="flex justify-between">
                  <p className="capitalize text-[14px] text-[#4c5258]">
                    russia
                  </p>
                  <p className="text-[14px] text-[#4c5258]">$2.5k</p>
                </div>
                <div>
                  <div className="w-full h-[6px] bg-[#e9ecef] rounded-md mt-1 relative">
                    <div className="w-[80%] h-[6px] bg-[#0066ff] rounded-md "></div>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <div className="flex justify-between">
                  <p className="capitalize text-[14px] text-[#4c5258]">
                    australia
                  </p>
                  <p className="text-[14px] text-[#4c5258]">$2.5k</p>
                </div>
                <div>
                  <div className="w-full h-[6px] bg-[#e9ecef] rounded-md mt-1 relative">
                    <div className="w-[80%] h-[6px] bg-[#0066ff] rounded-md "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sales by country start  */}
      </div>
    </div>
  );
};

export default DashboardPage;
