let a=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
let b = [];
let len = a.length;
for (let i=0; i < len; i++) {
if (b.indexOf(a[i])=== -1){
b.push(a[i]);    
}
}
console.log(b);
