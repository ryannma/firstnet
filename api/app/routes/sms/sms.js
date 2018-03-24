const router = require('express').Router();
const axios = require('axios');
const querystring = require('querystring');

const APP_KEY="ipx0lvti8h3xcqkhdmcfzqtponwhxmia";
const APP_SECRET="mewb2xfqwc6jvov2umthsvwy6l613tpa";

const API_SCOPES="SMS";

function retrieveAccess() {
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
}

router.post('/', (req, res) => {


});

router.get('/', (req, res) => {
  

});

module.exports = router;
