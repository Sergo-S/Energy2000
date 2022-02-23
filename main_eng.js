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

//  ==================== first eng ====================

const trenCardFirstEng = document.querySelector('.first_eng');
const modalFirstEng = document.querySelector('.modal_eng_first');

trenCardFirstEng.addEventListener('click', () => {
    modalFirstEng.classList.add('open');
})
modalFirstEng.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalFirstEng) {
        modalFirstEng.classList.remove('open');
    }
})


const modalLinksFirstEng = document.querySelectorAll('.title_first_eng');
const modalYoutubeFirstEng = document.querySelector('.youtube_first_eng');
const modalSubtitleFirstEng = document.querySelector('.subtitle_first_eng');

modalLinksFirstEng.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksFirstEng.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeFirstEng.src = 'https://www.youtube.com/embed/nfYWfx8kceI';


const dataFirstEng = [
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


modalLinksFirstEng.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeFirstEng);
        modalYoutubeFirstEng.src = dataFirstEng[i].video;
        modalSubtitleFirstEng.textContent = dataFirstEng[i].text;
    })
})

//  ==================== second eng ====================

const trenCardSecondEng = document.querySelector('.second_eng');
const modalSecondEng = document.querySelector('.modal_eng_second');

trenCardSecondEng.addEventListener('click', () => {
    modalSecondEng.classList.add('open');
})
modalSecondEng.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalSecondEng) {
        modalSecondEng.classList.remove('open');
    }
})

const modalLinksSecondEng = document.querySelectorAll('.title_second_eng');
const modalYoutubeSecondEng = document.querySelector('.youtube_second_eng');
const modalSubtitleSecondEng = document.querySelector('.subtitle_second_eng');

modalLinksSecondEng.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksSecondEng.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeSecondEng.src = 'https://www.youtube.com/embed/AY7cFbVfJ7g';


const dataSecondEng = [
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


modalLinksSecondEng.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeSecondEng);
        modalYoutubeSecondEng.src = dataSecondEng[i].video;
        modalSubtitleSecondEng.textContent = dataSecondEng[i].text;
    })
})

//  ==================== third eng ====================

const trenCardThirdEng = document.querySelector('.third_eng');
const modalThirdEng = document.querySelector('.modal_eng_third');

trenCardThirdEng.addEventListener('click', () => {
    modalThirdEng.classList.add('open');
})
modalThirdEng.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalThirdEng) {
        modalThirdEng.classList.remove('open');
    }
})

const modalLinksThirdEng = document.querySelectorAll('.title_third_eng');
const modalYoutubeThirdEng = document.querySelector('.youtube_third_eng');
const modalSubtitleThirdEng = document.querySelector('.subtitle_third_eng');

modalLinksThirdEng.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksThirdEng.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeThirdEng.src = 'https://www.youtube.com/embed/Zx0iw9mAz_k';


consThirdThirddEng = [
    {
        video: 'https://www.youtube.com/embed/Zx0iw9mAz_k',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
]


modalLinksThirdEng.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeThirdEng);
        modalYoutubeThirdEng.src = dataThirdEng[i].video;
        modalSubtitleThirdEng.textContent = dataThirdEng[i].text;
    })
})

//  ==================== fourth eng ====================

const trenCardFourthEng = document.querySelector('.fourth_eng');
const modalFourthEng = document.querySelector('.modal_eng_fourth');

trenCardFourthEng.addEventListener('click', () => {
    modalFourthEng.classList.add('open');
})
modalFourthEng.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target === modalFourthEng) {
        modalFourthEng.classList.remove('open');
    }
})

const modalLinksFourthEng = document.querySelectorAll('.title_fourth_eng');
const modalYoutubeFourthEng = document.querySelector('.youtube_fourth_eng');
const modalSubtitleFourthEng = document.querySelector('.subtitle_fourth_eng');

modalLinksFourthEng.forEach(function(i) {
    i.addEventListener('click', () => {
        let currentLink = i;

        modalLinksFourthEng.forEach(function(i) {
            i.classList.remove('active-links');
        })
        currentLink.classList.add('active-links');
    })
})


// *! Здесь ссылка такая же, как и в первом пункте
modalYoutubeFourthEng.src = 'https://www.youtube.com/embed/yv5fXUkHiYk';


const dataFourthEng = [
    {
        video: 'https://www.youtube.com/embed/yv5fXUkHiYk',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
    {
        video: 'https://www.youtube.com/embed/meaR8Kb5WEc',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat doloribus quia sapiente autem illo dolorum repellat aperiam soluta, inventore neque? Quo magnam reiciendis autem omnis. Rem, qui. Sint, tempora.',
    },
]


modalLinksFourthEng.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(modalYoutubeFourthEng);
        modalYoutubeFourthEng.src = dataFourthEng[i].video;
        modalSubtitleFourthEng.textContent = dataFourthEng[i].text;
    })
})


