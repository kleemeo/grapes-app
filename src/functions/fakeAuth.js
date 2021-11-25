const fakeAuth = {
  isAuthenticated: false,
  signin(callback) {
    this.isAuthenticated = true;
    console.log(this.isAuthenticated)
    setTimeout(callback, 100);
  },
  signout(callback) {
    this.isAuthenticated = false;
  }
}

export { fakeAuth }