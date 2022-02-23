const tabsBtn = document.querySelectorAll('.link');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;

        tabsBtn.forEach(function(item) {
            item.classList.remove('active');
        })
        currentBtn.classList.add('active');
    })
})

//  ==================== first rus ====================

const trenCardFirstRus = document.querySelector('.first_rus');
const modalFirstRus = document.querySelector('.modal_rus_first');

trenCardFirstRus.addEventListener('click', () => {
    modalFirstRus.classList.add('open');
})
modalFirstRus.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalFirstRus) {
        modalFirstRus.classList.remove('open');
    }
})


const modalLinksFirstRus = document.querySelectorAll('.title_first_rus');
const modalYoutubeFirstRus = document.querySelector('.youtube_first_rus');
const modalSubtitleFirstRus = document.querySelector('.subtitle_first_rus');

modalLinksFirstRus.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksFirstRus.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeFirstRus.src = 'https://www.youtube.com/embed/nfYWfx8kceI';


const dataFirstRus = [
    {
        video: 'https://www.youtube.com/embed/nfYWfx8kceI',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
    {
        video: 'https://www.youtube.com/embed/QRJ-q027RZQ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
    {
        video: 'https://www.youtube.com/embed/4fFu4U3QCk8',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
    {
        video: 'https://www.youtube.com/embed/KwMEPVtM2j0',
        text: '',
    },
    {
        video: 'https://www.youtube.com/embed/WDmq4XzSDbI',
        text: '',
    },
    {
        video: 'https://www.youtube.com/embed/xYd9a6sJ5Cs',
        text: '',
    },
    {
        video: 'https://www.youtube.com/embed/wygljrCKTmE',
        text: '',
    },
    {
        video: 'https://www.youtube.com/embed/qMP-NCbu1eE',
        text: '',
    },
    {
        video: 'https://www.youtube.com/embed/W18FrSETfAo',
        text: '',
    },
    {
        video: 'https://www.youtube.com/embed/FDy2NOLOnkk',
        text: '',
    },
    {
        video: 'https://www.youtube.com/embed/wi8XKM-eNoE',
        text: '',
    },
    {
        video: 'https://www.youtube.com/embed/gNScroCQdTY',
        text: '',
    },
]


modalLinksFirstRus.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeFirstRus);
        modalYoutubeFirstRus.src = dataFirstRus[i].video;
        modalSubtitleFirstRus.textContent = dataFirstRus[i].text;
    })
})

//  ==================== second rus ====================

const trenCardSecondRus = document.querySelector('.second_rus');
const modalSecondRus = document.querySelector('.modal_rus_second');

trenCardSecondRus.addEventListener('click', () => {
    modalSecondRus.classList.add('open');
})
modalSecondRus.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalSecondRus) {
        modalSecondRus.classList.remove('open');
    }
})

const modalLinksSecondRus = document.querySelectorAll('.title_second_rus');
const modalYoutubeSecondRus = document.querySelector('.youtube_second_rus');
const modalSubtitleSecondRus = document.querySelector('.subtitle_second_rus');

modalLinksSecondRus.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksSecondRus.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeSecondRus.src = 'https://www.youtube.com/embed/AY7cFbVfJ7g';


const dataSecondRus = [
    {
        video: 'https://www.youtube.com/embed/AY7cFbVfJ7g',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
    {
        video: 'https://www.youtube.com/embed/OC8tK4uWtoY',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
    {
        video: 'https://www.youtube.com/embed/8SqmZCY5jMA',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
    {
        video: 'https://www.youtube.com/embed/udQjTdl0C5s',
        text: '',
    },
    {
        video: 'https://www.youtube.com/embed/b-J7F2kvyUM',
        text: '',
    },
]


modalLinksSecondRus.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeSecondRus);
        modalYoutubeSecondRus.src = dataSecondRus[i].video;
        modalSubtitleSecondRus.textContent = dataSecondRus[i].text;
    })
})

//  ==================== third rus ====================

const trenCardThirdRus = document.querySelector('.third_rus');
const modalThirdRus = document.querySelector('.modal_rus_third');

trenCardThirdRus.addEventListener('click', () => {
    modalThirdRus.classList.add('open');
})
modalThirdRus.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalThirdRus) {
        modalThirdRus.classList.remove('open');
    }
})

const modalLinksThirdRus = document.querySelectorAll('.title_third_rus');
const modalYoutubeThirdRus = document.querySelector('.youtube_third_rus');
const modalSubtitleThirdRus = document.querySelector('.subtitle_third_rus');

modalLinksThirdRus.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksThirdRus.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeThirdRus.src = 'https://www.youtube.com/embed/Zx0iw9mAz_k';


consThirdThirddRus = [
    {
        video: 'https://www.youtube.com/embed/Zx0iw9mAz_k',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
]


modalLinksThirdRus.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeThirdRus);
        modalYoutubeThirdRus.src = dataThirdRus[i].video;
        modalSubtitleThirdRus.textContent = dataThirdRus[i].text;
    })
})

//  ==================== fourth rus ====================

const trenCardFourthRus = document.querySelector('.fourth_rus');
const modalFourthRus = document.querySelector('.modal_rus_fourth');

trenCardFourthRus.addEventListener('click', () => {
    modalFourthRus.classList.add('open');
})
modalFourthRus.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalFourthRus) {
        modalFourthRus.classList.remove('open');
    }
})

const modalLinksFourthRus = document.querySelectorAll('.title_fourth_rus');
const modalYoutubeFourthRus = document.querySelector('.youtube_fourth_rus');
const modalSubtitleFourthRus = document.querySelector('.subtitle_fourth_rus');

modalLinksFourthRus.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksFourthRus.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeFourthRus.src = 'https://www.youtube.com/embed/yv5fXUkHiYk';


const dataFourthRus = [
    {
        video: 'https://www.youtube.com/embed/yv5fXUkHiYk',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
    {
        video: 'https://www.youtube.com/embed/meaR8Kb5WEc',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
]


modalLinksFourthRus.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeFourthRus);
        modalYoutubeFourthRus.src = dataFourthRus[i].video;
        modalSubtitleFourthRus.textContent = dataFourthRus[i].text;
    })
})