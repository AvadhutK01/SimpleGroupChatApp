const express = require('express');

const router = express.Router();

router.get("/Ulogin", (req, res, next) => {
    res.send("<form action='/auth' method='POST'><label for='name'>Enter username:</label><input type='text' name='name'/><button type='submit'>Login</button></form>")
})
router.post("/auth", (req, res, next) => {
    res.send(`
    <html>
    <body>
        <script>
                localStorage.setItem("username", "${req.body.name}");
                window.location.href = "/?message=success";
        </script>
    </body>
    </html>
`);
})
module.exports = router;