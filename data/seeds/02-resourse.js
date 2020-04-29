exports.seed = function (knex) {
  //Use .truncate() to reset db
  return knex('resourse').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resourse').insert([{
          name: 'Eduardo',
          description: 'to be determined by the person performing the task'
        },
        {
          name: 'Luis',
          description: 'to be determined by the person performing the task'
        },
        {
          name: 'Yara',
          description: 'to be determined by the person performing the task'
        }
      ]);
    });
};