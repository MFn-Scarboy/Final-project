const express    = require("express")
const router     = express.Router()

router.get("/logout", (req, res, next) => {
    req.session.destroy((error) => {
        if(error) {
            res.json(error)
        } else {
            res.send("succes")
        }
    })
})
  
module.exports = router;