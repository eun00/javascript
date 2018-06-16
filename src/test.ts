for(var idx = 1;idx<10;idx++){
   if(idx % 2 ==0){
    console.log(idx);
   }    
}


var arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);

console.log( arr[0] , arr);
console.log(arr.length);

var i:any = 0;
for(i in arr){
    console.log( arr[i])
}

/*
for(;;){}
while(true){} 무한루프
*/

/*
var age:number = 20;
console.log("age == 20 : "+ (age == 20));
console.log("age > 20 : "+ (age > 20));
console.log("age < 20 : "+ (age < 20));
console.log("age >= 20 : "+ (age >= 20));
console.log("age <= 20 : "+ (age <= 20));
console.log("age != 20 : "+ (age != 20));

var age1:number = 10;
var age:number = 20;
console.log(age1==20 || age1 == 20);
console.log(age1==20 && age1 == 20);

if(age == 20){
    if(age1 == 20){
        console.log("age도 age1도 ahen 20입니다.")
    }else{
        console.log("age는 20이지만 age1은 20이 아닙니다.")
    }
}
*/

/*
var n:number = 3;
var f:number = 3.2;
var s:string = 'abc';
var b:boolean = true;

function test():number{
    return 1;
}
function test1():void{
    // return 2;
}

var t1:number = test();
var t2:any = test1();
console.log( t1 , t2);

var n1:number =3;
var n2:number =2;
var result:number =0;
result = n1+n2;
console.log(n1+'+'+n2+'='+result);
result = n1-n2;
console.log(n1+'-'+n2+'='+result);
result = n1*n2;
console.log(n1+'*'+n2+'='+result);
result = n1/n2;
console.log(n1+'/'+n2+'='+result);
result = n1%n2;
console.log(n1+'%'+n2+'='+result);

// 단항연산자
n1++;
console.log('n++ :'+ n1);
n1--;
console.log('n-- :'+ n1);

n1 = 3;
console.log('n1++ =' + n1++);
console.log( n1 )   

console.log(1+'1');
console.log("안녕하세요");
var num = 1;
var num2 = 3;
console.log(num+num2);
var num3:number ;
num3 = 30;
console.log(num3);

if( 1 === '1'){
    console.log('1과 \ 1\은 같습니다.');
}else{
    console.log('1과 \ 1\은 다릅니다.');
}
*/
