package stepdefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	@Before(order=1)  //execution order is 1,2//
	public void setup1(){
		System.out.println("precondition1");
		
	}
	@After(order=2)  //postcondition order will be revesrse.first executes 2,1//
	public void teardown1(){
		System.out.println("postcondition1");
	}
	@Before(order=2)
	public void setup2(){
		System.out.println("precondition2");
		
	}
	@After(order=1)
	public void teardown2(){
		System.out.println("postcondition2");
}
}
