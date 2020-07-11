var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Tol0ndr0n3s',
  database : 'meraki_shop'
});

app.set('port', process.env.PORT || 4000);
 
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

connection.connect();
 
app.get('/customers', function (req, res) {
    connection.query('SELECT c_fname, c_lname, address, country FROM Customers', function(err, row, fields) {
        var s = [];
        for ( var i = 0; i < row.length; i++ )
            s.push({
                c_fname: row[i].c_fname,
                c_lname: row[i].c_lname,
                address: row[i].address,
                country: row[i].country
            });
        res.send(s);
        });
    });

app.get('/products', function (req, res) {
    connection.query('SELECT p_name, category, price FROM Products', function(err, row, fields) {
        var s = [];
        for ( var i = 0; i < row.length; i++ )
            s.push({
                p_name: row[i].p_name,
                category: row[i].category,
                price: '$' + row[i].price.toString()
            });
        res.send(s);
        });
    });

app.get('/orders', function (req, res) {
    connection.query('SELECT id_order, order_date, c_fname, c_lname, p_name, quantity, total FROM Orders as O INNER JOIN Customers as C ON C.id_customer = O.Id_customer INNER JOIN Products as P ON P.id_product = O.id_product', function(err, row, fields) {
        var s = [];
        for ( var i = 0; i < row.length; i++ )
            s.push({
                id_order: row[i].id_order,
                order_date: row[i].order_date.toString().slice(0, 24),
                c_fname: row[i].c_fname,
                c_lname: row[i].c_lname,
                quantity: row[i].quantity,
                total: '$' + row[i].total.toString()
            });
        res.send(s);
        });
    });
 
    app.listen(app.get('port'), _ => {
        console.log(`Server started on port ${app.get('port')}`);
    });