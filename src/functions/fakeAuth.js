const fakeAuth = {
  isAuthenticated: false,
  signin: function (callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout: function (callback) {
    this.isAuthenticated = false;
  }
}

export { fakeAuth }