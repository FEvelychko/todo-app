/**
 * Created by Maksym on 7/31/2015.
 */


    (function (window){
        "use strict";

        function EditData(e){
            var that = this;
            var para = document.createElement("p");
            var element = document.getElementById("block");
            if(e.keyCode == 13){
                that.result = document.getElementById("newTodo").value;
                document.getElementById("newTodo").value = "";
                para.appendChild(document.createTextNode(that.result));
                return element.appendChild(para);
            }
        };

        var handler  = document.addEventListener('keyup', EditData);
    }());