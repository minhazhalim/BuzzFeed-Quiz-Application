const questionDisplay = document.querySelector('#question-display');
const answerDisplay = document.querySelector('#answer-display');
const questions = [
     {
          id: 0,
          text: 'Pick a Vacation Destination',
          answers: [
               {
                    text: 'New York',
                    image: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
                    alt: 'Photo of the Empire State Building During Daytime',
                    credit: 'Oliver Niblett',
               },
               {
                    text: 'Austin',
                    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
                    alt: 'Time-Lapse Photography Car Lights on Bridge',
                    credit: 'Carlos Alfonso',
               },
               {
                    text: 'Portland',
                    image: 'https://images.unsplash.com/photo-1541457523724-95f54f7740cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydGxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
                    alt: 'High-Rise Buildings',
                    credit: 'Elena Kuchko',
               },
               {
                    text: 'New Orleans',
                    image: 'https://images.unsplash.com/photo-1542396817-804fa5be8ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8JTIybmV3JTIwb3JsZWFucyUyMnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
                    alt: 'Road With People and House',
                    credit: 'Joao Francisco',
               },
          ],
     },
     {
          id: 1,
          text: 'Pick Some Food',
          answers: [
               {
                    text: 'Pizza',
                    image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
                    alt: 'Pepperoni Pizza',
                    credit: 'Alan Hardman',
               },
               {
                    text: 'Sandwich',
                    image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
                    alt: 'Ham Sandwich on White Surface',
                    credit: 'Eaters Collective',
               },
               {
                    text: 'Pasta',
                    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
                    alt: 'Pasts in Tomato Sauce',
                    credit: 'Mgg Vitchakorn',
               },
               {
                    text: 'Hamburger',
                    image: 'https://images.unsplash.com/photo-1635552709208-41a3d96f7bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFtYnVyZ3VlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
                    alt: 'Hamburger',
                    credit: 'SK',
               },
          ],
     },
     {
          id: 2,
          text: 'Pick a Home:',
          answers: [
               {
                    text: 'Traditional',
                    image: 'https://images.unsplash.com/photo-1521892125404-76a993e24362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZGl0aW9uYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
                    alt: 'Focus Photography of Building Windows',
                    credit: 'Burgess Milter',
               },
               {
                    text: 'Modern',
                    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVybnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
                    alt: 'Low Angle View of Building',
                    credit: 'Brandon Giggs',
               },
               {
                    text: 'House',
                    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
                    alt: 'Trees Beside White House',
                    credit: 'Phil Hearing',
               },
               {
                    text: 'Mountains',
                    image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
                    alt: 'Brown Wooden Cabin Infront of Forest',
                    credit: 'Eulauretta',
               },
          ],
     },
];
const answers = [
     {
          combination: ['New York','Pizza','Traditional'],
          text: 'Blue Cheese',
          image: "https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
          alt: 'Blue Cheese',
     },
     {
          combination: ['Austin','Pasta','Modern'],
          text: 'Cheddar',
          image: "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
          alt: 'Cheddar Cheese',
     },
     {
          combination: ['Portland','Sandwich','Mountains'],
          text: 'Feta',
          image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
          alt: 'Blue Cheese',
     },
     {
          combination: ['New York','Pizza','Traditional'],
          text: 'Blue Cheese',
          image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
          alt: 'Feta Cheese',
     },
     {
          combination: ['New Orleans','Hamburger','House'],
          text: 'Halloumi',
          image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVybnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
          alt: 'Halloumi',
     },
]
const unAnsweredQuestions = [];
const chosenAnswers = [];
const showAnswer = () => {
     let result;
     answers.forEach(answer => {
          if(chosenAnswers.includes(answer.combination[0]) + chosenAnswers.includes(answer.combination[1]) + chosenAnswers.includes(answer.combination[2])){
               result = answer;
               return;
          }else if(!result){
               result = answers[0];
          }
     })
     const div = document.createElement('div');
     div.classList.add('result-block');
     const h3 = document.createElement('h3');
     h3.textContent = result.text;
     const img = document.createElement('img');
     img.setAttribute('src',result.image);
     img.setAttribute('alt',result.alt);
     div.append(h3,img);
     answerDisplay.append(div);
     const answerBlock = document.querySelectorAll('.answer-block');
     Array.from(answerBlock).forEach(answerBlocks => {
          answerBlocks.replaceWith(answerBlocks.cloneNode(true));
     });
};
const disableQuestionBlock = (questionId,chosenAnswer) => {
     const currentQuestionBlock = document.getElementById(questionId + '-questions');
     Array.from(currentQuestionBlock.children).forEach(questionBlock => {
          if(questionBlock.children.item(1).innerText !== chosenAnswer){
               questionBlock.style.opacity = '50%';
          }
     });
};
const handleClick = (questionId,chosenAnswer) => {
     if(unAnsweredQuestions.includes(questionId)){
          chosenAnswers.push(chosenAnswer);
     }
     const itemToRemove = unAnsweredQuestions.indexOf(questionId);
     if(itemToRemove > -1){
          unAnsweredQuestions.splice(itemToRemove,1);
     }
     disableQuestionBlock(questionId,chosenAnswer);
     const lowestQuestionId = Math.min(...unAnsweredQuestions);
     location.href = '#' + lowestQuestionId;
     if(!unAnsweredQuestions.length){
          location.href = '#answer';
          showAnswer();
     }
};
const populateQuestions = () => {
     questions.forEach(question => {
          const div1 = document.createElement('div');
          div1.id = question.id;
          div1.classList.add('title-block');
          const h2 = document.createElement('h2');
          h2.textContent = question.text;
          div1.append(h2);
          questionDisplay.append(div1);
          const div2 = document.createElement('div');
          div2.id = question.id + '-questions';
          div2.classList.add('answer-options');
          unAnsweredQuestions.push(question.id);
          question.answers.forEach(answer => {
               const div3 = document.createElement('div');
               div3.classList.add('answer-block');
               div3.addEventListener('click',() => handleClick(question.id,answer.text));
               const img = document.createElement('img');
               img.setAttribute('src',answer.image);
               img.setAttribute('alt',answer.alt);
               const h3 = document.createElement('h3');
               h3.textContent = answer.text;
               const p = document.createElement('p');
               const a1 = document.createElement('a');
               a1.setAttribute('href',answer.credit);
               a1.textContent = answer.credit;
               const a2 = document.createElement('a');
               a2.textContent = 'Unsplash';
               a2.setAttribute('src','https://www.unsplash.com');
               p.append(a1,' to ',a2);
               div3.append(img,h3,p);
               div2.append(div3);
          });
          questionDisplay.append(div2);
     });
};
populateQuestions();