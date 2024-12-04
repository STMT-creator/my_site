const express = require('express');
const router = express.Router();
const mainLayout = "../views/layouts/common.ejs"


/**
 * 관리자 로그인 요청
 * GET /admin
 */
router.get('/admin', (req, res) => {
    const locals = {
      title: "STMT Admin",
      header: "관리자 로그인",
      //res.send('admin login');
    };
    // res.render("admin/index", {
    //   locals: locals,
    //   layout: "layouts/common"
    // })
    res.render("admin/index", { locals, layout: mainLayout});
  })
/**
 * 회원 가입 폼 보기
 * GET /register 
 */
router.get('/register', (req, res) => {
    res.send('회원 가입 폼을 보여줍니다.')
})

/**
 * 회원 가입 요청
 * POST /register
*/
router.post('/register', (req, res) => {
    res.send('회원 가입 폼의 데이터를 서버로 전송합니다.')
})

/**
 * 회원 정보 찾기
 * POST /find
*/
router.post('/find', (req, res) => {
    res.send('이름 또는 이메일정보로 회원 ID/PW 찾기')
})

  module.exports = router;