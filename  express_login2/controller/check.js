const router = require("../routes/check");
let { authNum } = require("../routes/mail");
const mail = require("../routes/mail");

const check = async(req, res) => {
    const { number } = req.body;

    console.log(mail.authNum);
    console.log(number);
    try{
        if(mail.authNum === number) {
            res.status(200).json({
                message: "인증번호 일치"
            });
        } else {
            res.status(409).json({
                message: "인증번호 불일치"
            });
        }
    } catch(err) {
        res.status(409).json({
            messagse: "오류"
        });
    }
};

module.exports = { check };