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
                        Logged in as <span id="user-name"></span>
                        <img id="user-image">
                        <br>
                        <a href="#" onclick="signOut();">Sign out</a>                        
                    </div>
                    <div id="my-signin2"></div>
                    <nav>
                        <ul class="d-flex">
                            <li><a href="#">Recently Rated</a></li>
                            <li><a href="#">Watch List</a></li>
                            <li><a href="#">User Profile</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    `
});
