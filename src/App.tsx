import React, { useEffect } from "react";
// import { TodosContainer, todosActions, actionsUsers, SingUP } from "@containers/";
import { useDispatch } from "react-redux";
import Users from "./containers/Users/components/Users/users";
import { Redirect, Switch, Router, Route } from "react-router";
import { ROUTER_PATH } from "./router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./shared";
import { Activation, SingUP } from "./containers";

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
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={SingUP} exact={true} path={ROUTER_PATH.REGISTRATION} />
        <Route component={Activation} exact={true} path={ROUTER_PATH.ACTIVATION} />
        <Redirect to={ROUTER_PATH.REGISTRATION} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;

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
