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

//  ==================== first ukr ====================

const trenCardFirstUkr = document.querySelector('.first_ukr');
const modalFirstUkr = document.querySelector('.modal_ukr_first');

trenCardFirstUkr.addEventListener('click', () => {
    modalFirstUkr.classList.add('open');
})
modalFirstUkr.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalFirstUkr) {
        modalFirstUkr.classList.remove('open');
    }
})


const modalLinksFirstUkr = document.querySelectorAll('.title_first_ukr');
const modalYoutubeFirstUkr = document.querySelector('.youtube_first_ukr');
const modalSubtitleFirstUkr = document.querySelector('.subtitle_first_ukr');

modalLinksFirstUkr.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksFirstUkr.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeFirstUkr.src = 'https://www.youtube.com/embed/nfYWfx8kceI';


const dataFirstUkr = [
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


modalLinksFirstUkr.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeFirstUkr);
        modalYoutubeFirstUkr.src = dataFirstUkr[i].video;
        modalSubtitleFirstUkr.textContent = dataFirstUkr[i].text;
    })
})

//  ==================== second ukr ====================

const trenCardSecondUkr = document.querySelector('.second_ukr');
const modalSecondUkr = document.querySelector('.modal_ukr_second');

trenCardSecondUkr.addEventListener('click', () => {
    modalSecondUkr.classList.add('open');
})
modalSecondUkr.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalSecondUkr) {
        modalSecondUkr.classList.remove('open');
    }
})

const modalLinksSecondUkr = document.querySelectorAll('.title_second_ukr');
const modalYoutubeSecondUkr = document.querySelector('.youtube_second_ukr');
const modalSubtitleSecondUkr = document.querySelector('.subtitle_second_ukr');

modalLinksSecondUkr.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksSecondUkr.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeSecondUkr.src = 'https://www.youtube.com/embed/AY7cFbVfJ7g';


const dataSecondUkr = [
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


modalLinksSecondUkr.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeSecondUkr);
        modalYoutubeSecondUkr.src = dataSecondUkr[i].video;
        modalSubtitleSecondUkr.textContent = dataSecondUkr[i].text;
    })
})

//  ==================== third ukr ====================

const trenCardThirdUkr = document.querySelector('.third_ukr');
const modalThirdUkr = document.querySelector('.modal_ukr_third');

trenCardThirdUkr.addEventListener('click', () => {
    modalThirdUkr.classList.add('open');
})
modalThirdUkr.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalThirdUkr) {
        modalThirdUkr.classList.remove('open');
    }
})

const modalLinksThirdUkr = document.querySelectorAll('.title_third_ukr');
const modalYoutubeThirdUkr = document.querySelector('.youtube_third_ukr');
const modalSubtitleThirdUkr = document.querySelector('.subtitle_third_ukr');

modalLinksThirdUkr.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksThirdUkr.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeThirdUkr.src = 'https://www.youtube.com/embed/Zx0iw9mAz_k';


consThirdThirdUkr = [
    {
        video: 'https://www.youtube.com/embed/Zx0iw9mAz_k',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
]


modalLinksThirdUkr.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeThirdUkr);
        modalYoutubeThirdUkr.src = dataThirdUkr[i].video;
        modalSubtitleThirdUkr.textContent = dataThirdUkr[i].text;
    })
})

//  ==================== fourth ukr ====================

const trenCardFourthUkr = document.querySelector('.fourth_ukr');
const modalFourthUkr = document.querySelector('.modal_ukr_fourth');

trenCardFourthUkr.addEventListener('click', () => {
    modalFourthUkr.classList.add('open');
})
modalFourthUkr.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalFourthUkr) {
        modalFourthUkr.classList.remove('open');
    }
})

const modalLinksFourthUkr = document.querySelectorAll('.title_fourth_ukr');
const modalYoutubeFourthUkr = document.querySelector('.youtube_fourth_ukr');
const modalSubtitleFourthUkr = document.querySelector('.subtitle_fourth_ukr');

modalLinksFourthUkr.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksFourthUkr.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeFourthUkr.src = 'https://www.youtube.com/embed/yv5fXUkHiYk';


const dataFourthUkr = [
    {
        video: 'https://www.youtube.com/embed/yv5fXUkHiYk',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
    {
        video: 'https://www.youtube.com/embed/meaR8Kb5WEc',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
]


modalLinksFourthUkr.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeFourthUkr);
        modalYoutubeFourthUkr.src = dataFourthUkr[i].video;
        modalSubtitleFourthUkr.textContent = dataFourthUkr[i].text;
    })
})

