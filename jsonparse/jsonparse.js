function change(){
    // 获取输入
    var value = document.getElementById("textarea").value;
    try {
        // 解析
        var obj = JSON.parse(value);
        console.log(obj);
        // 打印
        var string = JSON.stringify(obj)
        document.getElementById("output").innerHTML = string;
    } catch (e){
        // 打印
        console.log(e);
        document.getElementById("output").innerHTML = e.toString();
    }
}