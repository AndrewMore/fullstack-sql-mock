import React from 'react';
import Products from './Products';

const ProductList = (props) => {
   return(
    <div className='product-list'>
    <h3>Current Products</h3>
      {props.items.map((item, index) =>(
        <Products
        key={item.id}
        index={index}
        name={item.item}
        min_cost={item.min_cost}
        curr_bid={item.curr_bid}
        ends_in={item.ends_in}
        img_url={item.image_url}
        click={props.click}
        />))}
    </div>
  )
}

export default ProductList