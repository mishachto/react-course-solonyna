import React, { useEffect, useMemo } from "react";
// import { TodosContainer,  } from "@containers/";
import { useDispatch, useSelector } from "react-redux";
import Users from "./containers/Users/components/Users/users";
import { Redirect, Switch, Router, Route } from "react-router";
import { RequireAuthHOC, ROUTER_PATH } from "./router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./shared";
import { Activation, SingUP, todosActions, actionsUsers, SingIn, TodosContainer, getAuthUser } from "./containers";
import { ObjectSchema } from "yup";

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(todosActions.FETCH_TODOS.REQUEST());
//     dispatch(actionsUsers.FETCH_USERS.REQUEST());
//   }, [dispatch]);
//   return (
//     <>
//       {/* <Users />
//       <TodosContainer />; */}

//       <SingUP />
//     </>
//   );
// };

const App = () => {
  const userAuth = useSelector(getAuthUser());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todosActions.FETCH_TODOS.REQUEST());
    dispatch(actionsUsers.FETCH_USERS.REQUEST());
  }, [dispatch]);

  const renderRouts = useMemo(() => {
    if (userAuth && Object.keys(userAuth).length) {
      return (
        <Switch>
          <Route component={TodosContainer} exact={true} path={ROUTER_PATH.TODOS} />
          <Redirect to={ROUTER_PATH.TODOS} />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route component={SingIn} exact={true} path={ROUTER_PATH.LOGIN} />
          <Route component={SingUP} exact={true} path={ROUTER_PATH.REGISTRATION} />
          <Route component={Activation} exact={true} path={ROUTER_PATH.ACTIVATION} />
             <Redirect to={ROUTER_PATH.LOGIN} />
        </Switch>
      );
    }
  }, [userAuth]);

  return <ConnectedRouter history={history}>{renderRouts}</ConnectedRouter>;
};

export default RequireAuthHOC(App);

///
// let test: number | string = 100

// type Tlast = string | null;

// const data = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// interface IObj {
//   id?: number;
//   first: string;
//   last: Tlast;
//   age: number;
//   data: Record<string , Tlast>
//   getAge: (a: string, b: number) => void
// }

// const obg: IObj[] = [{
//   id: 1,
//   age: 10,
//   first: 'name',
//   last: "last",
//   data: {}
//   getAge: (a, b) => {
//     console.log(123);

//   }
// }]
