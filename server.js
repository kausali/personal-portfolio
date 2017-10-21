
var express = require("express");
var  bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var path = require('path');
const exphbs = require('express-handlebars');
const sgMail = require('@sendgrid/mail');
var expressValidator = require('express-validator');
var session = require('express-session');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var Router = require('router');



var app = express();
var router = Router();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//connect css
app.use('/public', express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, 'public', 'images', 'logo.ico')))

app.use(session({secret: "thiscouldbeanythingsoitsastring"}));

// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(expressValidator());

app.get('/', function(request, response) {
  response.render("portfolio", {success: request.session.success, errors: request.session.errors});
  request.session.success = false;
  request.session.errors = null;
});


app.post('/sent', urlencodedParser, (request, response) => {
    request.check('userName', "Name is missing").isLength({min:1});
    request.check('email', "Email is invalid").isEmail();
    request.check('message', "Message field is empty.").isLength({min:1});

    var errors = request.validationErrors();
  

    if (errors){
       request.session.errors = errors;
       request.session.success = false;
       console.log(errors);
       response.redirect('/');
    }
    else{
        request.session.success = true;
        const output = `
            <h3> Contact Detail </h3>
            <ul>
                <li> Name: ${request.body.userName}</li>
                <li> Email: ${request.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p><li> ${request.body.message}</li></p>
        `;
    
        console.log(output);
    
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey("process.env.SENDGRID_API_KEY"
        );
        const msg = {
          to: 'kausali.lama@gmail.com',
          from: 'kausali.lama@gmail.com',
          subject: 'Received Email from My Portfolio',
          html: output
        };
        sgMail.send(msg);
        response.redirect('/');
        
    }
   
})

    // app.listen(5000, function() {
    //     console.log("listening on port 5000");
    // })

    app.listen(process.env.PORT || 5000, function(){
        console.log("server listening on port %d in %s mode", this.address().port, app.settings.env);
      });
    
    