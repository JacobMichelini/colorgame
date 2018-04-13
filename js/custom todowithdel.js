console.log("connected")

var todos = ["zeroth", "first", "second", "third", "fourth", "fifth"];

var input = prompt("input command:");

function listTodos() {
	console.log("***");
		todos.forEach(function(li, i){
			console.log(i + ". " + li);
		});
		console.log("***");
}

function addTodo() {
	//ask for new todo
	var newTodo = prompt("enter new todo");
	//add new todo to array
	todos.push(newTodo);
	console.log("added " + newTodo);
}

function delTodo() {
	var index = prompt("# of item to delete");
		console.log(todos[index] + " deleted");
		todos.splice(index, 1);
}

while(input !== "quit") {
	//handle input
	if(input === "list") {
		listTodos();
	
	} else if (input === "new") {
		addTodo();
		listTodos();

	} else if (input === "del") {
		delTodo();
		listTodos();
	}

	input = prompt("input command")
}

console.log("app quit")