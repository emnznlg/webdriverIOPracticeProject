import LoginPage from "../pages/login-page";
import Navbar from "../pages/components/navbar";
import SearchResultsPage from "../pages/search-results-page";
import ProductPage from "../pages/product-page";
import CartPage from "../pages/cart-page";

describe("Shopping Cart Tests", () => {
  it("Verifiying that the shopping cart quantity indicator is working as expected", async () => {
    // User goes to https://magento.softwaretestingboard.com/
    await browser.url("/");

    // The user clicks the sign-in button.
    await Navbar.signInBtn.click();

    // The user enters the valid email address to the email input on the screen.
    await LoginPage.emailInput.addValue("deneme-mail@example.com");

    // The user enters the valid password to the password input on the screen.
    await LoginPage.passwordInput.addValue("Deneme123");

    // The user clicks the blue sign in button.
    await LoginPage.signInBtn.click();

    // User searches for 'Argus All-Weather Tank' on the page by using search box.
    await Navbar.searchBox.addValue("Argus All-Weather Tank");
    await browser.keys("Enter");

    // User clicks the product that has 'Argus All-Weather Tank' as the title.
    let len = await SearchResultsPage.searchResultProductTitles.length;
    let el;
    for (let i = 0; i < len; i++) {
      el = await SearchResultsPage.searchResultProductTitles[i].getText();
      if (el === "Argus All-Weather Tank") {
        await SearchResultsPage.searchResultProductTitles[i].waitForClickable();
        await SearchResultsPage.searchResultProductTitles[i].click();
        break;
      }
    }

    // The user choses size and color for the product
    // eslint-disable-next-line wdio/no-pause
    await browser.pause(3000);
    await ProductPage.sizeOptions[0].click();
    await ProductPage.colorOptions[0].click();

    let qty = await Navbar.cartQuantity.getText();

    // The user clicks the Add to Cart button on the page
    await ProductPage.addToCartButton.click();

    // The user verifies that there is a “You added Argus All-Weather Tank to your shopping cart.' text appears on the page
    await expect(await ProductPage.addToCartSuccessMessage).toHaveText(
      "You added Argus All-Weather Tank to your shopping cart."
    );

    // The user verifies that the product quantity on the shopping bag icon increased
    await browser.waitUntil(async function () {
      let className = await Navbar.cartQuantityWrapper.getAttribute("class");
      return className === "counter qty";
    });

    qty = Number(qty);
    qty += 1;
    qty = String(qty);

    await expect(await Navbar.cartQuantity).toHaveText(qty);

    // The user clicks on the cart icon
    await Navbar.cartButton.click();
    await Navbar.cartPopUpSizeAndColorDetails.click();

    // The user verfies the product price, title, size and the color info on the cart pop-up
    let size = await Navbar.cartPopUpSize.getText();
    let color = await Navbar.cartPopUpColor.getText();
    let title = await Navbar.cartPopUpProductTitle.getText();

    await expect(Navbar.cartPopUpSize).toHaveText(size);
    await expect(Navbar.cartPopUpColor).toHaveText(color);
    await expect(Navbar.cartPopUpProductTitle).toHaveText(title);

    // The user clicks the View and Edit Cart text
    await Navbar.viewAndEditCartButton.click();

    // The user verfies the product price, title, size and the color info on the cart page
    await expect(await CartPage.productTitle).toHaveText(title);
    await expect(await CartPage.productColorAndSizeInfo[0]).toHaveText(size);
    await expect(await CartPage.productColorAndSizeInfo[1]).toHaveText(color);

    await Navbar.customerMenuToggleButton.click();
    await Navbar.signOutBtn.waitForClickable();
    await Navbar.signOutBtn.click();
  });
  it.only("Verifying that the Estimate Shipping and Tax section on the cart page is working as expected", async () => {
    // User goes to https://magento.softwaretestingboard.com/
    await browser.url("/");

    // The user clicks the sign-in button.
    await Navbar.signInBtn.click();

    // The user enters the valid email address to the email input on the screen.
    await LoginPage.emailInput.addValue("deneme-mail@example.com");

    // The user enters the valid password to the password input on the screen.
    await LoginPage.passwordInput.addValue("Deneme123");

    // The user clicks the blue sign in button.
    await LoginPage.signInBtn.click();

    // User searches for 'Argus All-Weather Tank' on the page by using search box.
    await Navbar.searchBox.addValue("Argus All-Weather Tank");
    await browser.keys("Enter");
    // User clicks the product that has 'Argus All-Weather Tank' as the title.
    let len = await SearchResultsPage.searchResultProductTitles.length;
    let el;
    for (let i = 0; i < len; i++) {
      el = await SearchResultsPage.searchResultProductTitles[i].getText();
      if (el === "Argus All-Weather Tank") {
        await SearchResultsPage.searchResultProductTitles[i].waitForClickable();
        await SearchResultsPage.searchResultProductTitles[i].click();
        break;
      }
    }
    // The user choses size and color for the product
    // eslint-disable-next-line wdio/no-pause
    await browser.pause(1000);
    await ProductPage.sizeOptions[0].click();
    await ProductPage.colorOptions[0].click();

    // The user clicks the Add to Cart button on the page
    await ProductPage.addToCartButton.click();

    // The user clicks on the cart icon
    await Navbar.cartButton.click();

    // The user clicks the View and Edit Cart text
    await Navbar.viewAndEditCartButton.click();

    // The user clicks the Estimate Shipping and Tax button
    await CartPage.estimateShippingButton.click();

    // The user selects Canada from Country dropdown
    await CartPage.countryDropdown.selectByVisibleText("Canada");

    // The user selects Alberta from State dropdown
    await CartPage.stateDropdown.selectByVisibleText("Alberta");

    // The user enters a zip code to the Zip/Postal Code field
    await CartPage.zipCodeInput.addValue("1S4 7Z6");
  });
});
