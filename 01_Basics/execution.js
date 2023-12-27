//+++++++++++++ HOW JS SCRIPT RUNS +++++++++++++++++
/*
    **** JS Execution Context *******

JS is single threaded 

{}  //  global execution context refered by this keyword

Global execution Context
Function Execution Context
eval Execution Contest

JS runs in two phases

1.  Memory creation phase
2.  Execution Phase

let var1=10;
let var2=5;

function add(num1,num2){
    return (num1+num2);
}

let result1=add(var1,var2)
let result2=add(10,2)

For Executing this program these process done

1.  Global execution phase is created

2.  Memory phase

Initially all variable are decleared with undefined value for var1 and var2
and then function is defined and result1 and result are assigned undefined 

3. Execution Phase

Here, var1 and var2 assigned 10 and 5 value respectively
function definition is skipped 

At line of --let result1=add(var1,var2)
add function is called and new executional context is created to call function and new then variable environment and execution thread is created
And then phase 2 and 3 is done for called function
At the line of return value is return to global execution and then this execution context of function is get deleted

and for next line ---  let result2=add(10,2)
These process for previous function call id made done

    ---------   Call Stack   --------------

    Function call stack follow Last In First Out(LIFO) 

*/