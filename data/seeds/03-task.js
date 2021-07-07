exports.seed = function (knex) {

  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([{
        Name: 'Cleaning the patio',
        Description: 'Picking up the doggie mess',
        Additional: 'materials are needed to complete this task',
        Task_Completed: false,
      }]);
    });
};