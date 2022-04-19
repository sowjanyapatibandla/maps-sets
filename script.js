console.log("working");

//Problem--> 1

let me  = new Set();
function removeDuplicate(str,n){
    for(let v=0;v<str.length;v++){
         me.add(str[v]);
    }
    let str1 = " ";
    for(let val of me.values()){
          str1+= val;
    }
    console.log(str1);
}
removeDuplicate("aabbccddeeff")


//Problem--> 2



let str = "abcadeecfb";
let p = str.split("");
let newMap = new Map();

for (let i = 0; i < p.length; i++) {
    let count = 1;
    for (let b = i + 1; b < p.length; b++) {
        if (p[i] === p[b]) {
            count++;
            p.splice(b, 1);
            b--;
        }
    }
    newMap.set(p[i], count);
}
for (let [key, value] of newMap.entries()) {
    console.log(key + "=" + value);
}