const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const reporter = require("cucumber-html-reporter");

defineSupportCode(({ Given, Then, When }) => {
  const login = client.page.login();

    Given(/^User should navigate to the Google home page$/, () => {
        return login
        .navigate()
  });

  Given(/^Click on gmail link$/, () => {
    return login
    .click('@gmail')
  });
  
  When(/^User should enter the email address as "([^"]*)" and postcode as "([^"]*)"$/, (email, password) => {
    return 
    login 
    .waitForElementPresent('@email', 10000)
    .setValue('@email', email)
    .click('@emailconfirmbutton')
    .waitForElementPresent('@password', 10000)
    .setValue('@password', password)
  });

  When(/^User should click on Login button$/, () => {
    return login
    .click('@loginbutton')
  });

  Then(/^User should be displayed with Inbox$/, () => {
    return login
    .waitForElementVisible('@inbox_text', 10000)
    .assert.containsText('@accountoverviewbalanceheader', 'Inbox')
    .assert.urlEquals('https://mail.google.com/mail/u/0/#inbox')
    //
  });
  
});