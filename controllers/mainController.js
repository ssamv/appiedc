const controller = {};

controller.login = (req, res) => {
    const email  = req.body.email;
    console.log(email);
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM table_user WHERE email = ?', [email], (err, rows) => {
        if(rows!=undefined){
            if (rows.length>0){
                req.session.user = rows[0];
                res.redirect('/auditorio');
            }else{
                res.render('home', {
                    denied: true 
                });
            }
        }else{
            res.render('home', {
                denied: true 
            });
        }
      });
    });
};

controller.auditorio = (req, res) => {
  var user = req.session.user;
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM config WHERE fecha_config', (err, rows) => {
      if(rows!=undefined){
        console.log(rows[0].id_vimeo);
        if (user === undefined){
          res.redirect('/');
        }else{
          res.render('auditorio',{
              data: user, vimeo: rows[0].id_vimeo
          });
        }
      }else{
        if (user === undefined){
          res.redirect('/');
        }else{
          res.render('auditorio',{
              data: user, vimeo: 000
          });
        }
      }
    });
    
  });
};

/*
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM table_user', (err, customers) => {
     if (err) {
      res.json(err);
     }
     console.log(customers[0]);
     res.render('home', {
        data: customers[0]
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};



controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}
*/
module.exports = controller;
