
	var addButton = document.getElementById('add');
	var inputTask = document.getElementById('new-task');
	var tasks = document.getElementById('tasks');

	function createElement(task) { 

		var listItem = document.createElement('li');
		var checkbox = document.createElement('button');
	    var deleteButton = document.createElement('button');
	    label = document.createElement('label');

	    checkbox.className = 'material-icons checkbox';
	    checkbox.innerHTML = '<i class = "material-icons">check_box_outline_blank</i>';
	    checkbox.style.cssText = "position: absolute; margin-top: 12px; margin-left: -180px;border: none; background-color: white;"; 

	    label.innerText = task;
	    label.style.cssText = "position: absolute; margin-top: 14px;font-size: 18px; margin-left: -100px;";

	    deleteButton.className = "material-icons delete";
	    deleteButton.innerHTML = "<i class = 'material-icons'>delete</i>";
	    deleteButton.style.cssText = "position: absolute; margin-top: 12px; margin-left: 140px; color: red; border: none; background-color: white; width: 30px";
	    
	    listItem.appendChild(checkbox);
	    listItem.appendChild(label);
	    listItem.appendChild(deleteButton);

	    return listItem;
	}

	function addTask(){
		if(inputTask.value){
			var listItem = createElement(inputTask.value);
			tasks.appendChild(listItem);
			tasksEvents(listItem, unfinishTask);
			inputTask.value =  "";
		} else {
			alert("You need to add something!");
		}	
	}
	addButton.onclick = addTask;  

	function deleteTask(){
		var listItem = this.parentNode;
	    var ul = listItem.parentNode;
	    ul.removeChild(listItem);
	}

	function finishTask(){
		var listItem = this.parentNode;
		var checkbox = listItem.querySelector('button.checkbox');
		var labelCheck = listItem.querySelector('label');

		checkbox.className = 'material-icons checkbox';
		checkbox.innerHTML = '<i class = "material-icons">check_box</i>';
		labelCheck.style.textDecoration = "line-through";
		listItem.style.background = "#B9B9B9";

        tasksEvents(listItem,unfinishTask);
	}
	function unfinishTask(){
		var listItem = this.parentNode;
		var checkbox = listItem.querySelector('button.checkbox');
		var labelCheck = listItem.querySelector('label');

		checkbox.className = 'material-icons checkbox';
		checkbox.innerHTML = '<i class = "material-icons">check_box_outline_blank</i>';
		labelCheck.style.textDecoration = "none";
		listItem.style.background = "white";

		tasksEvents(listItem, finishTask);
	}

	function tasksEvents(listItem, checkboxEvent){
	    var checkbox = listItem.querySelector('button.checkbox');
	    var deleteButton = listItem.querySelector('button.delete');
	    
	    checkbox.onclick = checkboxEvent;
	    deleteButton.onclick = deleteTask;
	}

