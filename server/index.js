const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = 4000;
app.listen(PORT, () => console.log(`All systems go, approaching at vector, ${PORT}`));