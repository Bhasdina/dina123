
@fun
Feature: logins withdifferent parameters


  @reg
  Scenario Outline: login to applictaion
    Given user should be in the login page of application
    When user should enter "<userid>" and "<pswd>" to submit
    Then user should navigate to welcome page

    Examples: 
      | userid | pswd | 
      | usr01 |   ps01|
      | usr02 |   ps02| 
			| usr03 |   ps03|
			| usr04 |   ps04|
			| usr05 |   ps05|