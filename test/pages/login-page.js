class LoginPage {
  get emailInput() {
    return $("#email");
  }

  get passwordInput() {
    return $("#pass");
  }

  get signInBtn() {
    return $(
      "//fieldset[@class='fieldset login']//span[contains(text(),'Sign In')]"
    );
  }
}

export default new LoginPage();
