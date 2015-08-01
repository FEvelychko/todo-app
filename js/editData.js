/**
 * Created by Maksym on 7/31/2015.
 */


    (function (){
        //"use strict";

            function EditData(addTemplate){
                var that = this;
                that.addTemplate = addTemplate;
                var template = document.createElement("div");
                var element = document.getElementById("block");
                if(event.keyCode == 13){
                    template.setAttribute('class', 'newblock');
                    template.innerHTML = '<p id = "textInput" class = "textInput"></p>';
                    that.result = document.getElementById("newTodo").value;
                    template.appendChild(document.createTextNode(that.result));
                    document.getElementById("newTodo").value = "";
                    return element.appendChild(template);
                }
            };

            var handler  = document.addEventListener('keyup', EditData);
        }());








