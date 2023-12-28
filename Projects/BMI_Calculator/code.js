
const form=document.querySelector('form');
const results=document.querySelector('#results');

form.addEventListener('submit',(e)=>{
    results.innerHTML='';
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    console.log(typeof height);
    console.log(height);
    console.log(typeof weight);
    console.log(weight);

    if(height==='' || height < 0 || isNaN(height)){
        results.appendChild(document.createTextNode(`Invalid ${height}`));
    } else if(weight==='' || weight < 0 || isNaN(weight)){
        results.appendChild(document.createTextNode(`Invalid ${weight}`));
    } else{
            const bmi=(weight/((height*height)/10000)).toFixed(2);
            // const bmi=height.weight
            let tmp;
            if(bmi<18.6){
                 tmp='<span>Under Weight</span>'
            } else if(bmi<24.9) {
                 tmp='<span> Normal range </span>'
            } else {
                 tmp='<span> Overweight </span>'
            }
            
            results.innerHTML= `<span>BMI Value = ${bmi}</span> <br>${tmp}`;
            console.log(bmi);
    }
    // document.querySelector('input[type="Text"]').innerHTML='';
});