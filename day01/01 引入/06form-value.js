function DataBind(opt){
    var obj = opt.data();
    DataBind.vModel(obj);
    DataBind.vText(obj);
}
DataBind.vModel = function(obj){
    
    var inps = document.querySelectorAll('[v-model]');
    for (var i = 0; i < inps.length; i++) {
        var inp = inps[i];
        var attrVal = inp.getAttribute('v-model');;
       inp.value = obj[attrVal];
        
    }
}


DataBind.vText = function(obj){
    
    var oPs =document.querySelectorAll('[v-text]');
    for (var i = 0; i < oPs.length; i++) {
        var oP = oPs[i];
        var attrVal = oP.getAttribute('v-text');;
        oP.innerHTML = obj[attrVal];
        
    }
}