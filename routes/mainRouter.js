const express = require('express')
const router = express.Router();
const mainLayout = "../views/layouts/common.ejs";


/**
 * 언어별 주석처리 및 기능설명  --> 별포 두개로 시작
 * 첫 페이지 : index router
 * GET / or /home
 */
router.get('/', (req, res) => {
  const locals = {
    title: "Beginner STMT",
    header: "Web Developer's Tip/Knowhow",
  };
  res.render("index", {
    locals: locals,
    layout: "layouts/common",
  });
});


/**
 * About : 사이트 소개
 * GET /about
 */
router.get('/about', (req, res) => {
  const locals = {
    title: 'about page',
    header: "Web Developer's Tip/Knowhow"
  };
  res.render("about", {
    locals: locals,
    layout: "layouts/common"
  })
});
/**
 * Contact : 작업 요청, 의뢰
 * GET /contact
 */
router.get('/contact', (req, res) => {
  const locals = {
    title: 'contact page',
    header: "Web Developer's Tip/Knowhow"
  };
  res.render("contact", {
    locals: locals,
    layout: "layouts/common"
  })
});

router.get('/signup', (req, res) => {
  res.render('join');
});

/**
 * 관리자 로그인 요청
 * GET /admin
 */
router.get('/admin', (req, res) => {
  const locals = {
    title: "STMT",
    header: "관리자 로그인",
    //res.send('admin login');
  }
  res.render("admin/index", {
    locals: locals,
    layout: "layouts/common"
  })
})

module.exports = router;