'use strict'

{ const checkQ = [
    {
     question: 'サイリウムは持ちましたか？',
     which: [
        'はい',
        'いいえ'
    ],
     Best:  'はい' 
     },

    {
     question: '財布は持ちましたか？',
     which: [
        'はい',
        'いいえ'
    ],
     Best:  'はい' 
     },

    {
     question: 'モバイルバッテリーは持ちましたか？',
     which: [
        'はい',
        'いいえ'
    ],
     Best:  'はい' 
     },

    {
     question: 'チケットは持ちましたか？',
     which: [
        'はい',
        'いいえ'
    ],
     Best:  'はい' 
     }
]



let checkLength = checkQ.length;
// checkLength++;
let questionCount = 0;
// questionCount++;

const start = document.getElementById('start');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');
const yes =document.getElementById('yes');
const no =document.getElementById('no');
const mg =document.getElementById('mg');
const p = document.getElementById('question-sentence');
const next =document.getElementsByClassName('next')[0];
const finish = document.getElementById('finish');

// チェック開始　関数
const clickStart = () =>{
    start.addEventListener('click',()=>{
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
        p.textContent = checkQ[questionCount].question;
        questionCount++;

    });
}

clickStart();



// はいを選んだ場合の処理

const clickYes = ()=>{
        
    yes.addEventListener('click',()=>{
        if(questionCount < checkLength){
            p.textContent = checkQ[questionCount].question;
            questionCount++;
        } else{
            finish.classList.remove('hidden');
            finish.classList.remove('hidden');}
            
        });
    }

    clickYes();

    // いいえを選んだ場合の処理
    
    function clickNo(){
        no.addEventListener('click',()=>{
            mg.classList.remove('hidden');
            mg.classList.remove('hidden')
        });
    }

    clickNo();


    // 次へを選んだ場合の処理
    
     function clickNext(){
         next.addEventListener('click', ()=>{
             mg.classList.add('hidden');
             mg.classList.add('hidden')
            yes.click();
        })
     }

     clickNext();


    //  終了させる処理

     　　function clickEnd() {
        
        finish.addEventListener('click', () => {
            window.location.reload();
         })
        }

        clickEnd();

        }