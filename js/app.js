

    var btn = document.getElementById('btn');
    var input = document.getElementById('input');
    var block = document.getElementById('block');

    function updateValue(){
        return input.value = "";
    }

    function addNewToDo(){
        var p = document.createElement('p');
        p.innerHTML = "asasas";
        block.appendChild(p);
    }

    function eventHandler(callUpdate){
        var val = input.value;
        console.log(val);
        callUpdate();
        addNewToDo();
    }

    btn.addEventListener('click', function(){
        return eventHandler(updateValue);
    }, false);
