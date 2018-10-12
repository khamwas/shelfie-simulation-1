import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    let productDisplay = this.props.products.map(elem => (
      <Product
        key={elem.id}
        product={elem}
        deleteProduct={this.props.deleteProduct}
        changeEditStatus={this.props.changeEditStatus}
      />
    ));
    return <div>{productDisplay}</div>;
  }
}

export default Dashboard;
