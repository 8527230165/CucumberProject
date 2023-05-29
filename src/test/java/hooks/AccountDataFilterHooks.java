package hooks;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class AccountDataFilterHooks {
	
	@Before
	public void beforeFilter(Scenario sc) {
		System.out.println("Before "+sc.getName());
	}
	@After
	public void afterFilter(Scenario sc) {
		System.out.println("After "+sc.getName());
	}
	
}
