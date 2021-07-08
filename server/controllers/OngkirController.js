const { City } = require('../models')
const axios = require('axios')

class OngkirController {
  static async getCities(req, res, next) {
    try {
      let cities = await City.findAll()
      cities.map(city => city.city_name)

      res.status(200).json(cities)
    } catch (err) {
      next(err)
    }
  }

  static async getOngkir(req, res, next) {
    let { origin, destination, weight } = req.body
    let couriers = ['jne', 'pos', 'tiki']
    try {
      let results = []
      for (let courier of couriers) {
        let response = await axios({
          method: 'POST',
          url: 'https://api.rajaongkir.com/starter/cost',
          headers: { key: process.env.RAJA_ONKIR_API_KEY },
          data: {
            origin,
            destination,
            weight,
            courier
          }
        })
        let data = response.data
        results.push(data.rajaongkir.results[0])
      }

      res.status(200).json(results)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = OngkirController