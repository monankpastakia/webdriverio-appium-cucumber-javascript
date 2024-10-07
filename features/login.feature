@Login
Feature: Login

  Scenario Outline: As a user, I can log into the application

    Given The app is launched
    Then Verify user is on the login page
    When User logs in with username <username> and password <password>

    Examples:
      | username  | password  |
      | test      | test      |
      | foobar    | barfoo    |
