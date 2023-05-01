import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { FiCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { menus } from "../../assets/data/Menus";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar */}
      <div className="relative">
        {/*---------- sidebar header start ---------- */}
        <div className="border-b left-0 right-0 top-0 fixed h-[60px]  ">
          <div className=" sidebar-header flex justify-between p-3 items-center">
            <div>
              {!isOpen && (
                <h2 className="text-grey text-xl uppercase font-bold ">logo</h2>
              )}
            </div>
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
                      className={`w-full py-3 px-2 hover:shadow-my border-l-4 border-transparent hover:border-l-4 hover:border-l-blue  rounded-md   text-grey hover:text-blue flex items-center justify-between  cursor-pointer hover:bg-white ${
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
                            {menu.submenu &&
                              menu.submenus.map((submenuItem, index) => (
                                <>
                                  <li key={index}>
                                    <Link
                                      to={submenuItem.path}
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
                                          {submenuItem.title}
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                </>
                              ))}
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
                            {menu.submenu &&
                              menu.submenus.map((submenuItem, index) => (
                                <>
                                  <li key={index}>
                                    <Link
                                      to={submenuItem.path}
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
                                          {submenuItem.title}
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                </>
                              ))}
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
                            {menu.submenu &&
                              menu.submenus.map((submenuItem, index) => (
                                <>
                                  <li key={index}>
                                    <Link
                                      to={submenuItem.path}
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
                                          {submenuItem.title}
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                </>
                              ))}
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
                            {menu.submenu &&
                              menu.submenus.map((submenuItem, index) => (
                                <>
                                  <li key={index}>
                                    <Link
                                      to={submenuItem.path}
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
                                          {submenuItem.title}
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                </>
                              ))}
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
                            {menu.submenu &&
                              menu.submenus.map((submenuItem, index) => (
                                <>
                                  <li key={index}>
                                    <Link
                                      to={submenuItem.path}
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
                                          {submenuItem.title}
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                </>
                              ))}
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
                            {menu.submenu &&
                              menu.submenus.map((submenuItem, index) => (
                                <>
                                  <li key={index}>
                                    <Link
                                      to={submenuItem.path}
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
                                          {submenuItem.title}
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                </>
                              ))}
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
