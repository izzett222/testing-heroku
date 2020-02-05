const expess = require('express');
const app = expess();
app.use('*', function(req, res) {
  res.send('its working');
})
const port = process.env.PORT || 4000
app.listen(port, function() {
  console.log('server listening');
})