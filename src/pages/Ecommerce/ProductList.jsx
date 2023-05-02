import React from "react";
import PageLayout from "../../Layout/PageLayout";
import { BsFillEyeFill, BsPencilFill, BsFillTrashFill } from "react-icons/bs";
import pimg from "../../assets/images/01.png";
const ProductList = () => {
  return (
    <PageLayout title="ecommerce" name="products list">
      <div className="mt-4 bg-[#fff] rounded">
        <div className="w-full bg-gray-100">
          <div className="">
            <div className="flex flex-col">
              <div className="mb-4 p-4 border-b border-b-gray-light flex justify-between">
                <div className="w-[25%]">
                  <select className="block w-full border p-2 rounded px-2 border-gray-light focus:ring-indigo-400">
                    <option value="Fashion">Fashion</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Fashion">Fashion</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <div className="border border-gray-light px-2 py-1  rounded focus:ring focus:ring-indigo-400">
                    <input type="date" />
                  </div>
                  <div className=" ">
                    <select className="block w-full border p-2 rounded px-2 border-gray-light focus:ring-indigo-400">
                      <option value="Fashion">Fashion</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Fashion">Fashion</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                  <table className="w-full">
                    <tbody className="bg-white">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                        <>
                          <tr className="even:bg-[#f2f2f2]">
                            <td className="pl-2 pr-2 py-4 whitespace-no-wrap">
                              <input
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                type="checkbox"
                              />
                            </td>
                            <td className="p-6 py-4 whitespace-no-wrap">
                              <div className="flex items-center">
                                <div className=" flex  flex-col  border border-gray-light justify-center items-center  h-12  w-12 ">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={pimg}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm leading-5 font-[700] text-[16px] text-[#191b22]">
                                    Sirajul is one of the great boy in the
                                    world. since the down of civilization
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
                            <td className="px-6 mt-4 flex items-center gap-2   text-right text-sm leading-5 font-medium">
                              <div className="text-[#3461ff]">
                                <BsFillEyeFill />
                              </div>
                              <div className="text-[#ffcb32]">
                                <BsPencilFill />
                              </div>
                              <div className="text-[#e72e2e]">
                                <BsFillTrashFill />
                              </div>
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
      </div>
    </PageLayout>
  );
};

export default ProductList;
