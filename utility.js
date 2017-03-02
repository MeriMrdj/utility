var log, byId, select, selectAll;

log = function log(val){ 
};

byId = function byId(id) {
    "use stric";
    return document.getElementById(id);
};

select = function select(sCSS){
    "use strict";
    return document.querySelector(sCSS);   
};

selectAll = Function selectAll(sCSS) {
    "use strict";
    return document.querySelectorAll(sCSS);  
};