package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	@Given("^user should be in login page$")
	public void user_should_be_in_login_page() throws Throwable {
	    System.out.println("login page");
	    
	}

	@When("^user enter valid credentials$")
	public void user_enter_valid_credentials() throws Throwable {
		 System.out.println("valid credentials");
	}

	@When("^submit$")
	public void submit() throws Throwable {
		 System.out.println("submit button");
	}

	@Then("^user should navigate to homepage app$")
	public void user_should_navigate_to_homepage_app() throws Throwable {
		 System.out.println("homepage");
	}

	@When("^user enter invalid credentials$")
	public void user_enter_invalid_credentials() throws Throwable {
		System.out.println("invalid credentials");
	}

	@Then("^user should get error message$")
	public void user_should_get_error_message() throws Throwable {
		System.out.println("error message");
	}

	@When("^user enter blank credentials$")
	public void user_enter_blank_credentials() throws Throwable {
		 System.out.println("blank credentials");
	}



}
