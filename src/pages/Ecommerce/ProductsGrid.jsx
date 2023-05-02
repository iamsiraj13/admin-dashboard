import React from "react";
import PageLayout from "../../Layout/PageLayout";
import {
  BsDownload,
  BsUpload,
  BsSearch,
  BsFillStarFill,
  BsPencilFill,
  BsFillTrashFill,
} from "react-icons/bs";
import chair from "../../assets/images/chair.png";

const ProductsGrid = () => {
  return (
    <PageLayout title="ecommerce" name="products grid">
      <div className="bg-[f7f8fa]">
        {/* page header  */}
        <div className="bg-white px-3 py-5 flex justify-between shadow mt-4 rounded-md">
          <div>
            <button className="bg-blue text-white capitalize text-[16px] px-4 py-1 rounded">
              add product
            </button>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#f8f9fa] text-gray capitalize text-[16px] px-4 py-1 rounded flex items-center gap-2">
              <span>
                <BsDownload />
              </span>
              export{" "}
            </button>
            <button className="bg-[#f8f9fa] font-normal text-gray capitalize text-[16px] px-4 py-1 rounded flex items-center gap-2">
              <span>
                <BsUpload />
              </span>
              import
            </button>
          </div>
        </div>

        {/* product list  */}
        <div className="bg-white mt-4 shadow rounded-md w-full ">
          {/* product search bar */}
          <div className="p-4 w-full border-b border-b-gray-light flex justify-between">
            <div className="w-[25%]">
              <div className="flex items-center p-2 border border-gray-light rounded focus:ring-indigo-500">
                <span>
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search Product"
                  className="w-full pl-3 "
                />
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="">
                <select
                  name=""
                  id=""
                  className="w-[14rem] border border-gray-light p-3 rounded"
                >
                  <option value="faison">All Categories</option>
                  <option value="faison">Fashion</option>
                  <option value="faison">Fashion</option>
                </select>
              </div>
              <div className="">
                <select
                  name=""
                  id=""
                  className=" border border-gray-light p-3 w-[14rem]"
                >
                  <option value="faison">Latest Added</option>
                  <option value="faison">Fashion</option>
                  <option value="faison">Fashion</option>
                </select>
              </div>
            </div>
          </div>

          {/* poducts grid  */}
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                <>
                  <div className="border border-gray-light rounded-md px-8 text-center py-4">
                    <div className="mb-2">
                      <img src={chair} alt="" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-[600] text-[#4c5258] text-[16px]">
                        Men white polo t-shirt
                      </h3>
                      <p className="mb-2 text-[20px] text-[#4c5258]">$250.99</p>
                      <ul className="flex text-yellow-500 justify-center mb-2 gap-1">
                        <li>
                          <span>
                            <BsFillStarFill />
                          </span>
                        </li>
                        <li>
                          <span>
                            <BsFillStarFill />
                          </span>
                        </li>
                        <li>
                          <span>
                            <BsFillStarFill />
                          </span>
                        </li>
                        <li>
                          <span>
                            <BsFillStarFill />
                          </span>
                        </li>
                        <li>
                          <span>
                            <BsFillStarFill />
                          </span>
                        </li>
                      </ul>
                      <p className="mb-2 text-[12px] text-[#4c5258]">
                        {" "}
                        74 reviews
                      </p>
                      <div className="flex justify-center gap-2">
                        <button className="border border-blue rounded-md flex items-center gap-2 text-blue capitalize text-[14px] px-2 py-1">
                          <span>
                            <BsPencilFill />
                          </span>
                          edit
                        </button>
                        <button className="border border-red-500 rounded-md flex items-center gap-2 text-red-500 capitalize text-[14px] px-2 py-1">
                          <span>
                            <BsFillTrashFill />
                          </span>
                          delete
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductsGrid;
