import React from "react";
import LineChartSM from "../components/Charts/LineChartSM";
import DemoChart from "../components/Charts/DemoChart";
import BgColorLineChart from "../components/Charts/BgColorLineChart";
import DounughtChart from "../components/Charts/DounughtChart";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { BsFillEyeFill, BsFillTrashFill, BsPencilFill } from "react-icons/bs";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const DashboardPage = () => {
  return (
    <div className="p-4 pt-[60px] w-full bg-white">
      <div className="grid grid-cols-4 gap-4 ">
        <div className="shadow-lg px-4 rounded-md">
          <div className="flex justify-between pt-2">
            <p className="font-normal text-[14px] capitalize text-gray-light">
              total cost
            </p>
            <p>16.55%</p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="capitalize font-[500] text-[24px] text-gray">
              5,540
            </h3>
            <div className="h-[100px]">
              <LineChartSM />
            </div>
          </div>
        </div>
        <div className="shadow-lg px-4 rounded-md">
          <div className="flex justify-between pt-2">
            <p className="font-normal text-[14px] capitalize text-gray-light">
              total cost
            </p>
            <p>16.55%</p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="capitalize font-[500] text-[24px] text-gray">
              5,540
            </h3>
            <div className="h-[100px] w-[100px]">
              <DemoChart />
            </div>
          </div>
        </div>
        <div className="shadow-lg px-4 rounded-md">
          <div className="flex justify-between pt-2">
            <p className="font-normal text-[14px] capitalize text-gray-light">
              total cost
            </p>
            <p>16.55%</p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="capitalize font-[500] text-[24px] text-gray">
              5,540
            </h3>
            <div className="h-[100px]">
              <LineChartSM />
            </div>
          </div>
        </div>
        <div className="shadow-lg px-4 rounded-md">
          <div className="flex justify-between pt-2">
            <p className="font-normal text-[14px] capitalize text-gray-light">
              total cost
            </p>
            <p>16.55%</p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="capitalize font-[500] text-[24px] text-gray">
              5,540
            </h3>
            <div className="h-[100px] w-[100px]">
              <DemoChart />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------- */}

      <div className="grid grid-cols-2 mt-4 gap-4">
        <div className="shadow-lg">
          <BgColorLineChart />
        </div>
        <div>
          <div className="flex justify-between p-4">
            <p className="capitalize font-semibold">revenue</p>
            <p className="text-[30px]">...</p>
          </div>
          <div className="shadow-lg flex items-center py-8">
            <div>
              <DounughtChart />
            </div>
            <div>
              <p>mobile</p>
              <p>mobile</p>
              <p>mobile</p>
            </div>
          </div>
        </div>
      </div>

      {/* geo graphic maps  */}
      <div className="grid grid-cols-3">
        <div className="col-span-2 p-4 shadow-lg">
          <div className="flex justify-between items-center">
            <p className="capitalize font-semibold">recent order</p>
            <p className="text-[30px]">...</p>
          </div>
          <div>
            <table className="w-full">
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
        <div className="p-4 shadow-lg">
          <div className="w-full  object-cover">
            <div className="flex justify-between items-center">
              <p className="capitalize font-semibold">sales by country</p>
              <p className="text-[30px]">...</p>
            </div>
            <div className="h-[320px]">
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
            <div>
              <div className="flex justify-between">
                <p className="capitalize">united</p>
                <p>$2.5k</p>
              </div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
