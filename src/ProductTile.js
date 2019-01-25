import React, { Component } from 'react';

class ProductTile extends Component {
  constructor(props) {
    super(props);
  }

  renderTags(){
    var tags = []
    for (var i = 0; i < this.props.tags.length; i++) {
      tags.push(<div className="subject" key={i}>{this.props.tags[i]}</div>)
    }
    return tags
}

renderLock(){
  if (this.props.productName=="Hosted Fields Page"){
    return <i class="material-icons size-16 blue">lock</i>
  }
}

  render() {
    return (
        <div className="w-33 w-33-img-container h-100 pos-relative p-2 mobile-w-100 mobile-bottom-10">
        <div className="product-tile">
        <img src={this.props.imageSource} onClick={this.props.handler}/>

            <div className="product-name" onClick={this.props.handler}>
              <h3>
                {this.renderLock()} {this.props.productName}
              </h3>
              <br />
              <p className="m-0 p-0"><em>{this.props.description}</em></p>
              {this.renderTags()}              <br />

            </div>
            <div className="product-tile-back"></div>
          </div>

        </div>
    );
  }
}

export default ProductTile;
