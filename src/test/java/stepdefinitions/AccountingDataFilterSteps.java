package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import practice.cucumber.AccountingDataFilter;

public class AccountingDataFilterSteps {
	AccountingDataFilter accountingdatafilter;
	@Given("I have a {string} {string}")
	public void i_have_a(String filter_name,String are_code) {  
	   accountingdatafilter=new AccountingDataFilter(are_code);
	   System.out.println("Step 1");
	}
	@When("I search records using {string} {string}")
	public void i_search_records_using(String filter_name,String country_code) {
	    // Write code here that turns the phrase above into concrete actions
		   System.out.println("Step 2");
	}
	@Then("Accounting records should be filtered by {string} {string}")
	public void accounting_records_filter_by(String filter_name,String line_name) {
	    // Write code here that turns the phrase above into concrete actions
		   System.out.println("Step 3");
	}
	@Then("Data present on UI in overview table")
	public void data_present_on_UI_in_overview_table() {
	    // Write code here that turns the phrase above into concrete actions
		   System.out.println("Step 4");
	}
}
