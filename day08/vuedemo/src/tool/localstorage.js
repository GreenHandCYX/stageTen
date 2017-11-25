//es6模块，处理本地缓存
const KEY = 'KEY';
export function getItem(){
    return JSON.parse(localStorage.getItem(KEY) || '[]');
}
export function setItem(data){
      // 先获取本地数据库中的数据
       //将相同id的数据合并
    var array = getItem();
    var kaiGuan = true;
    if(array.length ==0){
        array.push(data)
    }else{
        for(var i=0;i<array.length;i++){
            var item = array[i];
            // console.log(item.goodsid, data.goodsid)
            if(item.goodsid == data.goodsid){
                item.count += data.count;
                kaiGuan =false;
            }
        }
        if(kaiGuan){
                array.push(data)
        }
    }
    
   
    //再存入本地缓存
    localStorage.setItem(KEY,JSON.stringify(array))
}