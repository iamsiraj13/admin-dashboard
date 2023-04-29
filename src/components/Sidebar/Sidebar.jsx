import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { FiCircle } from "react-icons/fi";
import {
  BsFillGridFill,
  BsDropletFill,
  BsFillBasket2Fill,
  BsFillAwardFill,
  BsFillCloudArrowDownFill,
  BsFileEarmarkBreak,
  BsFileEarmarkSpreadsheetFill,
  BsFillLockFill,
  BsFillPersonLinesFill,
  BsFillCollectionPlayFill,
  BsFillExclamationTriangleFill,
  BsQuestionLg,
  BsFillTagsFill,
  BsFillBarChartLineFill,
  BsFillPinMapFill,
  BsMusicNoteList,
  BsFillFileCodeFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menus = [
    {
      id: 1,
      title: "dashboard",
      icon: <AiFillHome />,
    },
    {
      id: 2,
      title: "application",
      icon: <BsFillGridFill />,
    },
    {
      id: 3,
      title: "widgets",
      icon: <BsDropletFill />,
    },
    {
      id: 4,
      title: "ecommerce",
      icon: <BsFillBasket2Fill />,
    },
    {
      id: 5,
      title: "components",
      icon: <BsFillAwardFill />,
    },
    {
      id: 6,
      title: "icons",
      icon: <BsFillCloudArrowDownFill />,
    },
    {
      id: 7,
      title: "forms",
      icon: <BsFileEarmarkBreak />,
    },
    {
      id: 8,
      title: "tables",
      icon: <BsFileEarmarkSpreadsheetFill />,
    },
    {
      id: 9,
      title: "authentication",
      icon: <BsFillLockFill />,
    },
    {
      id: 10,
      title: "user profile",
      icon: <BsFillPersonLinesFill />,
    },
    {
      id: 11,
      title: "timeline",
      icon: <BsFillCollectionPlayFill />,
    },
    {
      id: 12,
      title: "errors",
      icon: <BsFillExclamationTriangleFill />,
    },
    {
      id: 13,
      title: "faq",
      icon: <BsQuestionLg />,
    },
    {
      id: 14,
      title: "pricing tables",
      icon: <BsFillTagsFill />,
    },
    {
      id: 15,
      title: "charts",
      icon: <BsFillBarChartLineFill />,
    },
    {
      id: 15,
      title: "maps",
      icon: <BsFillPinMapFill />,
    },
    {
      id: 16,
      title: "menu levels",
      icon: <BsMusicNoteList />,
    },
    {
      id: 17,
      title: "documentation",
      icon: <BsFillFileCodeFill />,
    },
    {
      id: 18,
      title: "support",
      icon: <BsFillTelephoneFill />,
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <div className="">
        {/*---------- sidebar header start ---------- */}
        <div className="fixed w-full left-0 right-0 top-0  min-h-[60px] mb-[60px]">
          <div className=" sidebar-header flex justify-between p-3 items-center">
            {!isOpen && (
              <h2 className="text-grey text-xl uppercase font-bold ">logo</h2>
            )}
            <div>
              <span
                className="text-grey font-bold cursor-pointer"
                onClick={toggleSidebar}
              >
                <AiOutlineMenu size={24} />
              </span>
            </div>
          </div>
        </div>
        {/*---------- sidebar header end ---------- */}

        {/*--------- sidebar menu start ----------- */}

        <Accordion className="p-2 mt-[60px]">
          {menus.slice(0, 2).map((menu, index) => (
            <>
              <AccordionItem className="w-full" key={index}>
                {({ open }) => (
                  <>
                    <AccordionHeader
                      className={`w-full py-3 px-2 hover:shadow-my border-l-4 border-transparent hover:border-l-4 hover:border-l-blue  rounded-md   text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                        open ? "border-l-4 border-l-blue text-blue" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-[20px] ml-2">{menu.icon}</div>
                        {!isOpen && (
                          <div className="capitalize text-[15px]">
                            {menu.title}
                          </div>
                        )}
                      </div>

                      {!isOpen && (
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${
                            !open ? "" : "rotate-90"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </AccordionHeader>

                    <AccordionBody>
                      <ul>
                        <li className="mb-4 text-grey transform transition-all duration-500 ">
                          <ul
                            className={`transform transition-all duration-500  `}
                          >
                            <li>
                              <Link
                                className={`py-2 my-1 px-2  rounded-md  text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                                  open
                                    ? "border-l-4 border-l-blue"
                                    : "border-l-4 border-l-transparent"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="text-[12px] ml-2">
                                    <FiCircle />
                                  </div>
                                  <div className="capitalize text-[15px]">
                                    home
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            </>
          ))}
          {!isOpen && (
            <p className="p-2 capitalize text-[12px] font-normal text-gray-light">
              ui elements
            </p>
          )}

          {menus.slice(2, 6).map((menu, index) => (
            <>
              <AccordionItem className="w-full" key={index}>
                {({ open }) => (
                  <>
                    <AccordionHeader
                      className={`w-full py-3 px-2 hover:shadow-my hover:border-l-4 hover:-border-l-blue  rounded-md   text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                        open ? "border-l-4 border-l-blue text-blue" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-[20px] ml-2">{menu.icon}</div>
                        {!isOpen && (
                          <div className="capitalize text-[15px]">
                            {menu.title}
                          </div>
                        )}
                      </div>

                      {!isOpen && (
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${
                            !open ? "" : "rotate-90"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </AccordionHeader>

                    <AccordionBody>
                      <ul>
                        <li className="mb-4 text-grey transform transition-all duration-500 ">
                          <ul
                            className={`transform transition-all duration-500  `}
                          >
                            <li>
                              <Link
                                className={`py-2 my-1 px-2  rounded-md  text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                                  open
                                    ? "border-l-4 border-l-blue"
                                    : "border-l-4 border-l-transparent"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="text-[12px] ml-2">
                                    <FiCircle />
                                  </div>
                                  <div className="capitalize text-[15px]">
                                    home
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            </>
          ))}

          {!isOpen && (
            <p className="p-2 capitalize text-[12px] font-normal text-gray-light">
              forms & tables
            </p>
          )}
          {menus.slice(6, 8).map((menu, index) => (
            <>
              <AccordionItem className="w-full" key={index}>
                {({ open }) => (
                  <>
                    <AccordionHeader
                      className={`w-full py-3 px-2 hover:shadow-my hover:border-l-4 hover:-border-l-blue  rounded-md   text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                        open ? "border-l-4 border-l-blue text-blue" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-[20px] ml-2">{menu.icon}</div>
                        {!isOpen && (
                          <div className="capitalize text-[15px]">
                            {menu.title}
                          </div>
                        )}
                      </div>

                      {!isOpen && (
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${
                            !open ? "" : "rotate-90"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </AccordionHeader>

                    <AccordionBody>
                      <ul>
                        <li className="mb-4 text-grey transform transition-all duration-500 ">
                          <ul
                            className={`transform transition-all duration-500  `}
                          >
                            <li>
                              <Link
                                className={`py-2 my-1 px-2  rounded-md  text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                                  open
                                    ? "border-l-4 border-l-blue"
                                    : "border-l-4 border-l-transparent"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="text-[12px] ml-2">
                                    <FiCircle />
                                  </div>
                                  <div className="capitalize text-[15px]">
                                    home
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            </>
          ))}
          {!isOpen && (
            <p className="p-2 capitalize text-[12px] font-normal  text-gray-light">
              pages
            </p>
          )}
          {menus.slice(8, 14).map((menu, index) => (
            <>
              <AccordionItem className="w-full" key={index}>
                {({ open }) => (
                  <>
                    <AccordionHeader
                      className={`w-full py-3 px-2 hover:shadow-my hover:border-l-4 hover:-border-l-blue  rounded-md   text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                        open ? "border-l-4 border-l-blue text-blue" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-[20px] ml-2">{menu.icon}</div>
                        {!isOpen && (
                          <div className="capitalize text-[15px]">
                            {menu.title}
                          </div>
                        )}
                      </div>

                      {!isOpen && (
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${
                            !open ? "" : "rotate-90"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </AccordionHeader>

                    <AccordionBody>
                      <ul>
                        <li className="mb-4 text-grey transform transition-all duration-500 ">
                          <ul
                            className={`transform transition-all duration-500  `}
                          >
                            <li>
                              <Link
                                className={`py-2 my-1 px-2  rounded-md  text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                                  open
                                    ? "border-l-4 border-l-blue"
                                    : "border-l-4 border-l-transparent"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="text-[12px] ml-2">
                                    <FiCircle />
                                  </div>
                                  <div className="capitalize text-[15px]">
                                    home
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            </>
          ))}

          {!isOpen && (
            <p className="p-2 capitalize text-[12px] font-normal  text-gray-light">
              charts & maps
            </p>
          )}
          {menus.slice(14, 16).map((menu, index) => (
            <>
              <AccordionItem className="w-full" key={index}>
                {({ open }) => (
                  <>
                    <AccordionHeader
                      className={`w-full py-3 px-2 hover:shadow-my hover:border-l-4 hover:-border-l-blue  rounded-md   text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                        open ? "border-l-4 border-l-blue text-blue" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-[20px] ml-2">{menu.icon}</div>
                        {!isOpen && (
                          <div className="capitalize text-[15px]">
                            {menu.title}
                          </div>
                        )}
                      </div>

                      {!isOpen && (
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${
                            !open ? "" : "rotate-90"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </AccordionHeader>

                    <AccordionBody>
                      <ul>
                        <li className="mb-4 text-grey transform transition-all duration-500 ">
                          <ul
                            className={`transform transition-all duration-500  `}
                          >
                            <li>
                              <Link
                                className={`py-2 my-1 px-2  rounded-md  text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                                  open
                                    ? "border-l-4 border-l-blue"
                                    : "border-l-4 border-l-transparent"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="text-[12px] ml-2">
                                    <FiCircle />
                                  </div>
                                  <div className="capitalize text-[15px]">
                                    home
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            </>
          ))}

          {!isOpen && (
            <p className="p-2 capitalize text-[12px] font-normal  text-gray-light">
              others
            </p>
          )}
          {menus.slice(16, 19).map((menu, index) => (
            <>
              <AccordionItem className="w-full" key={index}>
                {({ open }) => (
                  <>
                    <AccordionHeader
                      className={`w-full py-3 px-2 hover:shadow-my hover:border-l-4 hover:-border-l-blue  rounded-md   text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                        open ? "border-l-4 border-l-blue text-blue" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-[20px] ml-2">{menu.icon}</div>
                        {!isOpen && (
                          <div className="capitalize text-[15px]">
                            {menu.title}
                          </div>
                        )}
                      </div>

                      {!isOpen && (
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${
                            !open ? "" : "rotate-90"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </AccordionHeader>

                    <AccordionBody>
                      <ul>
                        <li className="mb-4 text-grey transform transition-all duration-500 ">
                          <ul
                            className={`transform transition-all duration-500  `}
                          >
                            <li>
                              <Link
                                className={`py-2 my-1 px-2  rounded-md  text-grey hover:text-blue flex items-center justify-between  cursor-pointer ${
                                  open
                                    ? "border-l-4 border-l-blue"
                                    : "border-l-4 border-l-transparent"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="text-[12px] ml-2">
                                    <FiCircle />
                                  </div>
                                  <div className="capitalize text-[15px]">
                                    home
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            </>
          ))}
        </Accordion>
        {/*--------- sidebar menu end ----------- */}
      </div>
    </>
  );
};

export default Sidebar;
