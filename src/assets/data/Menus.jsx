import { AiFillHome } from "react-icons/ai";

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
export const menus = [
  {
    id: 1,
    title: "dashboard",
    icon: <AiFillHome />,
    submenu: false,
  },
  {
    id: 2,
    title: "application",
    icon: <BsFillGridFill />,
    submenu: true,
    submenus: [
      {
        title: "email",
        path: "/email",
      },
      {
        title: "chat box",
        path: "/chat-box",
      },
      {
        title: "file manager",
        path: "/file-manager",
      },
      {
        title: "todo list",
        path: "/todo-list",
      },
      {
        title: "invoice",
        path: "/invoice",
      },
      {
        title: "calender",
        path: "/calender",
      },
    ],
  },
  {
    id: 3,
    title: "widgets",
    icon: <BsDropletFill />,
    submenu: true,
    submenus: [
      {
        title: "static widgets",
        path: "/static-widgets",
      },
      {
        title: "data widgets",
        path: "/data-widgets",
      },
    ],
  },
  {
    id: 4,
    title: "ecommerce",
    icon: <BsFillBasket2Fill />,
    submenu: true,
    submenus: [
      {
        title: "products list",
        path: "/products-list",
      },
      {
        title: "products grid",
        path: "/products-grid",
      },
      {
        title: "categories",
        path: "/categories",
      },
      {
        title: "orders",
        path: "/orders",
      },
      {
        title: "order details",
        path: "/order-details",
      },
      {
        title: "add new product",
        path: "/add-new-product",
      },
      {
        title: "add new product 2",
        path: "/add-new-product2",
      },
      {
        title: "transactions",
        path: "/transactions",
      },
    ],
  },
  {
    id: 5,
    title: "components",
    icon: <BsFillAwardFill />,
    submenu: true,
    submenus: [
      {
        title: "alerts",
        path: "/alerts",
      },
      {
        title: "accordions",
        path: "/accordions",
      },
      {
        title: "badges",
        path: "/badges",
      },
      {
        title: "buttons",
        path: "/buttons",
      },
      {
        title: "cards",
        path: "/cards",
      },
      {
        title: "carousels",
        path: "/carousels",
      },
      {
        title: "list groups",
        path: "/list-groups",
      },
      {
        title: "media objects",
        path: "/media-objects",
      },
      {
        title: "modals",
        path: "/modals ",
      },
      {
        title: "navs & tabs",
        path: "/navs-tabs",
      },
      {
        title: "navbar",
        path: "/navbar",
      },
      {
        title: "pagination",
        path: "/pagination",
      },
      {
        title: "popovers & tooltips",
        path: "/popovers-tooltips",
      },
      {
        title: "progress",
        path: "/progress",
      },
      {
        title: "notifications",
        path: "/notifications",
      },
      {
        title: "avatars & chips",
        path: "/avatars-chips",
      },
    ],
  },
  {
    id: 6,
    title: "icons",
    icon: <BsFillCloudArrowDownFill />,
    submenu: false,
  },
  {
    id: 7,
    title: "forms",
    icon: <BsFileEarmarkBreak />,
    submenu: true,
    submenus: [
      {
        title: "form elements",
        path: "/form-elements",
      },
      {
        title: "input groups",
        path: "/input-groups",
      },
      {
        title: "forms layouts",
        path: "/forms-layouts",
      },
      {
        title: "form validations",
        path: "/form-validations",
      },
      {
        title: "date pickers",
        path: "/date-pickers",
      },
      {
        title: "select2",
        path: "/select2",
      },
    ],
  },
  {
    id: 8,
    title: "tables",
    icon: <BsFileEarmarkSpreadsheetFill />,
    submenu: true,
    submenus: [
      {
        title: "basic table",
        path: "/basic-table",
      },
      {
        title: "advance tables",
        path: "/advance-tables",
      },
      {
        title: "data table",
        path: "/data-table",
      },
    ],
  },
  {
    id: 9,
    title: "authentication",
    icon: <BsFillLockFill />,
    submenu: true,
    submenus: [
      {
        title: "sign in",
        path: "/sign-in",
      },
      {
        title: "sign up",
        path: "/sign-up",
      },
      {
        title: "sign in with header & footer",
        path: "/sign-in-with-header-footer",
      },
      {
        title: "sign up with header & footer",
        path: "/sign-up-with-header-footer",
      },
      {
        title: "forgot password",
        path: "/forgot-password",
      },
      {
        title: "reset password",
        path: "/reset-password",
      },
    ],
  },
  {
    id: 10,
    title: "user profile",
    icon: <BsFillPersonLinesFill />,
    submenu: false,
  },
  {
    id: 11,
    title: "timeline",
    icon: <BsFillCollectionPlayFill />,
    submenu: false,
  },
  {
    id: 12,
    title: "errors",
    icon: <BsFillExclamationTriangleFill />,
    submenu: true,
    submenus: [
      {
        title: "404 error",
        path: "/404-error",
      },
      {
        title: "505 error",
        path: "/505-error",
      },
      {
        title: "coming soon",
        path: "/coming-soon",
      },
      {
        title: "blank page",
        path: "/blank-page",
      },
    ],
  },
  {
    id: 13,
    title: "faq",
    icon: <BsQuestionLg />,
    submenu: false,
  },
  {
    id: 14,
    title: "pricing tables",
    icon: <BsFillTagsFill />,
    submenu: false,
  },
  {
    id: 15,
    title: "charts",
    icon: <BsFillBarChartLineFill />,
    submenu: true,
    submenus: [
      {
        title: "apex",
        path: "/apex",
      },
      {
        title: "chartjs",
        path: "/chartjs",
      },
      {
        title: "highcharts",
        path: "/highcharts",
      },
    ],
  },
  {
    id: 15,
    title: "maps",
    icon: <BsFillPinMapFill />,
    submenu: true,
    submenus: [
      {
        title: "google maps",
        path: "/google-maps",
      },
      {
        title: "vector maps",
        path: "/vector-maps",
      },
    ],
  },
  {
    id: 16,
    title: "menu levels",
    icon: <BsMusicNoteList />,
    submenu: false,
  },
  {
    id: 17,
    title: "documentation",
    icon: <BsFillFileCodeFill />,
    submenu: false,
  },
  {
    id: 18,
    title: "support",
    icon: <BsFillTelephoneFill />,
    submenu: false,
  },
];
