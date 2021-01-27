document.addEventListener("DOMContentLoaded", function(event) {
    let popupsAnchors = document.querySelectorAll('.popup-button');
    let popupsCloseButton = document.querySelectorAll('.popup__close');

    popupsAnchors.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            let popupLink = item.getAttribute('href').replace('#', '');
            let currentPopup = document.getElementById(popupLink);
            popupShow(currentPopup);
            currentPopup.addEventListener('click', (e) => {
                if(!e.target.closest('.popup__content')) {
                    popupClose(currentPopup);
                }
            });
            e.preventDefault();
        });




    });

    popupsCloseButton.forEach((item, index) => {
        item.addEventListener('click', e => {
            let currentPopup = e.target.closest('.popup');
            if(currentPopup && currentPopup.classList.contains('open')){
                popupClose(currentPopup);
            }
            e.preventDefault();
        });
    });



    function popupShow(popup) {
        if(popup){
            let openedPopup = document.querySelector('.popup.open');
            if(openedPopup){
                popupClose(openedPopup);
            }
            popup.classList.add('open');
        }

    }
    function popupClose(popup) {
        if(popup){
            popup.classList.remove('open');
        }

    }
});



