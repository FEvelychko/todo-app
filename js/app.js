/**
 * Created by Maksym on 7/31/2015.
 */

    (function () {
        "use strict";

        function Todo(){
            this.editData = new EditData(this.addTemplate);
            this.addTemplate = new AddTemplate();
        };
        var todo = new Todo();

    }());