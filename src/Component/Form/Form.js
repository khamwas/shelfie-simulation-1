import React, { Component } from "react";
import "./Form.css";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      name: "",
      price: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clearState = this.clearState.bind(this);
    // this.addProduct = this.addProduct.bind(this);
  }

  changeHandler(key, e) {
    this.setState({ [key]: e.target.value });
    console.log(this.state);
  }

  clearState(e) {
    this.setState({ img: "", name: "", price: "" });
    if (this.props.editStatus) {
      this.props.changeEditStatus();
    }
    console.log(this.state);
  }

  render() {
    return (
      <div id="form" className="formContainer">
        <img
          alt="placeholder img"
          className="formImg"
          src="https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png"
        />
        <h4>
          Image URL:
          <br />
          <input
            defaultValue={
              this.props.editStatus
                ? this.props.currentItem.img
                : this.state.img
            }
            onChange={e => this.changeHandler("img", e)}
          />
          <br />
          Product Name:
          <br />
          <input
            defaultValue={
              this.props.editStatus
                ? this.props.currentItem.name
                : this.state.name
            }
            onChange={e => this.changeHandler("name", e)}
          />
          <br />
          Price:
          <br />
          <input
            type="number"
            defaultValue={
              this.props.editStatus
                ? this.props.currentItem.price
                : this.state.price
            }
            onChange={e => this.changeHandler("price", e)}
          />
        </h4>
        <div className="formButtonContainer">
          <Link to="/">
            <button onClick={() => this.clearState()}>Cancel</button>
          </Link>
          {this.props.editStatus ? (
            <Link to="/">
              <button
                onClick={() =>
                  this.props.editProduct(this.props.currentItem.id, this.state)
                }
              >
                Save
              </button>
            </Link>
          ) : (
            <Link to="/">
              {" "}
              <button onClick={() => this.props.addProduct(this.state)}>
                Add to Inventory
              </button>
            </Link>
          )}
          {/* <button onClick={() => this.props.addProduct(this.state)}>
            {this.props.editStatus ? "Save" : "Add to Inventory"}
          </button> */}
        </div>
      </div>
    );
  }
}

export default Form;
