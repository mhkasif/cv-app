// var plus=document.getElementById("plus");
// var pf=document.getElementById("picFile");





window.onload = function () {
    var ulMain = document.getElementById("ulMain");
    var con01 = document.getElementById("container01");
    var con02 = document.getElementById("container02");
    var con03 = document.getElementById("container03");
    var con04 = document.getElementById("container04");
    var body = document.querySelector("body");
    var db = firebase.database().ref();
    // var title=document.getElementById("title");      
    var intro = document.getElementById("homeInfo");
    var btn = document.getElementById("next");
    var auth = firebase.auth();
    var title = document.getElementById("homeProf");
    var homeImg = document.getElementById("homeImg");
    // var education=document.getElementById("edu");
    // var skill=document.getElementById("skill");
    // var btn2=document.getElementById("btn2");
    var file = document.getElementById("picFile");
    // var dbStorage=firebase.storage().ref("pics/");
    var name = document.getElementById("name");
    var cam = document.getElementById("cam");
    var userDet = null;
    var dbStorage = null;
    var counter = 0;
    var arrInfo = [];
    var arrHeading = [];
    var dpLoad = document.getElementById("dpLoad");
    // var arrFile=[];
    // var fileFunction=[];




    ulMain.addEventListener("click", function (e) {

        con01.style.opacity = "1";
        con02.style.opacity = "1";
        con03.style.opacity = "1";
        con04.style.opacity = "1";
        con01.style.transform = "translateX(0px)";
        con02.style.transform = "translateX(0px)";
        con03.style.transform = "translateX(0px)";
        con04.style.transform = "translateX(0px)";

        if (e.target.id === "homeMain") {
            con01.style.display = "block";

            con02.style.display = "none";
            con03.style.display = "none";
            con04.style.display = "none";
        }

        if (e.target.id === "resumeMain") {
            con02.style.display = "block";

            con01.style.display = "none";
            con03.style.display = "none";
            con04.style.display = "none";
        }

        if (e.target.id === "projectMain") {
            con03.style.display = "block";

            con01.style.display = "none";
            con02.style.display = "none";
            con04.style.display = "none";
        }

        if (e.target.id === "contactMain") {
            con04.style.display = "block";

            con01.style.display = "none";
            con02.style.display = "none";
            con03.style.display = "none";
        }
    });






    $('#file').click(function () {
        $('#picFile').trigger("click");
    });


    auth.onAuthStateChanged(function (user) {
        if (user !== null) {
            console.log("logged in");
            userDet = auth.currentUser.uid;
            // dbStorage=firebase.storage().ref(userDet+"/"+file);
            db.child("USERS").child(userDet).child("NAME").on("value", function (snap) {
                name.innerHTML = (snap.val().firstName + " " + snap.val().lastName).toUpperCase();
                //con.style.display="block";    


            });
        }
        else {
            console.log("Not logged In");
        }
    });




    // name.innerHTML=
    // ( function() {db.child("USERS").child(userDet).once("value",function(snap){
    // console.log(snap.val());
    // });
    // }());
    // var userDet=auth.currentUser.uid;

    //step1
    function Step1(title, intro) {
        this.title = title || "Edit Title/Profession";
        this.intro = intro || "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag anddrop me anywhere you like on your page. I’m a great place for you towrite more. Tell a story and let your users get to know you.";
    }

    btn.addEventListener("click", function () {


        // var titl = title.value;
        // var intr = intro.value;
        // step1 = new Step1(titl, intr);
        // var userDet = auth.currentUser.uid;
        // db.child("USERS").child(userDet).child("information").update(step1);
        // // console.log(userDet);
        // db.child("USERS").child(userDet).child("information").on("child_added", function (snap) {
        //     console.log(snap.val());
            con01.style.transform = "translateX(-500px)";
            con01.style.opacity = "0";
            setTimeout(function () {
                con01.style.display = "none";
                con02.style.display = "block";
            }, 505);
        // });



    });

    title.addEventListener("textInput", function () {
        if (title.value !== "" & intro.value !== "") {
            btn.style.cursor = "pointer";
            btn.style.opacity = "1";
        } else {

        }

    });

    /*title.addEventListener("mouseout",function(){
    if(title.value!=="" & intro.value!==""){
    btn.style.cursor="pointer";
    btn.style.opacity="1";
    }else{
    
    }
    
    });*/


    intro.addEventListener("textInput", function () {
        if (title.value !== "" & intro.value !== "") {
            btn.style.cursor = "pointer";
            btn.style.opacity = "1";
        } else {

        }

    });

    /*intro.addEventListener("mouseout",function(){
    if(title.value!=="" & intro.value!==""){
    btn.style.opacity="1";
    btn.style.cursor="pointer";
    }else{
    
    }
    
    });*/

    //end step1


    //step2 start

    // function Step2(education,prof,skill){
    //   this.education=education;
    //   this.prof=prof;
    //   this.skill=skill;
    // }

    // btn2.addEventListener("click",function(){
    // var edu=education.value;
    // var skil=skill.value;
    // var proff=prof.value;    
    // var step2=new Step2(edu,skil,proff);
    // var userDet=auth.currentUser.uid;

    // db.child("USERS").child(userDet).child("RESUME").update(step2);



    // });

    file.addEventListener("change", function (e) {
        cam.style.display = "none";
        // dpLoad.style.display="inlineBlock";
        $('#dpLoad').css('display', 'inline-block');

        var f = e.target.files[0];
        dbStorage = firebase.storage().ref(userDet + "/pics" + f.name);
        dbStorage.put(f).then(function (snapshot) {
            $('#dpLoad').css('display', 'none');
            dbStorage.getMetadata().then(function (metadata) {
                var aa = metadata.downloadURLs[0];
                var imageUrl = {
                    imageURL: aa
                }
                db.child("USERS").child(userDet).child("imageURL").update(imageUrl);
                cam.style.visibility = "hidden";
                homeImg.style.backgroundSize = "contain";
                homeImg.style.opacity = "1";
                homeImg.style.background = "url(" + aa + ")";
                console.log(aa);
                console.log("helloo");
            });
        });

        /*});
        */

    });
    // $('button').click( function() {
    //     $('input').trigger("click");
    // } );


    //---------------------end of firstSession


    // ---------------------start of 2ndSession

    var container2 = document.getElementById("container02");
    var resumeHeading1 = document.getElementById("resumeHeading1");
    var resumeHeading2 = document.getElementById("resumeHeading2");
    var resumeHeading3 = document.getElementById("resumeHeading3");
    var resumeText1 = document.getElementById("resumeText1");
    var resumeText2 = document.getElementById("resumeText2");
    var resumeText3 = document.getElementById("resumeText3");
    var next2 = document.getElementById("next2");
    var upload = document.getElementById("upload0");
    var uploadFile = document.getElementById("uploadFile");
    var append = document.getElementById("append");

    function Resume(resumeHeading1, resumeHeading2, resumeHeading3, resumeText1, resumeText2, resumeText3) {
        this.resumeHeading1 = resumeHeading1 || "PROFESSION";
        this.resumeHeading2 = resumeHeading2 || "SKILLS";
        this.resumeHeading3 = resumeHeading3 || "EDUCATION";
        this.resumeText1 = resumeText1 || "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag anddrop me anywhere you like on your page. I’m a great place for you towrite more. Tell a story and let your users get to know you.";
        this.resumeText2 = resumeText2 || "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag anddrop me anywhere you like on your page. I’m a great place for you towrite more. Tell a story and let your users get to know you.";
        this.resumeText3 = resumeText3 || "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag anddrop me anywhere you like on your page. I’m a great place for you towrite more. Tell a story and let your users get to know you.";

    }


    // $('#upload').click( function() {
    //     console.log("clicked");
    //     $('#uploadFile').trigger("click");
    // } );
    // uploadFile.addEventListener("change",function(e){
    //     var f = e.target.files[0];
    //     dbStorage=firebase.storage().ref(userDet+"/projects/"+f.name);
    //     dbStorage.put(f).then(function(snapshot) {

    //     dbStorage.getMetadata().then(function(metadata){
    //     var aa=metadata.downloadURLs[0];

    //     console.log(aa);
    //     console.log("helloo");
    //           }); 
    // })
    // });

    next2.addEventListener("click", function () {
        // var step2 = new Resume(resumeHeading1.value, resumeHeading2.value, resumeHeading3.value, resumeText1.value, resumeText2.value, resumeText3.value);
        // console.log(step2);
        // db.child("USERS").child(userDet).child("RESUME").update(step2);
        con02.style.transform = "translateX(-500px)";
        con02.style.opacity = "0";
        setTimeout(function () {
            con02.style.display = "none";
            con03.style.display = "block";
        }, 505);



    });

    // ---------------------end of 2ndSession
    //-------------------------start of 3rdSession

    var next3 = document.getElementById("next3");
    // var uploadProject=[];

    arrInfo[counter] = document.getElementById("projectInfo" + counter);
    arrHeading[counter] = document.getElementById("projectHeading" + counter);





    append.addEventListener("click", function () {
        // console.log("hello");
        ++counter;
        // console.log(counter);


        $("#kk").append("<div class='row'style='margin-left:50px;' >" +
            "<div class='col-lg-12' ><hr>" +

            "</div>" +
            "</div><div class='row' style='margin-left:50px;'>" +
            "<div class='col-lg-3 col-sm-4' style='margin-top:2%;margin-bottom:4%;text-align:center;position:relative;;margin-top:3%;'>" +

            "    <i id='upload" + counter + "'" + " class='fa fa-cloud-upload' aria-hidden='true' style='height: 100px;  line-height: 100px; white-space: nowrap;font-size:150px'></i>" +
            "<h4 >UPLOAD</h4>" +
            "</div>" +
            "<div class='col-lg-4 col-sm-8' style='margin-top:2%;'>" +
            "<div class='resumeText'>" +
            " <input id='projectHeading" + counter + "'" +
            "type='text' placeholder='PROJECT TITLE/ EDIT' style='background:transparent;font-size:30px;margin-bottom:2%;'>" +
            " <textarea id='projectInfo" + counter + "'" +
            " rows='5' cols='48' placeholder='Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font.Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.' style='font-size:14px;overflow:hidden;margin-top:0px'></textarea>" +
            " </div>" +
            "<input type='file'  id='" + counter + "' style='display:none;'>" +
            "</div>"
        )

        arrInfo[counter] = document.getElementById("projectInfo" + counter);
        arrHeading[counter] = document.getElementById("projectHeading" + counter);
        // console.log(arrInfo[counter]);
        // console.log(arrHeading[counter]);
        // arrFile[counter]=document.getElementById("file"+counter);
        // uploadProject[counter]=document.getElementById("upload"+counter);
        // console.log(uploadProject[counter]);
        // console.log(arrFile[counter]);


        // for(var i=1;i<=counter;i++){
        //     arrFile[counter].addEventListener("changed",function(){
        //      console.log("changed");
        //     });
        // }


        // next3.style.transform="translateY(0px)";
        // next3.style.paddingBottom="50px";


    });

    function Project(projectHeading, projectInfo) {
        this.projectHeading = projectHeading || "PROJECT TITLE/EDIT";
        this.projectInfo = projectInfo || "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag anddrop me anywhere you like on your page. I’m a great place for you towrite more. Tell a story and let your users get to know you.";
    }

    next3.addEventListener("click", function () {

        // for (var i = 0; i <= counter; i++) {
        //     var step3 = new Project(arrHeading[i].value, arrInfo[i].value);
        //     console.log(step3);
        //     db.child("USERS").child(userDet).child("PROJECTS").child("Project" + i).update(step3);
        // }

        con03.style.transform = "translateX(-500px)";
        con03.style.opacity = "0";
        setTimeout(function () {
            con03.style.display = "none";
            con04.style.display = "block";
        }, 505);

    });
    //Upload funcition, cloud upload button trigger file and then change event oocur
    //on it to save file in database
    body.addEventListener("click", function (e) {

        var str = new String(e.target.id);

        if (!(e.target.id.indexOf("upload"))) {

            $('#' + str[6]).trigger("click");
            document.getElementById('' + str[6]).addEventListener("change", function (e) {
                var f = e.target.files[0];
                dbStorage = firebase.storage().ref(userDet + "/project" + str[6] + "/" + f.name);
                dbStorage.put(f)
            });
        }
    });





    //------------------------end of 3rdSession




    //--------------------start of session04


    var contactEmail = document.getElementById("contactEmail");
    var contactFb = document.getElementById("contactFb");
    var contactCell = document.getElementById("contactCell");
    var contactAddress = document.getElementById("contactAddress");
    var saveBtn = document.getElementById("save");

    function Contact(contactEmail, contactFb, contactCell, contactAddress) {
        this.contactEmail = contactEmail || "example@email.com";
        this.contactFb = contactFb || "faceBook.com/userName";
        this.contactCell = contactCell || "+92 0900 78601";
        this.contactAddress = contactAddress || "BroadWay Street-04";
    }








    saveBtn.addEventListener("click", function () {
        var userDet = auth.currentUser.uid;
        var contact = new Contact(contactEmail.value, contactFb.value, contactCell.value, contactAddress.value);
        saveBtn.style.background = "transparent";
        console.log(contact)
        db.child("USERS").child(userDet).child("contact").update(contact);


        // sace 

        var titl = title.value;
        var intr = intro.value;
        step1 = new Step1(titl, intr);
        
        db.child("USERS").child(userDet).child("information").update(step1);
        // console.log(userDet);
        db.child("USERS").child(userDet).child("information").on("child_added", function (snap) {
            // console.log(snap.val());
            // con01.style.transform = "translateX(-500px)";
            // con01.style.opacity = "0";
            // setTimeout(function () {
            //     con01.style.display = "none";
            //     con02.style.display = "block";
            // }, 505);
        });


        var step2 = new Resume(resumeHeading1.value, resumeHeading2.value, resumeHeading3.value, resumeText1.value, resumeText2.value, resumeText3.value);
        console.log(step2);
        db.child("USERS").child(userDet).child("RESUME").update(step2);
        // con02.style.transform = "translateX(-500px)";
        // con02.style.opacity = "0";
        // setTimeout(function () {
        //     con02.style.display = "none";
        //     con03.style.display = "block";
        // }, 505);

        for (var i = 0; i <= counter; i++) {
            var step3 = new Project(arrHeading[i].value, arrInfo[i].value);
            console.log(step3);
            db.child("USERS").child(userDet).child("PROJECTS").child("Project" + i).update(step3);
        }

        // con03.style.transform = "translateX(-500px)";
        // con03.style.opacity = "0";
        // setTimeout(function () {
        //     con03.style.display = "none";
        //     con04.style.display = "block";
        // }, 505);


    });
   




    //--------------------end of session04




} //end of program