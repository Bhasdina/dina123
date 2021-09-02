$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("req1login.feature");
formatter.feature({
  "line": 2,
  "name": "login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@fun"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "prescript for all login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user should be in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should navigate to homepage app",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_should_be_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_enter_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_should_navigate_to_homepage_app()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "login with valid credentials",
  "description": "",
  "id": "login-functionality;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user should be in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "submit",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should navigate to homepage app",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_should_be_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_enter_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_should_navigate_to_homepage_app()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "prescript for all login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user should be in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should navigate to homepage app",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_should_be_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_enter_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_should_navigate_to_homepage_app()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "login with invalid credentials",
  "description": "",
  "id": "login-functionality;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@smoke"
    },
    {
      "line": 16,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user should be in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enter invalid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user should get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_should_be_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_enter_invalid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_should_get_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "prescript for all login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user should be in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should navigate to homepage app",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_should_be_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_enter_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_should_navigate_to_homepage_app()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "login with blank credentials",
  "description": "",
  "id": "login-functionality;login-with-blank-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user should be in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enter blank credentials",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user should get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_should_be_in_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_enter_blank_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_should_get_error_message()"
});
formatter.result({
  "status": "skipped"
});
});