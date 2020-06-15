import React from 'react';

const Products = (props) => {
   return(
    <div className='product-list-entry' onClick={()=>{props.click(props.index)}}>
      <img className='listimages' src={props.img_url}></img>
      <h3 className='product-list-entry-title'>{props.name}</h3>
      <p className='product-list-entry-detail'>Current Bid : ${props.curr_bid}</p>
      <p className='product-list-entry-detail'>Bid Ends in : {props.ends_in} day(s)</p>
    </div>
  )
}

export default Products