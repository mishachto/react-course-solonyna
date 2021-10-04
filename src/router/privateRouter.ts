import { TodosContainer } from "@containers/";
import { ROUTER_PATH } from "./constants";
export const privateRouter = (userRole: string) =>
  [
    {
      path: ROUTER_PATH.TODOS,
      component: TodosContainer,
      exact: true,
      children: [],
      icon: "",
      label: "",
      acl: ["ADMIN", "MANAGER"],
    },
    {
      path: ROUTER_PATH.USERS,
      component: null,
      exact: true,
      children: [],
      icon: "",
      label: "",
      acl: ["ADMIN"],
    },
  ].filter((route) => route.acl.includes(userRole) || !route.acl.length);
