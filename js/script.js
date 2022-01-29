$(document).ready(function () {
    initQuiz();
    initSlider()
})

function initQuiz() {
    var html = `
    <div class="am-modal-quiz" am-quiz>
        <div class="am-modal-body">
        
            <!-- Вступление -->
            <div class="am-step-start">
                <div class="am-left-col">
                    <img class="am-index-photo" src="/questions/sochi-estate/background.png" alt="img">
                </div>
                <div class="am-right-col">
                    <p class="am-slogan-title">Подберем новостройку для вас</p>
                    <div class="am-center-content">
                        <p class="am-heading-start">`+quiz[0].title+`</p>
                        <p class="am-desc-start">`+quiz[0].desc+`</p>
                        <p class="am-footnote-start">`+quiz[0].footnote+`</p>
                        <button class="am-btn am-btn-primary am-start-quiz">Пройти опрос <i class="icon arrow-right"></i></button>
                    </div>
                </div>
            </div>`+
            questions()+
        `</div>
    </div>
    `;
    $('body').append(html)
}

function questions() {
    var html = `
    <!-- Вопросы -->
        <div class="am-dialog-question">
            <div class="am-list-question">
                <div class="am-slider-quiz">
                    for
                </div>
                <!-- Навигационный бар -->
                <div class="am-navbar-bottom">
                    <div class="am-steps">
                        <p class="am-step-text">Вопрос <span>1 из 7</span></p>
                    </div>
                    <div class="am-buttons-nav">
                        <button class="am-btn am-btn-secondary am-btn-prev">Назад</button>
                        <button class="am-btn am-btn-primary am-btn-next"><span class="am-large-title">Следующий вопрос</span><span class="am-small-title">Далее</span> <i class="icon arrow-right"></i></button>
                    </div>
                </div>
            </div>
            
            <!-- Правый сайдбар -->
            <div class="am-right-col-sidebar">

                <!-- Скидка -->
                <div class="am-your-discount">
                    <p class="am-amount">Ваша скидка: <span>120 000 руб.</span></p>
                </div>

                <!-- Менеджер -->
                <div class="am-manager-hint">
                    <div class="am-manager">
                        <img src="/questions/sochi-estate/manager.jpg" alt="avatar" class="am-avatar-manager">
                        <p class="am-name">Владимир Краснов</p>
                        <p class="am-position">Ваш личный менеджер</p>
                    </div>
                    <p class="am-hint-manager">В отеле “Волна” присутствуют как небольшие номера от 20 м2, так и просторные от 100 м2</p>
                </div>

                <!-- После ответов на вопросы, Вы получите -->
                <div class="am-after-answers">
                    <p class="am-heading">После ответов на вопросы, Вы получите:</p>
                    <div class="am-gifts">
                        <div class="am-gift-item">
                            <img src="/img/gift-1.png" alt="img" class="am-gift-photo">
                            <p class="am-gift-title">Подборку под квартир под бюджет и цели</p>
                        </div>
                    </div>
                    <div class="am-gifts">
                        <div class="am-gift-item">
                            <img src="/img/gift-2.png" alt="img" class="am-gift-photo">
                            <p class="am-gift-title">Скидку на 120 000 руб. на покупку</p>
                        </div>
                    </div>
                </div>

            </div>
    `;
    return html;
}



// Слайдер
function initSlider(e) {
    var slider = $('.am-slider-quiz');
    var slide = slider.find('.am-question-slide');
    var slideCount = slide.length;

    slider.find('>:first-child').addClass('am-active');


    slider.wrapInner('<div class="slider-inner" />');

    var container = $('.slider-inner');
    container.css('width', 100 * slideCount + '%');
    slide.css('width', 100 / slideCount +'%');

    var next = $('.am-btn-next');
    var prev = $('.am-btn-prev');
    var i = 0;

    function mover(){
        if(i === 0){
            container.css('left',0);
        } else if(i > 0){
            container.css('left','-'+100*i+'%');
        }
    }

    next.on('click',function(){
        if( i < slideCount -1){
            i++;
            mover();
            $('.am-question-slide.am-active').next('.am-question-slide').addClass('am-active');
            $('.am-question-slide.am-active').prev('.am-question-slide.am-active').removeClass('am-active');
        }
    });
    prev.on('click',function(){
        if( i > 0){
            i--;
            mover();
            $('.am-question-slide.am-active').prev('.am-question-slide').addClass('am-active');
            $('.am-question-slide.am-active').next('.am-question-slide').removeClass('am-active');
        }
    });
}