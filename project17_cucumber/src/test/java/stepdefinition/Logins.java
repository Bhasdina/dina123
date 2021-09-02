package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Logins {

	@Given("^user should be in the login page of application$")
	public void user_should_be_in_the_login_page_of_application() throws Throwable {
		System.out.println("login page");
	}

	@When("^user should enter \"([^\"]*)\" and \"([^\"]*)\" to submit$")
	public void user_should_enter_and_to_submit(String arg1, String arg2) throws Throwable {
		System.out.println("userid :"+arg1);
		System.out.println("pswd :"+arg2);
	}

	@Then("^user should navigate to welcome page$")
	public void user_should_navigate_to_welcome_page() throws Throwable {
		System.out.println("welcome page of application");
	}

}
