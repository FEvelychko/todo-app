

    //"use strict";

    //var btn = document.getElementById('btn');
    var input = document.getElementById('input');
    var block = document.getElementById('block');

    function updateValue(){
        return input.value = "";
    }

    function check(value, p, div){
        if(value === ""){
            return false;
        }
        else{
            div.appendChild(p);
            block.appendChild(div);
        }
    }

    function addNewToDo(info){
        var div = document.createElement('div');
        var p = document.createElement('input');
        div.className = "new-block-todo";
        p.className = "new-todo";
        p.value = info;
        check(info, p, div);
    }

    function eventHandler(callUpdate){
        var val = input.value;
        console.log(val);
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













