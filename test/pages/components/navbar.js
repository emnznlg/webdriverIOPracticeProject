class Navbar {
  get searchBox() {
    return $("#search");
  }

  get searchBtn() {
    return $(".action.search");
  }

  get signInBtn() {
    return $("//div[@class='panel header']//a[contains(text(),'Sign In')]");
  }

  get cartQuantity() {
    return $(".counter.qty .counter-number");
  }

  get cartQuantityWrapper() {
    return $("(//*[@class='counter qty'])[1]");
  }

  get cartButton() {
    return $(".action.showcart");
  }

  get cartPopUpProductTitle() {
    return $("a[data-bind='attr: {href: product_url}, html: product_name']");
  }

  get cartPopUpSizeAndColorDetails() {
    return $("span[role='tab']");
  }

  get cartPopUpSize() {
    return $("(//span[@data-bind='text: option.value'])[1]");
  }

  get cartPopUpColor() {
    return $("(//span[@data-bind='text: option.value'])[2]");
  }

  get viewAndEditCartButton() {
    return $("//span[normalize-space()='View and Edit Cart']");
  }

  get customerMenuToggleButton() {
    return $("div[class='panel header'] button[type='button']");
  }

  get signOutBtn() {
    return $("//div[@aria-hidden='false']//a[normalize-space()='Sign Out']");
  }
}

export default new Navbar();
