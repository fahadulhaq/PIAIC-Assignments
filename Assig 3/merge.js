var ary1 = [10,20,4,40,60,70];
var ary2 = [1,2,3,4,5,6,7,8,9,10];
var uniqueAry =[];
//var uniqueAry = ary1.concat(ary2);
//console.log(uniqueAry);
//var found = true;

for (var i = 0; i<ary1.length;i++){
        if (ary1>=ary2){
            uniqueAry.push(ary1.concat(ary2));

}
}
console.log(uniqueAry);