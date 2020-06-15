import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      currItem : {}
    }
    this.handleClick = this.handleClick.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  handleClick(id){
    this.setState({
      currItem: this.state.items[id]
    })
  }

  getProducts(){
    axios
    .get('/api/products')
    .then((data) =>{
      console.log(data.data);
      this.setState({
        items : data.data,
        currItem : data.data[0]
      })
    })
    .catch((err)=>console.error('error getting', err))
  }

  componentDidMount(){
      this.getProducts()
    }

  render(){

    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer item={this.state.currItem} getProducts={this.getProducts}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList click={this.handleClick} items={this.state.items}/>
          </div>
        </div>
      </div>
    )
  }
}