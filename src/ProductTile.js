import React, { Component } from "react";

class ProductTile extends Component {
  constructor(props) {
    super(props);
  }

  renderLock() {
    if (this.props.productName == "Hosted Fields Page") {
      return <i class="material-icons size-16 blue">lock</i>;
    }
  }

  render() {
    return (
      <div className="w-100 w-33-img-container h-100 pos-relative mobile-w-100">
        <div className="product-tile">
          <img src={this.props.imageSource} onClick={this.props.handler} />

          <div className="product-name" onClick={this.props.handler}>
            <h3>
              {this.renderLock()} {this.props.productName}
            </h3>
            <p className="m-0 p-0">{this.props.description}</p>
          </div>
          <div className="product-tile-back" />
        </div>
      </div>
    );
  }
}

export default ProductTile;
