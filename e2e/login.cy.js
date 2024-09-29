describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Нашли кнопку "восстановить пароль", проверяем цвет кнопки
         cy.get('#mail').type('german@dolnikov.ru'); //Нашли поле для ввода логина, ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Нашли поле для ввода пароля, ввели верный пароль
         cy.get('#loginButton').click(); //Нашли кнопку "войти", нажали на нее
         cy.get('#messageHeader').contains('Авторизация прошла успешно');//Нашли текс после аторизации, проверяю, что там "Авторизация прошла успешно"
         cy.get('#messageHeader').should('be.visible');//Нашли текс после аторизации, и он виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Нашли крестик закрытия, и он виден пользователю
  
     })
     it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Нашли кнопку "восстановить пароль", проверяем цвет кнопки
        cy.get('#mail').type('german@dolnikov.ru'); //Нашли поле для ввода логина, ввели верный логин
        cy.get('#pass').type('iLoveqastudio2'); //Нашли поле для ввода пароля, ввели неверный пароль
        cy.get('#loginButton').click(); //Нашли кнопку "войти", нажали на нее
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Нашли текс после аторизации, проверяю, что там "Авторизация прошла успешно"
        cy.get('#messageHeader').should('be.visible');//Нашли текс после аторизации, и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Нашли крестик закрытия, и он виден пользователю
 
    })
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Нашли кнопку "восстановить пароль", проверяем цвет кнопки
        cy.get('#mail').type('gggerman@dolnikov.ru'); //Нашли поле для ввода логина, ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //Нашли поле для ввода пароля, ввели верный пароль
        cy.get('#loginButton').click(); //Нашли кнопку "войти", нажали на нее
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Нашли текс после аторизации, проверяю, что там "Авторизация прошла успешно"
        cy.get('#messageHeader').should('be.visible');//Нашли текс после аторизации, и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Нашли крестик закрытия, и он виден пользователю
 
    })

    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Нашли кнопку "восстановить пароль", проверяем цвет кнопки
        cy.get('#mail').type('germandolnikov.ru'); //Нашли поле для ввода логина, ввели  логин без  @
        cy.get('#pass').type('iLoveqastudio1'); //Нашли поле для ввода пароля, ввели верный пароль
        cy.get('#loginButton').click(); //Нашли кнопку "войти", нажали на нее
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//Нашли текс после аторизации, проверяю, что там нужный текст
        cy.get('#messageHeader').should('be.visible');//Нашли текс после аторизации, и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Нашли крестик закрытия, и он виден пользователю
 
    })
    it('Проверка востановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Нашли кнопку "восстановить пароль", проверяем цвет кнопки
        cy.get('#forgotEmailButton').click();//Нашли кнопку "Восстановить пароль", нажали на нее
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Нашли поле для ввода почты, ввели  почту 
        cy.get('#restoreEmailButton').click();//Нашли кнопку "Отправить код", нажали на нее
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю на совпадение текст
 
    })
    it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); //Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Нашли кнопку "восстановить пароль", проверяем цвет кнопки
    cy.get('#mail').type('GerMan@Dolnikov.ru'); //Нашли поле для ввода логина, ввели сстрочными буквами логин
    cy.get('#pass').type('iLoveqastudio1'); //Нашли поле для ввода пароля, ввели верный пароль
    cy.get('#loginButton').click(); //Нашли кнопку "войти", нажали на нее
    cy.get('#messageHeader').contains('Авторизация прошла успешно');//Нашли текс после аторизации, проверяю, что там "Авторизация прошла успешно"
    cy.get('#messageHeader').should('be.visible');//Нашли текс после аторизации, и он виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Нашли крестик закрытия, и он виден пользователю

 
    })
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome

 