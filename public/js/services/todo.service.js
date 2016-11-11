
(function() {
  angular.module('mean-todos')
        .factory('TodoService', TodoService);

  TodoService.$inject = ['$http'];

  function TodoService($http){
    init();
    var todos = [];
    return {
     get: getAllTodos,
     create: createOneTodo,
     update: updateOneTodo,
     delete: deleteOneTodo
    };
     function init() { //provide to initializes

       $http.get('./todos')
            .then(function(response){
              todos = response.data.todos;
            })
            .catch(function(err){
              console.log(err);
            });
      }
    function getAllTodos(){
      return todos;
    }
    function createOneTodo(todo){
      DEBUGGER();
      $http.post('./todos', todo)
         .then(function(response){
           todos.push(todo);
         })
         .catch(function(err){
           console.log(err);
         });
    }
    function updateOneTodo(index, todo){}
    function deleteOneTodo(index){}
  }
}());
