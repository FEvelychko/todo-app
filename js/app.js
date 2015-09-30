

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
        this.style.backgroundColor = "green";
        this.parentElement.removeChild(this.parentElement.children);

        //console.log(this.parentElement.children[0]);
    }

    function addNewToDo(info){
        var li = document.createElement('li');
        var input = document.createElement('input');
        var btn = document.createElement('button');

        li.className = "new-li";
        input.className = "add-new-todo";
        btn.className = "btn-deleted";

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













