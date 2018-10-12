import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import Form from "./Component/Form/Form";

function Routes(props) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Dashboard
            changeEditStatus={props.changeEditStatus}
            deleteProduct={props.deleteProduct}
            products={props.products}
          />
        )}
      />
      <Route
        path="/form"
        render={() => (
          <Form
            editProduct={props.editProduct}
            changeEditStatus={props.changeEditStatus}
            currentItem={props.currentItem}
            addProduct={props.addProduct}
            editStatus={props.editStatus}
          />
        )}
      />
      <Route
        path="/form/:id"
        render={() => (
          <Form
            editProduct={props.editProduct}
            changeEditStatus={props.changeEditStatus}
            currentItem={props.currentItem}
            addProduct={props.addProduct}
            editStatus={props.editStatus}
          />
        )}
      />
    </Switch>
  );
}

export default Routes;
