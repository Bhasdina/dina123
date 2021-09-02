package cucumbertests;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "requirements"
		,glue={"stepdefinition"},
		monochrome=true,
		dryRun=true,
		strict=true,
		tags="@fun",
		plugin={"html:target/report1.html","junit:target/report2.xml","json:target/report3.json"}
		
		)

public class TestRunner {

}
