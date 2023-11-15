const axios = require("axios");

const CHAPA_URL = process.env.CHAPA_URL || "https://api.chapa.co/v1/transaction/initialize";
//https://api.chapa.co/v1/charges?type="transaction"
const CHAPA_AUTH = process.env.CHAPA_AUTH; 

const initializePayment = async (req, res) => {
    const config = {
        headers: {
            Authorization: CHAPA_AUTH,
        },
    };

    const CALLBACK_URL = "http://localhost:3000";

    const TEXT_REF = "tx-myecommerce12345-" + Date.now();

    const data = {
        amount: req.body.amount,
        currency: 'ETB',
        email: 'ato@ekele.com',
        first_name: 'Ato',
        last_name: 'Ekele',
        tx_ref: TEXT_REF,
        callback_url: CALLBACK_URL,
    };

    try {
        const response = await axios.post(CHAPA_URL, data, config);
        res.send(response.data.data.checkout_url);
        console.log(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const verifyPayment = async (req, res) => {
    const config = {
        headers: {
            Authorization: CHAPA_AUTH,
        },
    };

    try {
        const response = await axios.get("https://api.chapa.co/v1/transaction/verify/" + req.params.id, config);
        console.log(response.data);
        res.json({ message: response.data });
    } catch (err) {
        console.error("Payment can't be verified", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json({ message: "response", param: req.params.id });
};


const checkoutPayment = async (req, res) => {
    console.log(req.body)
    
};

module.exports = { initializePayment, verifyPayment, checkoutPayment };
