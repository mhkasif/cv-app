(function() {
  var db = firebase.database().ref();
  console.log(db);
  var auth = firebase.auth();
  var em = document.querySelector("#email");
  var eml = document.querySelector("#logEmail");
  var pal = document.querySelector("#logPass");
  var pa = document.querySelector("#pass");
  var loginbtn = document.querySelector("#loginbtn");
  var signUp = document.querySelector("#signUpp");
  // var signOut=document.querySelector("#signOut");Out
  var first = document.querySelector("#firstName");
  var last = document.querySelector("#lastName");

  function UserData(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  var userId = null;

  signUp.addEventListener("click", function(e) {
    var email = em.value;
    var password = pa.value;
    var firstName = first.value;
    var lastName = last.value;
    var userObj = new UserData(firstName, lastName);
    console.log(email + password);
    console.log("hi");

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function(res) {
try {

  userId = res.uid;
  db.child("USERS")
    .child(userId)
    .child("NAME")
    .set(userObj);
  window.location.href = "home.html";
} catch (error) {
console.log(error);
}

})
      .catch(function(e) {
        document.querySelector("small").textContent = e.message;
      });

    // auth.onAuthStateChanged(function(user) {
    // if(user!== null){
    //     userId=user.uid;
    //     db.child("USERS").child(userId).set(userObj);
    //     //dB loop TODO

    //     //dB loop
    // }
    // });

    //retrieving data from database

    //data time
  });

  loginbtn.addEventListener("click", function(e) {
    var email = eml.value;
    var password = pal.value;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(function() {
        window.location.href = "render.html";
      })

      .catch(function(e) {
        document.querySelector("small").textContent = e.message;
        eml.focus();
      });

    // auth.onAuthStateChanged(function(user) {
    // if(user!== null){
    //     userId=user.uid;
    //     console.log("signin");
    //     // window.location.replace("http://google.com");
    //     db.on('value',function(snap){
    //         var us = snap.val().USERS;
    //         for(var prop in us){
    //             if(prop === userId){
    //                 console.log(us[prop]);
    //             }
    //         }
    //     });

    // }
    // });
  });

  // signOut.addEventListener("click",function(e){
  // auth.signOut();
  // console.log("SIgnou")
  // alert("heloloo");

  // });

  $(".form")
    .find("input, textarea")
    .on("keyup blur focus", function(e) {
      var $this = $(this),
        label = $this.prev("label");

      if (e.type === "keyup") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.addClass("active highlight");
        }
      } else if (e.type === "blur") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.removeClass("highlight");
        }
      } else if (e.type === "focus") {
        if ($this.val() === "") {
          label.removeClass("highlight");
        } else if ($this.val() !== "") {
          label.addClass("highlight");
        }
      }
    });

  $(".tab a").on("click", function(e) {
    e.preventDefault();

    $(this)
      .parent()
      .addClass("active");
    $(this)
      .parent()
      .siblings()
      .removeClass("active");

    target = $(this).attr("href");

    $(".tab-content > div")
      .not(target)
      .hide();

    $(target).fadeIn(600);
  });
})();
