window.onload = function () {
  //input new-todo  add llama a render y renderea de nuevo

  //ul que contendrá las new-todo's
  var list = document.getElementById("todo-list");
  //input
  var newTodo = document.getElementById("new-todo");

  //Variable temporal para asignar un id al new-todo para despues poder borrarlo
  var todoId = 0;
  //Array que contendrá todos los objetos new-todo's que iremos creando
  var todos = [];

  //callback que se pasará al evento del elemento input (new-todo)
  var onChange = function (event) {
    event.target // newTodo
    event.keyCode // 13
    // 13 es el código de Enter
    if (event.keyCode !== 13) {
      return;
    }
    var inputValue = event.target.value; // texto de la nueva tarea
    add(inputValue);
    event.target.value = '';
  };

  var add = function (inputValue) {//constructor
    var todo = {
      title: inputValue,
      checked: false,
      id: todoId
    };

    todoId++; // todoId = todoId + 1;

    todos.push(todo);//agrego un objeto en un array vacio sacandolo de su contexto y guardándolo en una variable
    render(todo);
  }

  var render = function (todo) {
    var title = todo.title;
    var checked = todo.checked;
    var id = todo.id;

    var isChecked = checked ? 'checked' : '';

    var itemContent = '<div class="view">' +
      '<input class="toggle" type="checkbox" ' + isChecked + '>' +
      '<label>' + title + '</label>' +
      '<button class="destroy"></button>' +
      '</div>' +
      '<input class="edit" value="' + title + '">';
    //tengo solo un string

    //esto lo hacemos para que no el evento destroy() tenga el item al que hace referencia
    var li = document.createElement('li');// en este momento se convierte en un elemento del DOM
    //agreagamos el id al li de nuestro new-todo
    li.id = 'item-' + id;
    //agregamos el contenido al li (new-todo)
    li.innerHTML = itemContent;

    //obtenemos la clase del boton destroy y lo asignamos a una variable
    var destroyButton = li.getElementsByClassName('destroy')[0]; // -> [button.destroy]

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

    //le agregamos el evento al boton
    destroyButton.addEventListener('click', function(event) {
      // buscamos el elemento li bajando en el árbol de nodos y lo asignamos a una variable
      var li = event.target.parentElement.parentElement;
      destroy(li);      
    });
    //agregamos el elemento li junto a todo su contenido a la lista
    list.appendChild(li); // 
  };

  //********** */
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

  // destruye una y renderea de nuevo
  var destroy = function (li) {
    var id = li.id.split('-')[1]  // item-0 -> ['item', '0'] -> '0'
    id = parseInt(id, 10);
    // var id = +li.id.split('-')[1];
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        break;
      }
    }
    // splice
    todos.splice(i, 1);

    list.removeChild(li);
  };

  // callback
  newTodo.addEventListener('keypress', onChange);
};
