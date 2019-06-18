$("#my-signoff2").hide();

function onSuccess(googleUser) {
  console.log("Logged in as: " + googleUser.getBasicProfile().getName());
  var user = googleUser.getBasicProfile().getName();
  var id_token = googleUser.getAuthResponse().id_token;
  var auth = (gapi.auth2.getAuthInstance());
  console.log(user);
  console.log(id_token);
  onSignIn(googleUser);
  $("#my-signin2").hide();
  $("#my-signoff2").show();
}

function onFailure(error) {
  console.log(error);
}
function renderButton() {
  gapi.signin2.render("my-signin2", {
    scope: "profile email",
    width: 240,
    height: 50,
    longtitle: true,
    theme: "dark",
    onsuccess: onSuccess,
    onfailure: onFailure
  });
}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log("User signed out.");
    $("#my-signoff2").hide();
    $("#my-signin2").show();
  });
}
$("#my-signin2").click(function() {
  // signInCallback defined in step 6.
  auth2.grantOfflineAccess().then(signInCallback);
});
function signInCallback(authResult) {
  if (authResult["code"]) {
    // Hide the sign-in button now that the user is authorized, for example:
    $("#my-signin2").attr("style", "display: none");

    // Send the code to the server
    $.ajax({
      type: "POST",
      url: "http://example.com/storeauthcode",
      // Always include an `X-Requested-With` header in every AJAX request,
      // to protect against CSRF attacks.
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      contentType: "application/octet-stream; charset=utf-8",
      success: function(result) {
        // Handle or verify the server response.
      },
      processData: false,
      data: authResult["code"]
    });
  } else {
    // There was an error.
  }
}
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
}
verify().catch(console.error);