'use strict';

const fs = require('fs');
const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const modelPath = path.join(__dirname,'../','models');
const env = process.env.NODE_ENV || 'production';
const config = require('../../config.json')[env];
//const db = {};


  const db = require('knex')({
    client: 'pg',
    connection: {
      host : config.DB.host,
      user : config.DB.username,
      password : config.DB.password,
      database : config.DB.database,
      pool: config.DB.pool

    }
  });

 

module.exports = db;
