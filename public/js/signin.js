$("#my-signoff2").hide();
$("#my-signin2").hide();

function onSuccess(googleUser) {
  console.log("Logged in as: " + googleUser.getBasicProfile().getName());
  var user = googleUser.getBasicProfile().getName();
  var userEmail = googleUser.getBasicProfile().getEmail();
  var userPic = googleUser.getBasicProfile().getImageUrl();

  // $("footer").before(`<p><div class="user-info" id="user">${user}</div>
  // <div class="user-info" id="email">${userEmail}</div>
  // <div class="user-info" id="pic">${userPic}</div></p>`);
  // $(".user-info").hide();

  onSignIn(googleUser);

  $.get("/check/user", {
    email: userEmail
  }).then(function(response) {
    if (response) {
      storeData(response);
    } else {
      axios
        .post("/login", {
          userName: user,
          email: userEmail,
          pic: userPic
        })
        .then(function(response) {
          storeData(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  });

  $("#my-signin2").hide();
  $("#my-signoff2").show();
}

function storeData(response) {
  var userSpan = $("#user-name");
  userSpan.text(response.data.userName);
  userSpan.attr("data-id", response.data.id);
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
  if (authResult.code) {
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
      data: authResult.code
    });
  } else {
    // There was an error.
  }
}
