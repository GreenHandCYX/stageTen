function DataBind(opt){
    var obj = opt.data();
    DataBind.vModel(obj);
    DataBind.vText(obj);
    DataBind.vModelChange(obj);
}

//将model的数据渲染到视图层
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

//监听input的输入实现视图层到model的双向数据绑定
DataBind.vModelChange = function(obj){
    var inps = document.querySelectorAll('[v-model]');
    for (var i = 0; i < inps.length; i++) {
        var inp = inps[i];
        inp.oninput = function(e){
            var curVal = e.target.value;
            var attrVal = e.target.getAttribute('v-model');
            obj[attrVal] =curVal;
            DataBind.vText(obj);
        }   
    }
}