const axios = require('axios');
class ResiController {
    static chekResi(req, res, next) {
        const {courier, awb} = req.body
        axios.get(`https://api.binderbyte.com/v1/track?api_key=${process.env.api_key}&courier=${courier}&awb=${awb}`)
        .then(data => {
            res.status(200).json(data.data.data)
        })
        .catch(error => {
            console.log(error)
            next(error)
        })
    }
}

module.exports = ResiController