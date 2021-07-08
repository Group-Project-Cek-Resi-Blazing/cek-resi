'use strict'
const axios = require('axios')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = await axios.get('https://api.rajaongkir.com/starter/city', {
      headers: { key: 'fb1506fc8880fa3de8668ce40369a264' },
    })
    let cities = data.data.rajaongkir.results.map((city) => {
      return {
        province_id: city.province_id,
        province: city.province,
        type: city.type,
        city_name: city.city_name,
        postal_code: city.postal_code,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
    await queryInterface.bulkInsert('Cities', cities, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cities', null, {})
  },
}
