exports.charCount = function(string) {
    let obj={}
    let resArr;
    string= string.toString().replace(/[^a-zA-Z0-9]/g,"").toLowerCase().split("").sort()
    string.forEach(value => {
        if (obj[value]){
        obj[value] +=1
    }else{
        obj[value]=1
    }})
    resArr= Object.entries(obj)
    resArr.sort((a, b)=> {
    return b[1] - a[1]
})
    return resArr
};
