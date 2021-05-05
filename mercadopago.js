var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'TU API KEY DE MERCADOPAGO'});
    
    var preference = {}
   
    var item = {
        title: 'Blue shirt',
        quantity: 10,
        currency_id: 'ARS',
        unit_price: 150
      }
      
      var payer = {
        email: "demo@mail.com"
      }
      
      preference.items = [item]
      preference.payer = payer
      
      mercadopago.preferences.create(preference).then(function (data) {
         // Do Stuff...
       }).catch(function (error) {
         // Do Stuff...
       });

mercadopago.preferences.create(preference)