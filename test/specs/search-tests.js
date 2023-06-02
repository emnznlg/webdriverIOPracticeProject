import Navbar from "../pages/components/navbar";
import SearchResultsPage from "../pages/search-results-page";

describe("com.luma - Search Test", () => {
  it("The user should be able to search for any product by using the search box.", async () => {
    //User goes to https://magento.softwaretestingboard.com/
    await browser.url("/");
    //User types 'Argus All-Weather Tank' into the search box at the top of the page

    await Navbar.searchBox.addValue("Argus All-Weather Tank");
    // User clicks the search icon on the right side of the search box
    await Navbar.searchBtn.click();

    // The user verifies that the search results text contains the 'Argus All-Weather Tank' word.
    await expect(SearchResultsPage.searchResultText).toHaveTextContaining(
      "Argus All-Weather Tank"
    );

    // The user verifies that the "Argus All-Weather Tank" product is visible on the page
    await expect(SearchResultsPage.searchResultProductTitles[0]).toHaveText(
      "Argus All-Weather Tank"
    );
  });
});
