

let n1=10;
let s1='4'

if(n1>s1){
    console.log(`success`);
}


let month=5;
switch(month){
    case  1:
        console.log('January');
        break;
    case  2:
        console.log('February');
        break;
    case  3:
        console.log('March');
        break;
    case  4:
        console.log('April');
        break;
    case  5:
        console.log('May');
        break;
    case  6:
        console.log('June');
        break;
    case  7:
        console.log('July');
        break;
    case  8:
        console.log('Aug');
        break;
    case  9:
        console.log('Sept');
        break;
    case  10:
        console.log('Oct');
        break;
    case  11:
        console.log('Nov');
        break;
    case  12:
        console.log('Dec');
        break;
    default :
        console.log('Invalud month number');
        break;
}

// Falsy value

// false, 0, -0, BigInt 0n, "", null, undefinedm NaN

//  Nullish Coalescing Operator (??):   null undefined

let num=null ?? undefined ?? 12 ?? 32;//this operator return first Not null or not undefined value
console.log(num);