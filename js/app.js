

    //"use strict";

    var inp = document.getElementById('input');
    var todoList = document.getElementById('todo-list');

    function updateValue(){
        return inp.value = "";
    }

    function check(value, li, input, btn){
        if(value !== ""){
            li.appendChild(input);
            li.appendChild(btn);
            todoList.appendChild(li);
        }
    }

    function deleteValue(){
        //debugger;
        this.style.backgroundColor = "red";
        todoList.removeChild(this.parentElement);
        //for(var x = 0; x < 2; x++){
            //this.parentElement.removeChild(this.parentElement.childNodes[0]);
        //}
    }

    function addNewToDo(info){
        var li = document.createElement('li');
        var input = document.createElement('input');
        var btn = document.createElement('button');

        li.className = "new-li";
        input.className = "add-new-todo";
        btn.className = "btn-deleted";

        btn.innerHTML = "delete";
        input.value = info;
        btn.onclick = deleteValue;
        check(info, li, input, btn);

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













