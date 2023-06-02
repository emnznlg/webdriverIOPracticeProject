class CartPage {
  get productTitle() {
    return $(".col.item .product-item-name");
  }

  get productColorAndSizeInfo() {
    return $$(".item-options dd");
  }

  get estimateShippingButton() {
    return $(".title[data-role='title'][aria-controls='block-summary']");
  }

  get countryDropdown() {
    return $("(//select)[1]");
  }

  get stateDropdown() {
    return $("(//select)[2]");
  }

  get zipCodeInput() {
    return $("//*[@name='postcode']");
  }

  get flatRateCheckbox() {
    return $("#s_method_flatrate_flatrate");
  }

  get subTotal() {
    return $("td[class='col subtotal'] span[class='price']");
  }

  get orderTotal() {
    return $("span[data-bind='text: getValue()']");
  }

  get flatRatePrice() {
    return $(
      "span[data-bind='text: getFormattedPrice(method.price_excl_tax)']"
    );
  }
}

export default new CartPage();
