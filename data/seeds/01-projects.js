exports.seed = function (knex) {
  // .del() Deletes ALL existing entries
  //.truncate() getting rid of all entries in the projects db and resetting the primary keys
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([{
        name: 'Project One',
        description: 'Cable Management',
        completed: true,
      }]);
    });
};