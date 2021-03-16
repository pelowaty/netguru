module.exports = {
    '#1 BASIC USER PATH'(browser) {
        const cookies = 'button[data-testid="cookie-policy-dialog-accept-button"]';
        const facebook = '[data-testid="royal_login_form"]';
        const login = '[data-testid="royal_email"]';
        const password = '[data-testid="royal_pass"]';
        const button = '[data-testid="royal_login_button"]';
        const account = 'div[aria-label="Konto"]';

        browser
            //step1
            .url('https://pl-pl.facebook.com/')
            .waitForElementVisible(cookies, [2000])
            .click(cookies)
            .waitForElementPresent(facebook, [2000])

            //step2
            .setValue(login, 'hukkavolmi@nedoz.com')
            .setValue(password, 'Qwer!234')
            .click(button)
            .waitForElementPresent(account)
            ;
    }
}