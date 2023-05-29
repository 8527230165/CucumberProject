package testrunners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features",
		glue = {"stepdefinitions"},
		tags = "@SmokeTest" ,
		plugin={"pretty",
				"html:target/SystemtestReports/html",
				"json:target/SystemtestReports/json/report.json",
				"junit:target/SystemtestReports/junit/report.xml"},
		monochrome = true)
public class AccountingDataFilterTest {

}
