var header = new Vue({
  el: '[vue="header"]',
  data() {
    return {};
  },
  template: `
        <div class="row">
            <div class="col-12 d-flex justify-content-between align-items-center">
                <a href="#" id="logo">Movie Mania</a>
                <div class="text-right signin-nav">
                    <div id="my-signoff2">
                        <a class="mb-2 d-block" href="#" onclick="signOut();">Sign out</a>
                        Logged in as <span id="user-name"></span>
                        <img id="user-image">
                        <br>
                    </div>
                    <div id="my-signin2"></div>
                </div>
            </div>
        </div>
    `
});
