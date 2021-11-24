const fakeAuth = {
  isAuthenticated: false,
  signin: function (callback) {
    this.isAuthenticated = true;
    console.log('signed in!' + this.isAuthenticated)
    setTimeout(callback, 100);
  },
  signout: function (callback) {
    this.isAuthenticated = false;
    console.log(this.isAuthenticated)
  }
}

export { fakeAuth }