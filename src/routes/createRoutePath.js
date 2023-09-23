import Home from "../pages/Home/Home";
import BagPage from "../pages/Bag/BagPage";
import BeautyPage from "../pages/Beauty/BeautyPage";
import ElectronicsPage from "../pages/Electronics/ElectronicsPage";
import HomeAndLivingPage from "../pages/HomeAndLiving/HomeAndLivingPage";
import KidsPage from "../pages/Kids/KidsPage";
import MenPage from "../pages/Men/MenPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ShoesPage from "../pages/Shoes/ShoesPage";
import SportsPage from "../pages/Sports/SportsPage";
import WomenPage from "../pages/Women/WomenPage";
import InputPage from "../pages/Search/SearchPage";
import CartPage from "../components/features/cart/CartPage";
import OrderPage from "../components/features/orders/OrderPage";
import OrderConfirmation from "../components/features/orders/OrderConfirmationPage";
import {
  ADD_TO_CART,
  BAGS,
  BEAUTY,
  ELECTRONICS,
  ERROR_PATH,
  HOME,
  HOME_LIVING,
  KIDS,
  MEN,
  ORDER_CONFIRMED,
  PROCEED_TO_PAYMENT,
  SEARCH,
  SHOES,
  SPORTS,
  WOMEN,
} from "../utils/constants/routerPathVariable";

const routerPath = [
  {
    path: HOME,
    exact: true,
    element: <Home />,
  },
  {
    path: MEN,
    exact: true,
    element: <MenPage />,
  },
  {
    path: WOMEN,
    exact: true,
    element: <WomenPage />,
  },
  {
    path: KIDS,
    exact: true,
    element: <KidsPage />,
  },
  {
    path: HOME_LIVING,
    exact: true,
    element: <HomeAndLivingPage />,
  },
  {
    path: BEAUTY,
    exact: true,
    element: <BeautyPage />,
  },
  {
    path: ELECTRONICS,
    exact: true,
    element: <ElectronicsPage />,
  },
  {
    path: SPORTS,
    exact: true,
    element: <SportsPage />,
  },
  {
    path: SHOES,
    exact: true,
    element: <ShoesPage />,
  },
  {
    path: BAGS,
    exact: true,
    element: <BagPage />,
  },
  {
    path: SEARCH,
    exact: true,
    element: <InputPage />,
  },
  {
    path: ADD_TO_CART,
    exact: true,
    element: <CartPage />,
  },
  {
    path: PROCEED_TO_PAYMENT,
    exact: true,
    element: <OrderPage />,
  },
  {
    path: ORDER_CONFIRMED,
    exact: true,
    element: <OrderConfirmation />,
  },
  {
    path: ERROR_PATH,
    exact: true,
    element: <PageNotFound />,
  },
];

export default routerPath;
