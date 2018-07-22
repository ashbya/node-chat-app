const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');


let app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(publicPath));

// app.get('/', (req,res) => {
//   res.send('Hello World');
// });

app.listen(port, () => {
  console.log(`Started on port ${port} `);
});
