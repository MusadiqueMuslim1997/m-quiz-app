var htmlQuiz = [

    {
        que: '1. Who is making the Web standards?',
        opt1: 'Google',
        opt2: 'Microsoft',
        opt3: 'Mozilla',
        opt4: 'World Wide Web',
        ans: 'World Wide Web'
    },

    {
        que: '2. What is the abbreviation of HTML?',
        opt1: 'Hyper Text Markup Language',
        opt2: 'Hyper Info Markup Language',
        opt3: 'Hyper Tend Markup Language',
        opt4: 'Hyper Test Markup Language',
        ans: 'Hyper Text Markup Language'
    }
    ,


    {
        que: '3. Choose the correct HTML element to define important text',
        opt1: 'Strong',
        opt2: 'I',
        opt3: 'B',
        opt4: 'Important',
        ans: 'Important'
    },
    {
        que: '4. In which of the following ways can we create strings in JavaScript?',
        opt1: "'A string'",
        opt2: '"A string"',
        opt3: '`A string`',
        opt4: 'All of the above',
        ans: 'All of the above'
    },


    {
        que: '5. How to convert a string str to lowercase characters?',
        opt1: 'str.lower()',
        opt2: 'str.toLower()',
        opt3: 'str.toLowerCase()',
        opt4: 'None',
        ans: 'str.toLowerCase()'
    },
    {
        que: '6. var str = "I love cats!";  console.log(str.indexOf("cat"));',
        opt1: '6',
        opt2: '7',
        opt3: '-1',
        opt4: '8',
        ans: '7'
    },
    {
        que: '7. How can we extract "Pizza" from the string str="Pizza Lover"?',
        opt1: 'str.slice(0, 4)',
        opt2: 'str.slice(0, 5)',
        opt3: 'str.slice(4, 0)',
        opt4: 'str.slice(5, 0)',
        ans: 'str.slice(0, 5)'
    },
    {
        que: '8. What does str.charAt(1) return for the string str = "Hello"?',
        opt1: '"H"',
        opt2: '"e"',
        opt3: '"l"',
        opt4: 'undefined',
        ans: '"e"'
    },
    {
        que: '9. Suppose that str is equal to the string "Mango Apple  Orange". What will str.split() return?',
        opt1: '["Mango", "Apple", "Orange"]',
        opt2: '["Mango", "Apple", "", "Orange"]',
        opt3: '["Mango Apple  Orange"]',
        opt4: 'All of the above',
        ans: '["Mango", "Apple", "Orange"]'
    },
    {
        que: '10. The external JavaScript file must contain the <script> tag.',
        opt1: 'True',
        opt2: 'False',
        opt3: 'All of the above',
        opt4: 'None of the above',
        ans: 'False'
    },
]

let questionCount = 0;
let score = 0;

let question = document.getElementById('question');
let input_1 = document.getElementById('option1');
let input_2 = document.getElementById('option2');
let input_3 = document.getElementById('option3');
let input_4 = document.getElementById('option4');
let label_1 = document.getElementById('value-1');
let label_2 = document.getElementById('value-2');
let label_3 = document.getElementById('value-3');
let label_4 = document.getElementById('value-4');
let answers = document.getElementsByName('answer');
let nextBtn = document.getElementById('next');





let rander = () => {
    question.innerHTML = htmlQuiz[questionCount].que;
    label_1.innerHTML = htmlQuiz[questionCount].opt1;
    label_2.innerHTML = htmlQuiz[questionCount].opt2;
    label_3.innerHTML = htmlQuiz[questionCount].opt3;
    label_4.innerHTML = htmlQuiz[questionCount].opt4;
    console.log(htmlQuiz[questionCount].opt4);


}


let deSelect = () => {
for(let i = 0; i < answers.length; i++){
    answers[i].checked = false;
}
}

let next = () => {



    if (questionCount < htmlQuiz.length - 1) {
        questionCount++
        rander()
        deSelect()
    }
}

nextBtn.addEventListener('click', next)



rander()

