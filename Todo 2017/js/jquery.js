$(window).on('load', function(){
	todos = [];
	var todoId = 0;
	var list = $('#todo-list');
	var input = $('#new-todo');

	$(input).on('keypress', function(e){

		if (!e) e = window.event;
	    var keyCode = e.keyCode || e.which;

	    if (keyCode == '13'){
	    
	    	var inputValue = this.value;
	    	add(inputValue);
	    	this.value = " ";
	    	return false;
    	}
	});

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

	var render = function(todo){
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

	    var li = $('<li />');

	    $(li).attr('id', 'item-' + id).html(itemContent);

	    $(list).append(li);

	};

    $(list).on('click', '.destroy', function(){
    	var li = $(this).closest('li');
    	var id = $(li).attr('id').split('-')[1];

    	
	    id = parseInt(id, 10);
	    // var id = +li.id.split('-')[1];
	    for (var i = 0; i < todos.length; i++) {
	      if (todos[i].id == id) {
	        break;
	      }
	    }
	    // splice
	    todos.splice(i, 1);

    	$(li).remove();
    })
})