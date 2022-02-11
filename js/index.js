const joke = document.querySelector('.joke-text');
const laughBtn=document.querySelector('.laugh-btn');
const norrisImg=document.querySelector('.norris-img');
let ifRuLang = false
const langRu = document.querySelector('.lang_ru');
const langEn = document.querySelector('.lang_en');


const url = 'https://api.icndb.com/jokes/random';

const getData = function () {
  // console.log(`function getData work`)
  if (ifRuLang == true) { 
    // console.log(`lang ru`)
    getQuotesRu()
    } else {
      // console.log(`lang en`)
       getDataEn() }
  }


  async function getDataEn() {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    joke.textContent=data.value.joke;
    ifRuLang = false
    langEn.classList.add('active-lang')
    langRu.classList.remove('active-lang')
    laughBtn.textContent='Make me laugh, Chuck!'
    }
  getDataEn();

  function shakeImg(){
    norrisImg.classList.add('shake-img');
    setTimeout(function(){
      norrisImg.classList.remove('shake-img')
    }, 1000)
  }

laughBtn.addEventListener('click',getData)
laughBtn.addEventListener('click',shakeImg)
//-----------ru lang --------------
async function getQuotesRu() {
  
  const quotesRu = './js/jokes_ru.json'
  const resRu = await fetch(quotesRu);
  const dataRu = await resRu.json(); 
  let randomIndex = Math.floor(Math.random()*dataRu.length);
  let jokeRu = dataRu[randomIndex].joke
  // console.log(jokeRu);
  joke.textContent = jokeRu;
  langRu.classList.add('active-lang')
  langEn.classList.remove('active-lang')
  laughBtn.textContent='Рассмеши меня, Чак!'
  return ifRuLang = true; 
  
}

langRu.addEventListener('click',()=>{ if (ifRuLang) {} else { return getQuotesRu() }})
langEn.addEventListener('click',()=>{ if (!ifRuLang) {} else { return getDataEn() }})



// ========== audio start ============
const audio = document.querySelector('audio');
const slider = document.querySelector('.slider');

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

laughBtn.addEventListener('click',playAudio)

let audioLevel = audio.volume
audio.volume = 0.5


var range = document.querySelector('.slider');

range.addEventListener('change', function () {
    // console.log(this.value)
    audio.volume=(this.value)/100
}, false);

range.addEventListener('input', function () {
    // console.log(this.value)
    audio.volume=(this.value)/100
}, false);
// ========== audio end ============



// ---------- codewars ---------
