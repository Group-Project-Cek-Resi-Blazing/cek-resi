const axios = require('axios');
class ResiController {
    static chekResi(req, res, next) {
        const {courier, awb} = req.query
        axios.get(`https://api.binderbyte.com/v1/track?api_key=${process.env.CEK_RESI_API_KEY}&courier=${courier}&awb=${awb}`)
        .then(data => {
            res.status(200).json(data.data.data)
        })
        .catch(error => {
            next(error)
        })
    }
}

module.exports = ResiController