// =============== meni
let menuDugme = document.querySelector('.header .menu-dugme');

menuDugme.addEventListener("click", () => {
    let lista = document.querySelector('.header ul');

    if(menuDugme.innerText === 'MENU') {
        menuDugme.innerText = 'CLOSE';
        lista.style.display = 'block';
    }
    else {
        menuDugme.innerText = 'MENU';
        lista.style.display = 'none';
    }
});

// ================ slider
let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

const moveRight = () => {
    displayNone(pictures);
    imgNum++;

    if(imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
}

const moveLeft = () => {
    displayNone(pictures);
    imgNum--;

    if(imgNum === -1) {
        imgNum = pictures.length-1;
    }

    pictures[imgNum].style.display = 'block';
}

rightBtn.addEventListener("click", () => moveRight());
leftBtn.addEventListener("click", () => moveLeft());

const displayNone = (pictures) => {
    pictures.forEach(element => {
        element.style.display = 'none';
    });
}

// ================== portfolio
let portfolioItems = document.querySelectorAll('.portfolio-single-item');

let glavniEl = document.querySelector('.portfolio-wrapper .portfolio-categories');


let sve = glavniEl.querySelector('[data-category="sve"]');
sve.addEventListener("click", () => {
    portfolioItems.forEach((item) => {
        item.style.display = 'block';
    });
});


let restorani = glavniEl.querySelector('[data-category="restorani"]');
restorani.addEventListener("click", () => {

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });

    portfolioItems.forEach((item) => {
        let kategorijeItema = item.getAttribute('data-category');
        let kategorijeBtn = 'restorani';
        if(kategorijeItema.includes(kategorijeBtn)) {
            item.style.display = 'block';
        }
    });
});


let hoteli = glavniEl.querySelector('[data-category="hoteli"]');
hoteli.addEventListener("click", () => {

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });

    portfolioItems.forEach((item) => {
        let kategorijeItema = item.getAttribute('data-category');
        let kategorijeBtn = 'hoteli';
        if(kategorijeItema.includes(kategorijeBtn)) {
            item.style.display = 'block';
        }
    });

        
    let korporacije = glavniEl.querySelector('[data-category="korporacije"]');
    korporacije.addEventListener("click", () => {

        portfolioItems.forEach((item) => {
            item.style.display = 'none';
        });

        portfolioItems.forEach((item) => {
            let kategorijeItema = item.getAttribute('data-category');
            let kategorijeBtn = 'korporacije';
            if(kategorijeItema.includes(kategorijeBtn)) {
                item.style.display = 'block';
            }
        });
    });

    
        
    let pumpe = glavniEl.querySelector('[data-category="pumpe"]');
    pumpe.addEventListener("click", () => {

        portfolioItems.forEach((item) => {
            item.style.display = 'none';
        });

        portfolioItems.forEach((item) => {
            let kategorijeItema = item.getAttribute('data-category');
            let kategorijeBtn = 'pumpe';
            if(kategorijeItema.includes(kategorijeBtn)) {
                item.style.display = 'block';
            }
        });
    });

    let bazeni = glavniEl.querySelector('[data-category="bazeni"]');
    bazeni.addEventListener("click", () => {

        portfolioItems.forEach((item) => {
            item.style.display = 'none';
        });

        portfolioItems.forEach((item) => {
            let kategorijeItema = item.getAttribute('data-category');
            let kategorijeBtn = 'bazeni';
            if(kategorijeItema.includes(kategorijeBtn)) {
                item.style.display = 'block';
            }
        })
    });

    // oznacavamo dugme pomocu data-category
    let ostalo = glavniEl.querySelector('[data-category="ostalo"]');
    // aktivirarmo addEventListener
    ostalo.addEventListener("click", () => {
    //prvo uklanjamo sve iteme
        portfolioItems.forEach((item) => {
            item.style.display = 'none';
        });
    // proveravamo da li kategorijeItema sadrzi kategorijeBtn
    // ako sadrzi to znaci da taj item pripada tom kriterijumu
    // pa se samim tim pojavljuje
        portfolioItems.forEach((item) => {
            let kategorijeItema = item.getAttribute('data-category');
            let kategorijeBtn = 'ostalo';
            if(kategorijeItema.includes(kategorijeBtn)) {
                item.style.display = 'block';
            }
        });
    });
});





// ================== modal
let prviOpenModal = document.querySelector('.prvi-modal .modal-section button');
prviOpenModal.addEventListener("click", () => {
    let modalWindow = document.querySelector('.prvi-modal .popup-modal');
    let overlay = document.querySelector('.prvi-modal .overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
});

let prviCloseModal = document.querySelector('.prvi-modal .popup-modal #closeModal');
prviCloseModal.addEventListener("click", () => {
    let modalWindow = document.querySelector('.prvi-modal .popup-modal');
    let overlay = document.querySelector('.prvi-modal .overlay');

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
});



let drugiOpenModal = document.querySelector('.drugi-modal .modal-section button');
drugiOpenModal.addEventListener("click", () => {
    let modalWindow = document.querySelector('.drugi-modal .popup-modal');
    let overlay = document.querySelector('.drugi-modal .overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
});

let drugiCloseModal = document.querySelector('.drugi-modal .popup-modal #closeModal');
drugiCloseModal.addEventListener("click", () => {
    let modalWindow = document.querySelector('.drugi-modal .popup-modal');
    let overlay = document.querySelector('.drugi-modal .overlay');

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
});
