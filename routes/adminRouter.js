const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")
const mainLayout = "../views/layouts/common.ejs"
const User = require("../models/User.js");


/**
 * 관리자 로그인 폼
 * GET /admin
 */
router.get('/admin', (req, res) => {
    const locals = {
        title: "STMT Admin",
        header: "관리자 로그인",
    };
    res.render("admin/index", { locals, layout: mainLayout });
})

/**
 * 관리자 로그인 요청
 * POST /admin
 */
router.post('/admin', async (req, res) => {
    const locals = {
        title: "STMT Admin",
        header: "관리자 로그인",
    };
    const { admin_id, admin_pwd } = req.body;
    console.log(admin_id, admin_pwd);
    const user = await User.find({ user_id: admin_id })
    // user_id가 admin_id랑 같은걸 매칭
    // 상수의 admin_id는 입력값이 admin_id이기 때문에
    // 그것으로 넘기고 비교는 user_id

    if (!user) {
        throw new Error('user account is not found')
    }
    console.log(user);
    res.render("admin/index", { locals, layout: mainLayout });
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
router.post('/register', async (req, res) => {
    try {
        const { user_id, user_nick, user_pwd, user_email } = req.body;
        const hashedPwd = await bcrypt.hash(user_pwd, 10);
        const user = User({
            user_id: user_id,
            user_pwd: hashedPwd,
            user_nick: user_pwd,
            user_email: user_email
        });
        const savedUser = await user.save();

        if (!user) {
            throw new Error('계정 생성 실패!')
        }
        res.status(200).send({
            message: "user account has created",
            data: user
        })

    } catch (err) {
        console.log(err);
    }
})

/**
 * 회원 정보 찾기
 * POST /find
*/
router.post('/find', (req, res) => {
    res.send('이름 또는 이메일정보로 회원 ID/PW 찾기')
})

module.exports = router;