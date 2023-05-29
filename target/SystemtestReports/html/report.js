$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/MenuManagement.feature");
formatter.feature({
  "name": "Accounting Data Overview Filter",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Filter using ARE Code",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I have a \"ARE Code\" \"4001\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.i_have_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search records using \"ARE Code\" \"4001\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.i_search_records_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Accounting records should be filtered by \"ARE Code\" \"4001\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.accounting_records_filter_by(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Data present on UI in overview table",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.data_present_on_UI_in_overview_table()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter using Country Code",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I have a \"Country Code\" \"DE\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.i_have_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search records using \"Country Code\" \"DE\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.i_search_records_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Accounting records should be filtered by \"Country Code\" \"DE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.accounting_records_filter_by(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Data present on UI in overview table",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.data_present_on_UI_in_overview_table()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter using Account Valid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SanityTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I have a \"Account validity\" \"Valid\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.i_have_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search records using \"Account\" \"Valid\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.i_search_records_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Accounting records should be filtered by \"Account\" \"Valid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.accounting_records_filter_by(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Data present on UI in overview table",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AccountingDataFilterSteps.data_present_on_UI_in_overview_table()"
});
formatter.result({
  "status": "passed"
});
});