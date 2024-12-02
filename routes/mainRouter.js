const express = require('express')
const router = express.Router();
const mainLayout = "../views/layouts/common.ejs";

router.get('/', (req, res) => {
  // res.render('index', {
  //   layout: mainLayout,
  //   title: 'My Site',
  //   header: 'Special Header'
  // });
  const locals = {
    title: "Beginner STMT",
    header: "Web Developer's Tip/Knowhow",
  };
  res.render("index", {
    locals: locals,
    layout: "layouts/common",
  });
});

router.get('/signup', (req, res) => {
// res.send('Hello World!')
res.render('join');
});

module.exports = router;