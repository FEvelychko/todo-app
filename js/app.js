

    //"use strict";

    var inp = document.getElementById('input');
    var todoList = document.getElementById('todo-list');
    var leftItems = document.getElementById('left-items');
    var menuDiv = document.querySelector('div.menu');
    var childrenToDo = 0;

    function updateValue(){

        return inp.value = "";

    }

    function check(value, li, checkbox, input, btn){

        if(value !== ""){
            li.appendChild(checkbox);
            li.appendChild(input);
            li.appendChild(btn);
            todoList.appendChild(li);
        }

    }

    function deleteValue(){

        todoList.removeChild(this.parentElement);
        showInclDelToDo();
        //for(var x = 0; x < 2; x++){
            //this.parentElement.removeChild(this.parentElement.childNodes[0]);
        //}

    }

    function showInclDelToDo(){

        childrenToDo = todoList.children.length;
        leftItems.innerHTML = Math.floor(childrenToDo) + " items left";
        if(childrenToDo === 0){
            menuDiv.style.display = "none";
        }
        return leftItems;

    }

    function showTotalToDo(){

        childrenToDo = todoList.children.length;
        leftItems.innerHTML = Math.floor(childrenToDo + 1) + " items left";
        return leftItems;

    }

    function addNewToDo(info){

        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        var input = document.createElement('input');
        var btn = document.createElement('button');

        menuDiv.style.display = "block";
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        li.className = "new-li";
        input.className = "add-new-todo";
        btn.className = "btn-deleted";

        btn.innerHTML = "delete";
        input.value = info;
        btn.onclick = deleteValue;
        showTotalToDo();
        check(info, li, checkbox, input, btn);

    }

    function eventHandler(callUpdate){

        var val = inp.value;
        callUpdate();
        addNewToDo(val);

    }

    function inputKeyUp(e){

        e.which = e.which || e.keyCode;
        if(e.which == 13) {
            return eventHandler(updateValue);
        }
        else{
            return false;
        }

    }























    /*btn.addEventListener('click', function(){
        return eventHandler(updateValue);
    }, false);*/