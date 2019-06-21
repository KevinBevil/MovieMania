var header = new Vue({
  el: '[vue="header"]',
  data() {
    return {};
  },
  template: `
        <div class="row">
            <div class="col-12 d-flex justify-content-between align-items-center">
                <a href="/" id="logo">Movie Mania</a>
                <div class="text-right signin-nav">
<<<<<<< HEAD
                    <div id="my-signoff2"></div>
=======
                    <div id="my-signoff2">
                        <a class="mb-2" href="#" onclick="signOut();">Sign out</a>
                        Logged in as <span id="user-name"></span>
                        <img id="user-image">
                    </div>
>>>>>>> 2853eedc51829ba4aebbdf3833dde62f3760393d
                    <div id="my-signin2"></div>
                </div>
            </div>
        </div>
    `
});
