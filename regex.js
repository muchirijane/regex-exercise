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
    //janetracy@SpeechGrammarList.com
    const regex = /\(?(\d{3}\)?)[-.](\d{3})[\-\.](\d{4})/g;
    const str = textarea.value;
    console.log(str);


    const results = str.match(regex);
     console.log(results);
     
    results.forEach(result =>{
        let html = '';
        html += `
          
            <li>${result}</li>
        `;   

        resultText.innerHTML += html;
    })


}

button.addEventListener('click', () => {
    resultText.innerHTML += `<P>This is what I matched</P>`

    regexPattern();
})