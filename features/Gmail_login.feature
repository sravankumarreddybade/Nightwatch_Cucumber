Feature: Gmail login

#Background:
#  Given User should navigate to the Google home page

@Single_account_validation
Scenario: User should navigate to Step 2 section for Multiple register account

Given User should navigate to the Google home page
  And Click on gmail link 
 When User should enter the email address as "abc@abc.com" and postcode as "password12"
 Then User should click on Login button
 Then User should be displayed with Inbox

 @Single_account_validation
Scenario Outline: User should navigate to Step 2 section for Multiple register account

Given User should navigate to the Google home page
  And Click on gmail link 
 When User should enter the email address as "<Email>" and postcode as "<Password>"
  And User should click on Login button
 Then User should be displayed with Inbox

Examples:
|  Email       | Password    |
|  abc@abc.com | password12  |
|  cdf@cdf.com | password12  | 