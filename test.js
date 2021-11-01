const schedule = require("./index");
const util = require('util')



// Define a set of tasks
   var testTasks = [
    {id: 1, duration: 60},
    {id: 2, duration: 30, dependsOn: [1], resources: ['A']},
    {id: 3, duration: 30, dependsOn: [1], resources: [['A','B']]}
  ];

  // Define a set of resources
  var testResources = [
    {id: 'A'},
    {id: 'B'}
  ];
  var testS = schedule.create(testTasks, testResources, null, new Date());

  
  console.log('testS :>> ', util.inspect(testS,false,20,true));
  
  console.log('\ntestS.dependencyGraph :>> ', util.inspect(schedule.dependencyGraph(testTasks) ,false,20,true));

  console.log('\schedule.resources :>> ', util.inspect(schedule.resources().available() ,false,20,true));