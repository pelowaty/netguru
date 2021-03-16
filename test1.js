module.exports = {
    '#4 ERROR TEST'(browser) {
        const cookies = 'button[data-testid="cookie-policy-dialog-accept-button"]';
        const facebook = '[data-testid="royal_login_form"]';
        const utworz_konto = '[data-testid="open-registration-form-button"]';
        const zarejestruj = 'button[name="websubmit"]';
        const kobieta = 'input[value="1"]';
        const email = 'input[name="reg_email__"]';
        const email2 = 'input[name="reg_email_confirmation__"]';
        const imie = 'input[name="firstname"]';
        const nazwisko = 'input[name="lastname"]';
        const haslo = 'input[name="reg_passwd__"]';
        const wiek = 'a[id="age_to_birthday_link"]';
        const rok = 'select[name="birthday_year"]';
        const error = 'div[id="reg_error_inner"]';
        const error2 = 'div[id="conf_code_length_error"]';
        const error3 = 'div[aria-label="Zawartość okna dialogowego"]';
        const confirmation = 'div[id="content"]';
        const kod = 'input[name="code"]';
        const kontynuuj = 'button[name="confirm"]';
        
        browser
            //step1
            .url('https://pl-pl.facebook.com/')
            .waitForElementVisible(cookies, [2000])
            .click(cookies)
            .waitForElementPresent(facebook, [2000])
            .saveScreenshot('tests_output/step1_result.png')

            //step2
            .click(utworz_konto)
            .waitForElementVisible(zarejestruj, [2000])
            .saveScreenshot('tests_output/step2_result.png')
            
            //step3
            .click(zarejestruj)
            
            //step4
            .click(imie)
            .saveScreenshot('tests_output/step4_result.png')

            //step5
            .click(kobieta)
            .saveScreenshot('tests_output/step5_result.png')

            //step6
            .setValue(email, 'invalidmail@wp')
            .click(zarejestruj)
            .saveScreenshot('tests_output/step6_result.png')

            //step7
            .click(email)
            .saveScreenshot('tests_output/step7_result.png')

            //step8
            .setValue(imie, 'sdf')
            .setValue(nazwisko, 'sdf')
            .clearValue(email)
            .setValue(email, 'asdf1234j@gmail.com')
            .setValue(email2, 'asdf1234j@gmail.com')
            .setValue(haslo, 'Qwer!234')
            .click(wiek)
            .click(rok)
            .click('[value="1994"]')
            .click(kobieta)
            .click(zarejestruj)
            .pause(16000)
            .waitForElementPresent(error)
            .saveScreenshot('tests_output/step8_result.png')

            //step9
            .clearValue(imie)
            .clearValue(nazwisko)
            .setValue(imie, 'Janusz')
            .setValue(nazwisko, 'Januszewski')
            .clearValue(email)
            .clearValue(email2)
            .setValue(email, 'harzadirde@nedoz.com')
            .setValue(email2, 'harzadirde@nedoz.com')
            .click(zarejestruj)
            .pause(7000)
            .waitForElementPresent(error)
            .saveScreenshot('tests_output/step9_result.png')

            //step10
            .clearValue(email)
            .clearValue(email2)
            .setValue(email, 'harzadirde5@nedoz.com')
            .setValue(email2, 'harzadirde5@nedoz.com')
            .click(zarejestruj)
            .waitForElementVisible(confirmation)
            .saveScreenshot('tests_output/step10_result.png')

            //step11
            .setValue(kod, 'asd')
            .click(kontynuuj)
            .waitForElementPresent(error2)
            .saveScreenshot('tests_output/step11_result.png')

            //step12
            .clearValue(kod)
            .setValue(kod, '11111')
            .waitForElementNotVisible(error2)
            .saveScreenshot('tests_output/step12_result.png')

            //step13
            .click(kontynuuj)
            .waitForElementPresent(error3)
            .saveScreenshot('tests_output/step13_result.png')
            ;
    }
}