class SearchResultsPage {
  get searchResultText() {
    return $(".base");
  }

  get searchResultProductTitles() {
    return $$(".product-item-link");
  }
}

export default new SearchResultsPage();
