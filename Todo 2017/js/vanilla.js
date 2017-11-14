// stats

/*
<span id="todo-count"><strong><%= remaining %></strong> <%= remaining == 1 ? 'item' : 'items' %> left</span>
  <ul id="filters">
    <li>
      <a class="selected" href="#/">All</a>
    </li>
    <li>
      <a href="#/active">Active</a>
    </li>
    <li>
      <a href="#/completed">Completed</a>
    </li>
  </ul>
  <% if ( completed ) { %>
    <button id="clear-completed">Clear completed</button>
  <% } %>
*/

// todos

/*
<li>
  <div class="view">
    <input class="toggle" type="checkbox" <%= completed ? 'checked' : '' %>>
    <label><%- title %></label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="<%- title %>">
</li>
*/


window.onload = function() {

  todos = [];
  var todoId = 0;
  //ul que contendrá las new-todo's
  var list = document.getElementById("todo-list");

  document.getElementById('new-todo').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;

    if (keyCode == '13'){
      var agregar = this.value;
      add(agregar);
      this.value = "";
      return false;
    }
  };

  // input
  var add = function(inputValue) {
    var todo = {
      title: inputValue,
      checked: false,
      id: todoId
    };

    todoId++;

    todos.push(todo);
    render(todo);
  };

  // 
  var render = function(todo) {

    li = document.createElement("li");
    li.innerHTML = '<input class="toggle" type="checkbox"> <div class="view"><label>' + todo.title + '</label><button class="destroy"></button></div> <input class="edit" value="">';
    
    document.getElementById("todo-list").appendChild(li); 

    var destroyButton = li.getElementsByClassName('destroy')[0];

    destroyButton.addEventListener('click', function(event) {
      var li = event.target.parentElement.parentElement;
      destroy(li);      
    });

    li.addEventListener('dblclick', function(event) {
      var li = event.currentTarget;
      li.className = 'editing';
      var editButton = li.getElementsByClassName('edit')[0];
      editButton.focus();
    });
    
      //********** */

    var editButton = li.getElementsByClassName('edit')[0];
    editButton.addEventListener('focusout', function(event) {
      update(event);
    });

  };

  var destroy = function() {
    var id = li.id.split('-')[1]  
    id = parseInt(id, 10);
    
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        break;
      }
    }
    
    todos.splice(i, 1);

    list.removeChild(li);
  };

var update = function(event) {
    var editButton = event.currentTarget;
    var li = event.currentTarget.parentElement;
    var label = li.getElementsByTagName('label')[0];

    li.classList.remove('editing');
    label.innerHTML = editButton.value;

    var id = +li.id.split('-')[1];
    var todo;

    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todo = todos[i];
        break;
      }
    }

    todo.title = editButton.value;
  };


};