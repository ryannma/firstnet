const router = require('express').Router();
const axios = require('axios');
const querystring = require('querystring');
const { talk, processResponse } = require('@lib/watson');


const APP_KEY="ipx0lvti8h3xcqkhdmcfzqtponwhxmia";
const APP_SECRET="mewb2xfqwc6jvov2umthsvwy6l613tpa";

const API_SCOPES="SMS";

const config = {
  Accept: 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded'
}

const host = "https://api.att.com/oauth/v4/token";
const data = {
  client_id: APP_KEY,
  client_secret: APP_SECRET,
  grant_type: 'client_credentials',
  scope: API_SCOPES
}

/*
  axios({
    method: 'POST',
    url: host,
    headers: config,
    data: querystring.stringify(data)
  }).then(data => {
    const access_token = data.data.access_token;
    const refresh_token = data.data.refresh_token;
    res.json(data);
  }).catch(err => {
    console.log(err);
  })
*/

router.post('/', (req, res) => {
  console.log(req.body);
  const text = req.body.text;
  const number = 'tel:9097203363';
  axios({
    method: 'POST',
    url: host,
    headers: config,
    data: querystring.stringify(data)
  }).then(data => {
    const access_token = data.data.access_token;
    return access_token;
  }).then(token => {
    const sendHost = 'https://api.att.com/sms/v3/messaging/outbox';
    const sendConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    axios({
      method: 'POST',
      url: sendHost,
      headers: sendConfig,
      data: {
        outboundSMSRequest: {
          address: number,
          message: text
        }
      }
    }).then(data => {
      console.log(data.data);
      res.status(201);
      res.json(data.data);
    }).catch(err => {
      console.log(JSON.stringify(err.response.data))
    })
  })
  .catch(err => {
    // console.log(err);
  })

});

router.get('/', (req, res) => {
  console.log('the sms get route is called');

});

module.exports = router;
