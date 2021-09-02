Feature: Flights functionality

  @smoke
  Scenario: perform search flight with valid credentials
    Given user should be in search flights
    When user enter valid fields and submit
    Then user should navigate to list of flights page

  @reg
  Scenario Outline: perform search flight with invalid credentials
    Given user should be in search flights
    When user enter invalid fields and submit
    Then user should get error message
    
    

 