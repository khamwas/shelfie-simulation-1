import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Dashboard from "./Component/Dashboard/Dashboard";
import Form from "./Component/Form/Form";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      editStatus: false,
      currentItem: {}
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.changeEditStatus = this.changeEditStatus.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/api/shelfie/products")
      .then(res => this.setState({ products: res.data }))
      .then(result => console.log(this.state.products));
  }
  deleteProduct(id) {
    axios
      .delete(`http://localhost:3001/api/shelfie/products/${id}`)
      .then(res => this.setState({ products: res.data }));
  }

  addProduct(obj) {
    axios
      .post("http://localhost:3001/api/shelfie/products", obj)
      .then(result => this.setState({ products: result.data }));
  }

  editProduct(id, obj) {
    axios
      .put(`http://localhost:3001/api/shelfie/products/${id}`, obj)
      .then(result => this.setState({ products: result.data }));
    this.setState({ editStatus: !this.state.editStatus });
  }

  changeEditStatus(product) {
    this.setState({ editStatus: !this.state.editStatus });
    this.setState({ currentItem: product });
    console.log(this.state.currentItem);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="siteContainer">
            {/* <Dashboard
              changeEditStatus={this.changeEditStatus}
              deleteProduct={this.deleteProduct}
              products={this.state.products}
            />
            <Form
              editProduct={this.editProduct}
              changeEditStatus={this.changeEditStatus}
              currentItem={this.state.currentItem}
              addProduct={this.addProduct}
              editStatus={this.state.editStatus}
            /> */}
            <Routes
              changeEditStatus={this.changeEditStatus}
              deleteProduct={this.deleteProduct}
              products={this.state.products}
              editProduct={this.editProduct}
              changeEditStatus={this.changeEditStatus}
              currentItem={this.state.currentItem}
              addProduct={this.addProduct}
              editStatus={this.state.editStatus}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
