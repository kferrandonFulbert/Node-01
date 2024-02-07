const express = require('express'); 
const app = express(); 
// répondre avec hello world quand on reçoit une requête GET 
app.get('/',(req, res) => {  res.send('hello world'); });
app.listen(3000, () => {  console.log("Serveur démarré"); });