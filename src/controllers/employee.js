const express = require('express');
const db = require('../utils/db');

async function getEmployees(req, res, next) {
   
  //  var emp = await db.pool.query('SELECT * from employee')
var emp=await db.select('*').from('users');
    res.send(emp);

  
}



module.exports = {getEmployees}