

// function createForm() {

//     // Clear existing form fields
//     document.getElementById('formContainer').innerHTML = "";

//     // Get the value of 'n'
//     const n = document.getElementById('nInput').value;
//     num=n;
//     // Create 'n' input fields
//     let k=1;
//     for (let i = 1; i <= 3*n; i++) {
//         const inputField = document.createElement('input');
//         inputField.type = 'text';
//         if((i-1)%3==0)
//             inputField.placeholder = `LHS ${k}`;
//         else if((i-1)%3==1)
//             inputField.placeholder = `Operator ${k}`;
//         else
//             inputField.placeholder = `Value ${k}`;
//         inputField.id = `data${i}`;
        
//         inputField.className = 'formData';
//         inputField.style.width='20%';
        
//         // Append input field to the form container
//         document.getElementById('formContainer').appendChild(inputField);
       
//         if(i%3==0){
//         k++;    
//         const lineBreak = document.createElement('br');
//         document.getElementById('formContainer').appendChild(lineBreak);
//         }
//     }
//     const option = document.createElement('br');
//     document.getElementById('formContainer').appendChild(lineBreak);
//     hd.classList.remove("hide");
   
// }
let numb=0;
let valanu;

let cn=0;
let k=1;
function createForm() {
    cn++;
    var container = document.getElementById('formContainer');
   
    for (var i = 1; i <=3; i++) {
      var input = document.createElement("input");
      input.type = "text";

      if((i-1)%3==0)
        input.placeholder = `LHS ${i}`;
      else if((i-1)%3==1)
        input.placeholder = `Operator ${i}`;
      else
       input.placeholder = `Value ${i}`;
      input.id = `data${k}`;
  
      input.className = 'formData';
      
       container.appendChild(input);
       k=k+1;
      
    }
   
    const option = document.createElement('br');
    container.appendChild(option);

}


let arrayCheck = [];

function submit() {
    console.log(numb,cn);
    document.getElementById('form2Container').innerHTML = "";
    const formDataArray1  = [];
    // Get the value of 'n'
    let n = cn;

    // Create 'n' input fields
    let j=0;
    for (let i = 1; i <= n; i++) {
        // Create label
        const formDataElements = document.getElementsByClassName('formData');
        const formDataArray = Array.from(formDataElements);


        const label = document.createElement('label');
        label.innerText = `Enter ${formDataArray[j].value}`;
        label.for = `data${i}`;
        
        // Create input field
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = `Enter data ${i}`;
        inputField.id = `data${i}`;
        inputField.className = 'formData';
        
        // Append label and input field to the form container
        document.getElementById('form2Container').appendChild(label);
        document.getElementById('form2Container').appendChild(inputField);
        
        // Add line break
        const lineBreak = document.createElement('br');
        document.getElementById('form2Container').appendChild(lineBreak);
    
        // Store input field in an array if needed
        formDataArray1.push(inputField);
        j=j+3;
    }
    
    valanu=document.querySelector('#option').value
    // console.log(valanu.value)


    // document.getElementById('form2Container').appendChild(inputField);
    const submit2 = document.createElement('button');
    document.getElementById('form2Container').appendChild(submit2);
    submit2.innerText="Submit Data";
    submit2.id='sub2';
    const s=document.getElementById("sub2");
    s.addEventListener('click', function check() {
        const formDataElements = document.getElementsByClassName('formData');
        const formDataArray = Array.from(formDataElements);
        let count = 0;
        for (let index = 0; index < formDataArray.length; index += 3) {
            const input_i1 = parseFloat(formDataArray1[count].value);
            const input_i2 = formDataArray[index + 1].value;
            const input_i3 = parseFloat(formDataArray[index + 2].value);
            // Your comparison logic here...
            let n = cn;
            let val;
            if(input_i2=='>'){
                if(input_i1>input_i3){
                    val=1;
                    arrayCheck.push(val);
                }
                else{              
                    val=0;
                    arrayCheck.push(val)
                }
            }

            else if(input_i2=='>='){
                if(input_i1>=input_i3){ 
                    val=1;
                    arrayCheck.push(val);
                }
                else{        
                    val=0;
                    arrayCheck.push(val)
                }
            }

            else if(input_i2=='<'){
                if(input_i1<input_i3){
                    val=1;
                    arrayCheck.push(val);
                }
                else{                
                    val=0;
                    arrayCheck.push(val)
                }
            }

            else if(input_i2=='<='){
                if(input_i1<=input_i3){                 
                    val=1;
                    arrayCheck.push(val);
                }
                else{  
                    val=0;
                    arrayCheck.push(val)
                }
            }

            else if(input_i2=='=='){
                if(input_i1===input_i3){
                    val=1;
                    arrayCheck.push(val);
                }
                else{
                    val=0;
                    arrayCheck.push(val)
                }
            }

            else if(input_i2=='!='){
                if(input_i1!=input_i3){                    
                    val=1;
                    arrayCheck.push(val);
                }
                else{                    
                    val=0;
                    arrayCheck.push(val)
                }
            }

            
            count += 1;
        }
        
    });
}


function countprint(){
    let c0=0;
    let c1=0;
    for(let i=0;i<cn;i++){
        if(arrayCheck[i]===0)
            c0++;
        else
            c1++;
    }
//    console.log(valanu);

   if(valanu==="ALL"){
    // console.log(valanu);
    // console.log(c1);
    if(c1==cn){

        let opt=document.querySelector('#fs')
        opt.innerText=`Success `
    }
    else{
        let opt=document.querySelector('#fs')
        opt.innerText=`fail `
    }
   }

   else if(valanu==="ANY"){
    if(c1>=1){

        let opt=document.querySelector('#fs')
        opt.innerText=`Success `
    }
    else{
        let opt=document.querySelector('#fs')
        opt.innerText=`Fail `
    }
   }



   let debugButton = document.createElement('button');
    debugButton.innerText = 'Debug';
    debugButton.className = 'dbg';
    document.getElementById('de').appendChild(debugButton);

   
    debugButton.addEventListener('click', function () {
        console.log(valanu);
        console.log(numb);
        // Your debug logic here
        let c=0;
        for(let i=0;i<cn;i++){
            let res=null;
            const formDataElements = document.getElementsByClassName('formData');
            const formDataArray = Array.from(formDataElements);
            let para=document.createElement('p');
            para.id='debugText';
            document.getElementById('de').appendChild(para);
            if(arrayCheck[i]==0){
                res='FAIL';
            }
            else{
                res='PASS';
            }
            let strn=formDataArray[c].value + ' : ' + res;
            para.innerText=strn;
            c=c+3;
            document.getElementById("count").disabled = true;
        }
       

    });
   

   
    
}





