const express = require("express")
const router = express.Router()
const cors = require("cors")
const { initializePayment, verifyPayment, checkoutPayment  } = require("../controllers/paymentController")

router.post('/', cors(), initializePayment)
router.post('/api/payment', cors(), checkoutPayment)

router.get('/verify/:id', cors(), verifyPayment)

module.exports = router;