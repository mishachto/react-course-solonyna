import { ROUTER_PATH } from "./constants";

export const publicRouter = [
  {
    path: ROUTER_PATH.LOGIN,
    component: null,
    exact: true,
    children: [],
    icon: "",
    label: "",
  },
  {
    path: ROUTER_PATH.REGISTRATION,
    component: null,
    exact: true,
    children: [],
    icon: "",
    label: "",
  },
  {
    path: `${ROUTER_PATH.RESET}/:token`,
    component: null,
    exact: true,
    children: [],
    icon: "",
    label: "",
  },
  {
    path: ROUTER_PATH.FORGOT,
    component: null,
    exact: true,
    children: [],
    icon: "",
    label: "",
  },
  {
    path: `${ROUTER_PATH.ACTIVATION}/:token`,
    component: null,
    exact: true,
    children: [],
    icon: "",
    label: "",
  },
];
