var express = require('express');
var app = express();
// servowanie statyczne zawartosci pliku assets
app.use(express.static('assets'));

app.get('/', function (req, res) {
  //wysyla plik w odpowiedzi na zadanie(zamiast tekstu)
    res.sendFile('/index.html');
});

app.get('/userform', function(req, res) {
  // w czasie przetwarzania zadania, twotrzymy nowy obiekt response
  const response = {
  // o kluczach first_name i second_name
  // req.query.first_name - dane z obiektu otrzymanego z zadania
    first_name: req.query.first_name,
    second_name: req.query.second_name
  };
  // na koniec: wyswietlenie naszego obiektu przetworzonego na typ string za
  //pomoca metody JSON.stringify
  res.end(JSON.stringify(response));
  console.log(response);
  console.log(req);
});

var server = app.listen(3000, 'localhost', function() {
  // zdefiniowany port i adres (metoda .adress() pobiera adres i port z pliku konfiguracyjnego/dzialac bedzie zdalnie i lokalnie)
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});
