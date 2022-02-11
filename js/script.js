document.addEventListener('DOMContentLoaded', ()=>{
    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
      tabContent = document.querySelectorAll('.tabcontent'),
      tabParent = document.querySelector('.tabheader__items')
    
    function hideTabs () {
        tabContent.forEach(item =>{
            item.classList.add('hide')
        })
        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active')
        })
    };

    function showTabs (i = 0) {
        tabContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    };

    hideTabs();
    showTabs();

    tabParent.addEventListener('click', (e) =>{
        const target = e.target;
        
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) =>{
                if (target == item) {
                    hideTabs();
                    showTabs(i);
                }
            })
        }
    })

    // Timer
    const deadLine = "2022-03-01";

    function getTimeRemaining (endtime) {
        const t = Date.parse(deadLine) - Date.parse(new Date());
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(t / (1000 * 60 *60) % 24),
              minutes = Math.floor(t / (1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60)
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    function ifZero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock (selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock (endtime) {
            const t = getTimeRemaining(endtime);

            days.innerHTML = ifZero(t.days);
            hours.innerHTML = ifZero(t.hours);
            minutes.innerHTML = ifZero(t.minutes);
            seconds.innerHTML = ifZero(t.seconds);

            if (t.total <= 0 ) {
                clearInterval(timeInterval);
            }

        }

    };
    setClock('.timer', deadLine);

    // Modal

    const triggerModal = document.querySelectorAll('[data-modal]'),
          closeModal = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal'),
          modalTimerId = setTimeout(showModal, 10000)
    
    triggerModal.forEach(item =>{
        item.addEventListener('click', showModal)
    })

    closeModal.addEventListener('click', hideModal)
    modal.addEventListener('click', (e) =>{
        if (e.target === modal) {
            hideModal();
        }
    })
    document.addEventListener('keydown', (e) =>{
        if (e.code === 'Escape') {
            hideModal();
        }
    })

    function showModal () {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden';
    }
    function hideModal () {
        modal.style.display = 'none'
        document.body.style.overflow = '';
    }

})
let y = 0
let x = 1

const log = (p) =>{
    if (p) {
        console.log(p)
    }
}
log(y);
log(x);