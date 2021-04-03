var express = require('express');
var indexRouter = express.Router();
const database = require('../database')

/*  data send to the home page for view */
indexRouter.get('/',(req, res)=> {
  try{
        database.query("select * from test",(err,row)=>{
          if(err){
            throw err;
          }
          else{
            if(row.length == 0){
              res.end({
                response: false,
                data:"Some data base issue total number of items is empty :("
              })
            }
            else{
              res.send({
                response:true,
                //send resent items to front end home page
                data: row
              })
            }
          }
        })
  }
  catch(error){
    console.log(error);
    throw error;
  }
});

module.exports = indexRouter;
