const db = require('./index.js');

module.exports = {
  getProductsHelper : (callback) => {
    db.query(`SELECT * FROM bid_items`, (err, result)=>{
      if(err){callback(err, null)}
      else{callback(null,result)}
    })
  },
  postProductHelper : (data, callback) => {
    db.query(`INSERT INTO bid_items (item, min_cost, curr_bid, ends_in, image_url) VALUES("${data.item}", ${data.min_cost}, ${data.curr_bid}, ${data.ends_in}, "${data.image_url}");`, (err, result)=>{
      if(err){callback(err, null)}
      else{callback(null,result)}
    })
  },
  updateProductHelper : (id, data, callback) => {
    db.query(`UPDATE bid_items SET curr_bid=${data} WHERE id=${id};`, (err, result)=>{
      if(err){callback(err, null)}
      else{callback(null,result)}
    })
  },
  deleteProductHelper : (id, callback) => {
    db.query(`DELETE FROM bid_items WHERE id=${id}`, (err, result)=>{
      if(err){callback(err, null)}
      else{callback(null,result)}
    })
  }
}


