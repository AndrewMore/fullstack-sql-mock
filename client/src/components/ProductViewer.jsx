import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newBid : 0
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      newBid : e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    axios
    .put(`/api/products/${this.props.item.id}`, {newBid : this.state.newBid})
    .then(()=>this.props.getProducts())
    .catch((err)=>console.error(`Update failed : ${err}`))
  }

  render(){
    return(
      <div className = 'product-viewer'>
        <img src={this.props.item.image_url}></img>
        <h3>{this.props.item.item}</h3>
        <div className='product-viewer-details'>
          <p>Current Bid: ${this.props.item.curr_bid}</p>
          <p>Original Posting Price: ${this.props.item.min_cost}</p>
          <p>Bidding Ends in: {this.props.item.ends_in} day(s)</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              New Bid :
              <input onChange={this.handleChange}></input>
              <button>Submit</button>
            </label>
          </form>
        </div>
      </div>
    )
  }
}