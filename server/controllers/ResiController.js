class ResiController {
    static chekResi(req, res, next) {
        axios.get('https://api.binderbyte.com/v1/track')
        .then(data => {
            console.log(data)
            res.status(200).JSON(data)
        })
        .catch(error => {
            console.log(error)
            next(error)
        })


    }
}

module.exports = ResiController