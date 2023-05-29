#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Accounting Data Overview Filter

@SmokeTest
Scenario: Filter using ARE Code
Given I have a "ARE Code" "4001"
When I search records using "ARE Code" "4001" 
Then Accounting records should be filtered by "ARE Code" "4001"
And Data present on UI in overview table

@SmokeTest
Scenario: Filter using Country Code
Given I have a "Country Code" "DE"
When I search records using "Country Code" "DE" 
Then Accounting records should be filtered by "Country Code" "DE"
And Data present on UI in overview table

@Test
Scenario: Filter using Line
Given I have a "Line" "Marine"
When I search records using "Line" "Marine" 
Then Accounting records should be filtered by "Line" "Marine"
And Data present on UI in overview table

@SanityTest @SmokeTest
Scenario: Filter using Account Valid
Given I have a "Account validity" "Valid"
When I search records using "Account" "Valid" 
Then Accounting records should be filtered by "Account" "Valid"
And Data present on UI in overview table
