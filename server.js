let express = require('express');


const app = express();
// // app.use(cors())
// // app.use(express.json())
// app.use(express.static(__dirname + '/client/build'))

const path = require('path')
let root = path.join(__dirname, 'client', 'build/')
app.use(express.static(root))
app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
})
// app.use('/relativepath',express.static(path.join(__dirname, 'build')));
// const root = require('path').join(__dirname, 'client', 'build')
// app.use(express.static(root));
// app.get("*", (req, res) => {
//     res.sendFile('index.html', { root });
// })