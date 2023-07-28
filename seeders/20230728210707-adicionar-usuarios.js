'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {nome: 'Jamogba'},
      {nome: 'Jamogba JR'},
      {nome: 'Moonie'},
      {nome: 'Caio'},
      {nome: 'Vito'},
      {nome: 'Lipe'},
      {nome: 'Joseph'}
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
