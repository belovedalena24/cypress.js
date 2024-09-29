describe('Покупка аватара', function () {

    it('Покупка аватара для тренера е2е', function () {
         cy.visit('https://pokemonbattle.ru/login'); //Зашли на сайт
         cy.get('input[type="email"]').type('USER_LOGIN'); // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD'); // вводим пароль
         cy.get('button[type="submit"]').click();// нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true });// нажимаем на иконку тренера
         cy.get('[href="/shop"]').click({ force: true });// нажимаем на магазин тренеров
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('Alena Bbbbbbb');// вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     })
 }) 

 //npx cypress open - запустить