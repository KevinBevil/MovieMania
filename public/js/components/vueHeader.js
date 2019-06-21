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
                    <div id="my-signoff2"></div>
                    <div id="my-signin2"></div>
                </div>
            </div>
        </div>
    `
});
