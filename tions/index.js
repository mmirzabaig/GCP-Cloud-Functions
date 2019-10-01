// const express = require('express');
const cors = require('cors')({origin: true });
const Admin = require("firebase-admin")
const fetch = require('node-fetch');

Admin.initializeApp();
exports.hello = async (req, res) => {
    await cors(req,res, () => {
        let url = 'https://api.yelp.com/v3/businesses/search?location=' + req.body.city + '&term=' + req.body.searchTerm + '&limit=50';
    const getAllBrewries = fetch(url, {
      method: 'GET',
      headers: {
        'api_key': 'BPlq542inBKUYMhcsmxeQs54IaqiDUOWJE0XkI5ECWA0AhNZPiEEYFEtBhAnEoAnoYWb8qTNhH73yjn6h_2sR3tP3FpM95DN0Lzqr0x7MKB4Y1OXyKxoAqWT-lsdXXYx',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BPlq542inBKUYMhcsmxeQs54IaqiDUOWJE0XkI5ECWA0AhNZPiEEYFEtBhAnEoAnoYWb8qTNhH73yjn6h_2sR3tP3FpM95DN0Lzqr0x7MKB4Y1OXyKxoAqWT-lsdXXYx',
      }
    })
        .then(data => data.json())
        .then(async(jsonData) => {
          await console.log(jsonData)
          await res.status(200).json({
              data: data
          })
          return;
        })
    return '';
    })
  };