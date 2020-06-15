// Controller here
const dbHelpers = require('../db/dbhelpers.js');


const controller = {
  get: (req, res) => {
    dbHelpers.getProductsHelper((err, result) =>{
      if(err){res.status(400).send(err)}
      else{res.status(200).json(result)}
    })
  },
  post: (req, res) => {
    dbHelpers.postProductHelper(req.body, (err, result) =>{
      if(err){res.status(400).send(err)}
      else{res.status(200).send('Successful post!')}
    })
  },
  put: (req, res) => {
    console.log(req.params.id, req.body, req.body.newBid);
    dbHelpers.updateProductHelper(req.params.id, req.body.newBid, (err, result) =>{
      if(err){res.status(400).send(err)}
      else{res.status(200).send(`Successful update of id ${req.params.id}`)}
    })
  },
  delete: (req, res) => {
    dbHelpers.deleteProductHelper(req.params.id, (err, result) =>{
      if(err){res.status(400).send(err)}
      else{res.status(200).send(`Successful delete of id ${req.params.id}`)}
    })
  }
}

module.exports = controller;