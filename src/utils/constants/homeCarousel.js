import {
  BEAUTY,
  ELECTRONICS,
  HOME_LIVING,
  KIDS,
  WOMEN,
} from "./routerPathVariable";

const createUrlOfImages = (navigate) => [
  {
    imageUrl: () => navigate(HOME_LIVING),
  },
  {
    imageUrl: () => navigate(HOME_LIVING),
  },
  {
    imageUrl: () => navigate(ELECTRONICS),
  },
  {
    imageUrl: () => navigate(HOME_LIVING),
  },
  {
    imageUrl: () => navigate(BEAUTY),
  },
  {
    imageUrl: () => navigate(WOMEN),
  },
  {
    imageUrl: () => navigate(KIDS),
  },
  {
    imageUrl: () => navigate(ELECTRONICS),
  },
  {
    imageUrl: () => navigate(BEAUTY),
  },
  {
    imageUrl: () => navigate(WOMEN),
  },
];

export default createUrlOfImages;
