
$(document).ready(function() {

    var scrolled = true;

    var aboutOffset = $(window).width() / 4;
    var aboutOffsetTarget = $("#block-timeline").offset().top - aboutOffset;

    var menuOffsetTarget = $("#block-about").offset().top - 100;
    var previousScroll = 0;
    $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();

        if ($(this).scrollTop() > menuOffsetTarget) {
            $('#menu').attr('class', '');
        } else {
            $('#menu').attr('class', 'light');
        }

        var scrollTop = $(this).scrollTop();
        if (scrollTop > aboutOffsetTarget && scrollTop < aboutOffsetTarget + aboutOffset && scrolled && currentScroll > previousScroll) {
            scrolled = false;
            $('html, body').animate({
                scrollTop: aboutOffsetTarget + aboutOffset
            }, 600, function() {
                scrolled = true;
            });
        }

        if (scrollTop >= aboutOffsetTarget + aboutOffset - 10) {
            $('#monitor').removeClass('disabled');
            $('#monitor-disabled').animate({
                opacity: 0
            }, 300, function() {
                $(this).remove();
            });
        }

        previousScroll = currentScroll;
    });

    $('#menu-toggle').click(function() {
        $('#topnav').toggleClass('responsive');
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                scrolled = false;
                $('#topnav').removeClass('responsive');
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    scrolled = true;
                });
                return false;
            }
        }
    });

    var phraseBlock = $('#greeting-text');
    var phrases = ['L2C - выводим Ваш бизнес в онлайн', 'Web и mobile технологии работают на вас', 'Поднимаем продажи и сокращаем расходы', 'Мы зарабатываем, когда вы довольны результатом!'];
    var i = 1;
    setInterval(function(){
        phraseBlock.text(phrases[i++ % phrases.length]);
    }, 5000);


    var dialogs = [{
        description: '<p>Landing Page - посадочная страница или же продающая страница, необходима в том случае, если Вы можете чётко сформулировать: "Что именно Вы хотите от клиента,что он должен сделать?". К примеру, купить утюг, записаться на услугу, оставить Вам свои контакты и т.д</p><br><p> Мы создаём продающую страницу,\
        которая отражает все преимущества Вашего товара или услуги,\
        внушает доверие клиента к Вашему бренду,\
        и,\
        главное,\
        поэтапно ведёт его к совершению ЦЕЛЕВОГО(главного) действия(покупка, запись на приём, отправление Вам контактов). < /p>', 
        list_title: 'Что Вы получите после создания Landing Page?',
        list: [
            'Увеличения продаж/заказов какой-либо конкретной услуги.',
            'Получение контактных данных клиента.(используется для рекламы) ',
            'Возможность рассказать большой аудитории о создание нового направления в бизнесе.(продажа нового товара)',
            'Возможность адаптации описания товара для разной аудитории.(Например,если человек ищет "Купить шины в Москве", то именно эту фразу он увидит на посадочной странице и т.д)',
            'Возможность возвращать клиентов, которые хотят уйти с Вашего основного сайта, путём перенаправления их на Landing Page, к примеру, с предоставлением скидки)'
        ],
        addition: 'Всего 15 секунд требуется человеку,чтобы решить покинуть ему страинцу или обратить внимание на содержание.',
        question: 'Как поможет Landing page вашему бизнесу?'
    }, {
        description: 'Рынок товаров и услуг, охватываемый интернет-магазинами неуклонно растёт, потому как всё большее число людей использует интернет для покупок и работы. Более 81% людей имеют доступ в интернет и активно им пользуются. Если у Вас есть магазин с ассортиментом товаров и вы продаёте только оффлайн, советуем Вам использовать данное решение. Также это отличный бизнес для начинающего предпринимателя.',
        list_title: 'Конкурентные преимущества интернет - магазина:', 
        list: [
            'Увеличение оборотов и, соответственно, продаж.',
            'Ваш бизнес всегда онлайн,Вы зарабатываете в любое время суток.',
            'Клиент получает исчерпывающую информацию о каждом товаре.',
            'Возможность продавать Ваш товар по всей стране.',
            'Экономия времени Вашего клиента.',
            'Бесплатное привлечения новых покупателей,благодаря внедрению на сайт реферальной программы.'
        ],
        addition: 'Более 5% людей готовы докупить сопутствующие товары к своей покупке,если им предложить выбор таковых. Используйте email рассылки,чтобы уведомить клиентов о поступлении нового товара в магазин.',
        question: 'Как интернет-магазин поднимет продажи именно в Вашем бизнесе?'
    }, {
        description: 'На данный момент мобильное приложение - это лучшее решение для Вашего бизнеса в том случае, если Вы хотите раз за разом возвращать клиента и продавать ему новый товар. При помощи уведомлений Вы в любое время сможете оповестить клиента об акциях, поступлении товара и просто напомнить о Вашей компании. \
        Благодаря интеграции приложения с сайтом,\
        Ваш клиент всегда будет видеть актуальную информацию о компании,\
        товарах,\
        новостях и т.д\
        Также мы разрабатываем мобильные приложение для внутреннего использования,\
        например,\
        для Ваших сотрудников.Такое решение поможет оптимизировать Ваши бизнес - процессы в выбранной области.\
        ', 
        list_title: 'Для чего нужно мобильное приложение?',
        list: ['Удержание старых клиентов и привлечение новых.Задерживайте клиентов внутри бизнеса,а не пропускайте их насквозь.',
            'Покупка товара или заказ услуги, 24/7, напрямую через приложение.',
            'Push-уведомления, которые в любой момент напомнят клиенту о Ваших товарах/услугах, акциях и т.д(Это очень мощный инструмент возврата пользователей!)',
            'Автоматизация бизнес-процессов.',
            'Повышение доверия клиента к Вашему бренду.',
            'Получение данных клиентов,которые можно использовать для рекламы.'
        ],
        addition: 'Самая большая аудитория у Android приложения, а самая состоятельная у iOS. Более 60% клиентов возвращаются в приложение, после получения push-уведомления. Мы поможем Вам устранить утечку клиентов.',
        question: 'Как наиболее эффективно использовать мобильное приложение именно в Вашем бизнесе?'
    }, {
        description: 'На данный момент мобильное приложение - это лучшее решение для Вашего бизнеса в том случае, если Вы хотите раз за разом возвращать клиента и продавать ему новый товар. При помощи уведомлений Вы в любое время сможете оповестить клиента об акциях, поступлении товара и просто напомнить о Вашей компании. \
        Благодаря интеграции приложения с сайтом,\
        Ваш клиент всегда будет видеть актуальную информацию о компании,\
        товарах,\
        новостях и т.д\
        Также мы разрабатываем мобильные приложение для внутреннего использования,\
        например,\
        для Ваших сотрудников.Такое решение поможет оптимизировать Ваши бизнес - процессы в выбранной области.\
        ', 
        list_title: 'Для чего нужно мобильное приложение?',
        list: ['Удержание старых клиентов и привлечение новых.Задерживайте клиентов внутри бизнеса,а не пропускайте их насквозь.',
            'Покупка товара или заказ услуги, 24/7, напрямую через приложение.',
            'Push-уведомления, которые в любой момент напомнят клиенту о Ваших товарах/услугах, акциях и т.д(Это очень мощный инструмент возврата пользователей!)',
            'Автоматизация бизнес-процессов.',
            'Повышение доверия клиента к Вашему бренду.',
            'Получение данных клиентов,которые можно использовать для рекламы.'
        ],
        addition: 'Самая большая аудитория у Android приложения, а самая состоятельная у iOS. Более 60% клиентов возвращаются в приложение, после получения push-уведомления. Мы поможем Вам устранить утечку клиентов.',
        question: 'Как наиболее эффективно использовать мобильное приложение именно в Вашем бизнесе?'
    }, {
        description: 'Система, которая оптимизирует бизнес-процессы в Вашем бизнесе, путём автоматизации шаблонных действий, анализа результативности компании и контролю эффективности сотрудников. Очень часто такая система может заменить одного или двух сотрудников, а соответственно сэкономить в среднем 50 000 - 130 000 рублей в месяц.(Для малого и среднего бизнес) \
        Благодаря CRM системе Вы всегда будете знать,\
        что происходит на рынке в Вашей сфере и сможете вовремя подстраиваться под новые условия "игры",\
        не теряя при этом времени и денег.\
        ', 
        list_title: 'Зачем нужна CRM система?',
        list: ['Упорядочивание всех документов и внутренних процессов в Вашем бизнесе.',
            'Детальная статистика и аналитика каждого этапа Вашего бизнеса.',
            'Сокращение расходов на неэффективных работников,уменьшение налогообложения.',
            'Исключение перепроизводства и недостачи.',
            'Контроль эффективности рекламных каналов => сокращение расходов на рекламу более чем на 35%.',
            'Масштабируемость бизнеса,увеличение оборотов.Снижение рисков.'
        ],
        addition: 'За 2016 год число компаний,использующих CRM,выросло с 54% до 76.2% \
        В среднем затраты на CRM окупаются в пропорции: на 1 $ возвращается 5.60 $.\
        Около 78 % покупателей откладывают покупку,\
        или меняют место покупки из - за плохого обслуживания.\
        ', 
        question: 'Какая CRM система нужна именно Вашему бизнесу?'
    }, {
        description: 'Создаётся шаблон под все документы, использующиеся в Вашем бизнесе. Документы формируются в режиме реального времени и полностью соответствует ГОСТу. Формирование любого документа занимает не более 10 минут. \
        Помимо этого мы создаём базу данных с удобным интерфейсом,\
        которая содержит в себе все важные данные о Вашем бизнесе.(Товары / услуги, цены, данные клиентов и т.д)\
        ', 
        list_title: 'Для чего внедряют данную систему?',
        list: ['Экономия более 2 часов на составление одного документа.',
            'Быстрое, автоматизированное выставление счетов.',
            'Возможность получать детальную информацию по каждому документу.(К примеру, на какой стадии сейчас находиться выполнение работ по договору)',
            'Формирование отчётов в пару кликов.Экономия 60 минут.',
            'Снижение нагрузки на персонал.'
        ],
        addition: 'Максимальная комплектация такой программы может заменить бухгалтерский отдел.',
        question: 'Как правильно настроить формирование документов именно Вашему бизнесу?'
    }, {
        description: 't',
        list_title: '',
        list: [],
        addition: '',
        question: ''
    }, {
        description: 'y',
        list_title: '',
        list: [],
        addition: '',
        question: ''
    }];

    var id = -1;
    var modal = $('#modal');
    $('.price-block').click(function() {
        id = $('.price-block').index($(this));
        var dialog =  dialogs[id];
        $('#modal-title').text($(this).find('h3')[0].innerHTML);

        var image = $($(this).find('.img')[0].cloneNode(true));
        image.css({
            width: '100%'
        });
        $('#modal-image').html(image);
        $('#modal-description').html(dialog.description);
        $('#modal-list-title').html(dialog.list_title);

        var list = '';
        $.each(dialog.list, function(index, value) {
            list += '<li>' + value + '</li>';
        });
        $('#modal-list').html(list);
        $('#modal-addition').html(dialog.addition);
        $('#modal-question').html('<b>' + dialog.question + '</b><br><small>Наши специалисты подготовят для Вашей сферы бизнеса персональное предложение, которое заинтересует именно ваших клиентов.</small>');

        $("body").addClass("modal-open");
        modal.show();
    });

    $('#modal-send').click(function() {
        var button = this;
        button.disabled = true;

        $.post('/service', {id: id, email: $('#modal-email').val()}, function(res) {
            if (res.err) {
                if (res.err == 'sender') {
                    alert('Извините, произошла ошибка. Попробуйте ещё раз.')
                } else {
                    alert('Укажите правильную почту.');
                }
            } else {
                $('#modal-email').val('');
                alert('Ожидайте ответа в ближайшее время.');
            }

            button.disabled = false;
        });
    });

    function closeModal() {
        $("body").removeClass("modal-open")
        modal.hide();
    }

    $('#modal-close').click(function() {
        closeModal();
    });

    $(window).click(function(event) {
        if (event.target.id == "modal") {
            closeModal();
        }
    });
    $('.modal-content').click(function() {
        if (event.target == this) {
            closeModal();
        }
    });

    $('#addition-send').click(function() {
        var button = this;
        button.disabled = true;

        $.post('/addition', {email: $('#addition-email').val()}, function(res) {
            if (res.err) {
                if (res.err == 'sender') {
                    alert('Извините, произошла ошибка. Попробуйте ещё раз.')
                } else {
                    alert('Укажите правильную почту.');
                }
                button.disabled = false;
            } else {
                $('#addition-email').val('');
                alert('Ожидайте ответа в ближайшее время.');
            }
        });
    });

    $('#send-application').click(function() {
        var button = this;
        button.disabled = true;

        $.post('/application', {email: $('#email').val(), phone: $('#phone').val(), comment: $('#comment').val()}, function(res) {
            if (res.err) {
                if (res.err == 'sender') {
                    alert('Извините, произошла ошибка. Попробуйте ещё раз.')
                } else {
                    alert('Укажите правильную почту.');
                }
                button.disabled = false;
            } else {
                $('#email').val('');
                $('#phone').val('');
                $('#comment').val('');
                button.class = "pure-button pure-button-success";
                button.innerHTML = 'ЗАЯВКА ОТПРАВЛЕНА';
                alert('Ожидайте ответа в ближайшее время.');
            }
        });
    });
});
