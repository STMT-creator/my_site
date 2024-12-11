const express = require('express')
const router = express.Router();
const mainLayout = "../views/layouts/common.ejs";
const Post = require("../models/Post.js");


/**
 * 언어별 주석처리 및 기능설명  --> 별포 두개로 시작
 * 첫 페이지 : index router
 * GET / or /home
 */
router.get(['/','/home'], async (req, res) => {
  const locals = {
    title: "Beginner STMT",
    header: "Web Developer's Tip/Knowhow",
  };
  const data = await Post.find();
  res.render("index", { locals, data, layout: mainLayout });
});

/**
 * 최신글 보기 router
 * GET /post/:id
 * 라우트 파라미터(=매개변수) 끝에 작성
 */
router.get('/posts/:id', async (req, res) => {
  const locals = {
    title: 'My Site',
    header: '사이트 소개'
  }

  const data = await Post.findById(req.params.id)
  
  res.render("post", {data, locals, layout:mainLayout})
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
  res.render("about", { locals, layout:mainLayout })
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
  res.render("contact", { locals, layout:mainLayout })
});

router.get('/signup', (req, res) => {
  res.render('join');
});

module.exports = router;


// Post.insertMany([
//   {
//     title: "농어민 및 중소기업의 활성화",
//     content: "국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 대법원은 법률에 저촉되지 아니하는 범위안에서 소송에 관한 절차, 법원의 내부규율과 사무처리에 관한 규칙을 제정할 수 있다."
//   },
//   {
//     title: "신체의 자유",
//     content: "모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다."
//   },
//   {
//     title: "국민으로서의 권리와 의무",
//     content: "모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다."
//   }
// ])