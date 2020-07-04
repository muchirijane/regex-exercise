/*
const regex = /^(\(?\d{3}\)?)[-.](\d{3})[\-\.](\d{4})$/g;

const str = '(789)-876-4378';
const str1 = '899-876-4378';
const str2 = '219.876.4378';

const replacement = '$1-xxx-xxxx';
const result = str.replace(regex, replacement);

console.log(result);
*/
/*
const regex = /^\[(.*?)\](\(.*?\))$/;
const str = '[Google](http://www.google.com)';


const replacement = '<a href ="$2">$1</a>';

const result = str.replace(regex, replacement);

console.log(result);
*/
/* 
//janetracy@SpeechGrammarList.com
    const regex = /(\w+)@(\w+)\.([a-z]{2,8})([a-z]{2,8})?/;
    const str = textarea.value;
    console.log(str);


    //const replacement = ;

    const result = regex.test(str);
    console.log(result);
*/
const button = document.querySelector('button');
const textarea = document.querySelector('textarea');
const resultText = document.querySelector('.result-text');

function regexPattern (){
    
    const regex = /(\W+)/g;
    const str = textarea.value;


    const results = str.split(regex);
    console.log(results);
    //resultText.innerHTML = results;



    
  
     
    results.forEach(result =>{
        if(result != null){
            // let html = '';
            // html += `
            //     <span>${result}</span>
            // `; 
            
            // resultText.innerHTML += html;
            const span = document.createElement('span');
            span.innerHTML = result;
            resultText.appendChild(span);
            //span.style.backgroundColor = 'bisque';



            span.addEventListener ('mouseover', () => {
                const randomColour = Math.floor(Math.random()* 255);
                const randomColour1 = Math.floor(Math.random()* 255);
                const randomColour2 = Math.floor(Math.random()* 255);
                span.style.backgroundColor = `rgba(${randomColour}, ${randomColour1}, ${randomColour2})`; 
                span.textContent = 'Yesss!'               
            })

        }        
        
    })


};

button.addEventListener('click', () => {
    resultText.innerHTML += `<p class ='text-info'>This is what I matched</P>`;

    regexPattern();
})