require('dotenv').config();
require('module-alias/register')

const app = require('@server');
const port = process.env.PORT || 8080;

const server = app.listen(port, () => console.log(`Listening on port ${server.address().port}`));