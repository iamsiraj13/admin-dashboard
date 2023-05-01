import { Navigate, createBrowserRouter } from "react-router-dom";

import StaticWidgets from "../pages/Widgets/StaticWidgets";
import MasterLayout from "../Layout/MasterLayout";
import DataWidgets from "../pages/Widgets/DataWidgets";
import ProductList from "../pages/Ecommerce/ProductList";
import ProductsGrid from "../pages/Ecommerce/productsGrid";
import Categories from "../pages/Ecommerce/Categories";
import OrderDetails from "../pages/Ecommerce/OrderDetails";
import AddNewProduct from "../pages/Ecommerce/AddNewProduct";
import AddNewProductTwo from "../pages/Ecommerce/AddNewProductTwo";
import Transactions from "../pages/Ecommerce/Transactions";
import Orders from "../pages/Ecommerce/Orders";
import Alerts from "../pages/ComponentsPage/Alerts";
import Accordions from "../pages/ComponentsPage/Accordions";
import Badge from "../pages/ComponentsPage/Badge";
import Buttons from "../pages/ComponentsPage/Buttons";
import Cards from "../pages/ComponentsPage/Cards";
import Carousels from "../pages/ComponentsPage/Carousels";
import ListGroups from "../pages/ComponentsPage/ListGroups";
import MediaObjects from "../pages/ComponentsPage/MediaObjects";
import Modals from "../pages/ComponentsPage/Modals";
import NavsTabs from "../pages/ComponentsPage/NavsTabs";
import Navbar from "../pages/ComponentsPage/Navbar";
import Paginations from "../pages/ComponentsPage/Paginations";
import PopoversAndTooltips from "../pages/ComponentsPage/PopoversAndTooltips";
import Progress from "../pages/ComponentsPage/Progress";
import Spinners from "../pages/ComponentsPage/Spinners";
import Notifications from "../pages/ComponentsPage/Notifications";
import AvatarAndChips from "../pages/ComponentsPage/AvatarAndChips";
import EmailPage from "../pages/ApplicationPage/EmailPage";
import ChatboxPage from "../pages/ApplicationPage/ChatboxPage";
import FileManagePage from "../pages/ApplicationPage/FileManagePage";
import TodoListPage from "../pages/ApplicationPage/TodoListPage";
import InvoicePage from "../pages/ApplicationPage/InvoicePage";
import CalernderPage from "../pages/ApplicationPage/CalernderPage";
import DashboardPage from "../pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      // application routes
      {
        path: "/email",
        element: <EmailPage />,
      },
      {
        path: "/chat-box",
        element: <ChatboxPage />,
      },
      {
        path: "/file-manager",
        element: <FileManagePage />,
      },
      {
        path: "/todo-list",
        element: <TodoListPage />,
      },
      {
        path: "/invoice",
        element: <InvoicePage />,
      },
      {
        path: "/calender",
        element: <CalernderPage />,
      },
      // static widgets routes
      {
        path: "/static-widgets",
        element: <StaticWidgets />,
      },
      {
        path: "/data-widgets",
        element: <DataWidgets />,
      },

      // ecommerce routes
      {
        path: "/products-list",
        element: <ProductList />,
      },
      {
        path: "/products-grid",
        element: <ProductsGrid />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/order-details",
        element: <OrderDetails />,
      },
      {
        path: "/add-new-product",
        element: <AddNewProduct />,
      },
      {
        path: "/add-new-product2",
        element: <AddNewProductTwo />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },

      // components routes
      {
        path: "/alerts",
        element: <Alerts />,
      },
      {
        path: "/accordions",
        element: <Accordions />,
      },
      {
        path: "/badges",
        element: <Badge />,
      },
      {
        path: "/buttons",
        element: <Buttons />,
      },
      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/carousels",
        element: <Carousels />,
      },
      {
        path: "/list-groups",
        element: <ListGroups />,
      },
      {
        path: "/media-objects",
        element: <MediaObjects />,
      },
      {
        path: "/modals",
        element: <Modals />,
      },
      {
        path: "/navs-tabs",
        element: <NavsTabs />,
      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/pagination",
        element: <Paginations />,
      },
      {
        path: "/popovers-tooltips",
        element: <PopoversAndTooltips />,
      },
      {
        path: "/progress",
        element: <Progress />,
      },
      {
        path: "/spinners",
        element: <Spinners />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/avatars-chips",
        element: <AvatarAndChips />,
      },
    ],
  },
]);

export default router;
