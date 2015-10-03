

    //"use strict";

    var inp = document.getElementById('input');
    var todoList = document.getElementById('todo-list');
    var leftItems = document.getElementById('left-items');
    var menuDiv = document.querySelector('div.menu');
    var clear = document.getElementById('clear');
    var childrenToDo = 0;
    var kozel  =  0;

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
        //debugger;
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

    function clearCurrentValue(x){
        //debugger;
        //var bla = this;
        todoList.removeChild(x.parentElement);
        showInclDelToDo();

    }

    function checkSubmit(){
        //debugger;
        //childrenToDo = todoList.children.length;
        var x = this;
        if(x.checked === true) {
            clear.addEventListener('click', function(x){
                return clearCurrentValue(x);
            }.bind(checkSubmit, x), false);

            /*kozel += 1;
            leftItems.innerHTML = Math.floor((childrenToDo + 1) - kozel) + " items left";*/
        }
            /*for(var i = 0; i <= this.parentElement.children.length; i++){
                if(this.parentElement.children[i].checked === true){
                    kozel += 1;
                    leftItems.innerHTML = Math.floor((childrenToDo + 1) - kozel) + " items left";
                }
                else{
                    kozel -= 1;
                    leftItems.innerHTML = Math.floor((childrenToDo + 1) - kozel) + " items left";
                }
            }*/

        //}

    }

    function addNewToDo(info){
        //debugger;

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

        //clear.onclick
        checkbox.onclick = checkSubmit;
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

    clear.addEventListener('click', deleteValue, false);

























    /*btn.addEventListener('click', function(){
        return eventHandler(updateValue);
    }, false);*/