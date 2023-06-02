class ProductPage {
  get sizeOptions() {
    return $$(".swatch-attribute.size .swatch-option");
  }

  get colorOptions() {
    return $$(".swatch-attribute.color .swatch-option");
  }

  get addToCartButton() {
    return $("#product-addtocart-button");
  }

  get addToCartSuccessMessage() {
    return $(
      "//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']"
    );
  }
}

export default new ProductPage();
