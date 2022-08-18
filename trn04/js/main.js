// 자바스크립트 소스를 읽어낼 수 있게 써줌. script src를 위에 썻을 경우
window.addEventListener('DOMContentLoaded', () => {





    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        console.log(sct)
        sct > 0
            ? document.querySelector('#Header').classList.add('on')
            : document.querySelector('#Header').classList.remove('on')

        sct > 500
            ? document.querySelector('.to_top').classList.add('on')
            : document.querySelector('.to_top').classList.remove('on');

        // if (sct > 0) {
        //     document.querySelector('#Header').classList.add('on')
        // } else {
        //     document.querySelector('#Header').classList.remove('on')
        // }
    });


    const MainSlider = new Swiper('.MainSlider', {
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })

    // <<스크롤이벤트>>
    const SCE_ELE = document.querySelectorAll('.active-event');
    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        SCE_ELE.forEach(el => {
            sct > el.offsetTop - 300
                ? el.classList.add('on')
                : el.classList.remove('on')

        })
    });

    // const UL = document.querySelector('nav ul');
    // const LI = [...UL.children][1];
    // console.log(LI);

    document.querySelector('.to_top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    });


    document.querySelector('.mopen').addEventListener('click', (e) => {
        const TG = e.currentTarget;
        TG.classList.toggle('ox');
        document.querySelector('#Header').classList.toggle('ox')
    });

    document.querySelector('#Header').addEventListener('scroll', (e) => {
        e.preventDefault() //이벤트 자체를 막음
        console.log(11111)
    })



})