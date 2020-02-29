window.onload=function(){

    var ulMain=document.getElementById("ulMain");
    var con01=document.getElementById("container01");    
    var con02=document.getElementById("container02");    
    var con03=document.getElementById("container03");    
    var con04=document.getElementById("container04");    
    var body=document.querySelector("body");
    var db=firebase.database().ref();    
    // var title=document.getElementById("title");      
    var intro=document.getElementById("homeInfo");  
    var btn=document.getElementById("next");
    var auth=firebase.auth();
    var title=document.getElementById("homeProf");
    var homeImg=document.getElementById("homeImg");
    // var education=document.getElementById("edu");
    // var skill=document.getElementById("skill");
    // var btn2=document.getElementById("btn2");
    var file=document.getElementById("picFile");
   
    var name=document.getElementById("name");
    var cam=document.getElementById("cam");
    var userDet=null;
    // var dbStorage=null;
    var counter=0;
    var arrInfo=[];
    var arrHeading=[];
    var dpLoad=document.getElementById("dpLoad");
    var next2=document.getElementById("next2");
    var next3= document.getElementById("next3");
    var resumeHeading1= document.getElementById("resumeHeading1");
    var resumeHeading2= document.getElementById("resumeHeading2");
    var resumeHeading3= document.getElementById("resumeHeading3");
    var resumeText1= document.getElementById("resumeText1");
    var resumeText2= document.getElementById("resumeText2");
    var resumeText3= document.getElementById("resumeText3");
    // var next2=document.getElementById("next2");
    var upload= document.getElementById("upload0");
    var uploadFile=document.getElementById("uploadFile");
    var append=document.getElementById("append");
    var projectInfo=document.getElementById("projectInfo");
    var projectHeading=document.getElementById("projectHeading");
    var projects=null;
    var counter=0;
    var contactEmail=document.getElementById("contactEmail");
    var contactFb=document.getElementById("contactFb");
    var contactCell=document.getElementById("contactCell");
    var contactAddress=document.getElementById("contactAddress");
    var outBtn=document.getElementById("outButton");


 
    
    

    
    auth.onAuthStateChanged(function(user) {
        if(user!== null){
            userDet=user.uid;
            // var dbStorage=firebase.storage().ref(userDet+"/pics/user.png");
            console.log("signin");
            console.log(userDet);
            // window.location.replace("http://google.com"); 
            db.child("USERS").child(userDet).on('value',function(snap){
                
                // adding NAME AND TITLE
                
                  name.textContent=(snap.val().NAME.firstName + " " +snap.val().NAME.lastName).toLocaleUpperCase();
                  title.textContent=snap.val().information.title;
                  homeInfo.textContent=snap.val().information.intro;
               
                  //adding resume

                  resumeHeading1.textContent=snap.val().RESUME.resumeHeading1;
                  resumeHeading2.textContent=snap.val().RESUME.resumeHeading2;
                  resumeHeading3.textContent=snap.val().RESUME.resumeHeading3;
                  resumeText1.textContent=snap.val().RESUME.resumeText1;
                  resumeText2.textContent=snap.val().RESUME.resumeText2;
                  resumeText3.textContent=snap.val().RESUME.resumeText3;


                  //project side

                  projects= snap.val().PROJECTS;
                  for(var prop in projects){
                      $("#kk").append("<div class='row'style='margin-left:50px;' >"+
                      "<div class='col-lg-12' ><hr>"+
                      
                      "</div>"+    
                      "</div><div class='row' style='margin-left:50px;'>"+
                      "<div class='col-lg-3 col-sm-4' style='margin-top:2%;margin-bottom:4%;text-align:center;position:relative;;margin-top:3%;'>"+
                      
                      "    <i id='upload" + counter +"'"+ " class='fa fa-cloud-upload' aria-hidden='true' style='height: 100px;  line-height: 100px; white-space: nowrap;font-size:150px'></i>"+
                      "<h4 >UPLOAD</h4>"+
                      "</div>"+
                      "<div class='col-lg-4 col-sm-8' style='margin-top:2%;'>"+
                      "<div class='resumeText'>"+
                      " <h2 id='projectHeading"+counter+"'"+'>'+projects[prop].projectHeading+
                      '</h2>'+
                      " <p id='projectInfo"+counter+"'"+'>'+
                      projects[prop].projectInfo + "</p>"+
                      " </div>"+
                       
                      "</div>")
                      counter++;
                  }
                 
                  //adding contacts
                  contactEmail.textContent=snap.val().contact.contactEmail;
                  contactFb.textContent=snap.val().contact.contactFb;
                  contactCell.textContent=snap.val().contact.contactCell;
                  contactAddress.textContent=snap.val().contact.contactAddress;
                  var aa= snap.val().imageURL.imageURL;
                  console.log(aa);
                  homeImg.style.backgroundSize="contain";
                  //homeImg.style.opacity="1";
                  homeImg.style.background="url(" + aa +")";
                  homeImg.style.opacity="1";
            });

            //adding image

                // dbStorage.getMetadata().then(function(metadata){
                //     console.log(metadata);
                // var aa=metadata.downloadURLs[0];
                // cam.style.visibility="hidden";
                // homeImg.style.backgroundSize="contain";
                // homeImg.style.opacity="1";
                // homeImg.style.background="url(" + aa +")";
                // console.log(aa);
                // console.log("helloo");
                    //   });

            
        }
        });




    next2.addEventListener("click",function(){
        // var step2= new Resume(resumeHeading1.value,resumeHeading2.value,resumeHeading3.value,resumeText1.value,resumeText2.value,resumeText3.value);  
        // console.log(step2);
        // db.child("USERS").child(userDet).child("RESUME").update(step2);
        con02.style.transform="translateX(-500px)";
        con02.style.opacity="0";
        setTimeout(function(){ 
            con02.style.display="none";
            con03.style.display="block";
         }, 505);
    
        
        
    });

    next3.addEventListener("click",function(){
        
            // for(var i=0;i<=counter;i++){
            // var step3= new Project(arrHeading[i].value,arrInfo[i].value);  
            // console.log(step3);
            // db.child("USERS").child(userDet).child("Project"+i).update(step3);
            // }
        
            con03.style.transform="translateX(-500px)";
            con03.style.opacity="0";
            setTimeout(function(){ 
                con03.style.display="none";
                con04.style.display="block";
             }, 505);
            
        });

        btn.addEventListener("click",function(){
            
            
                // var titl=title.value;
                // var intr=intro.value;
                // step1=new Step1(titl,intr);
                // var userDet=auth.currentUser.uid;
                // db.child("USERS").child(userDet).child("information").update(step1);
                // // console.log(userDet);
                // db.child("USERS").child(userDet).child("information").on("child_added",function(snap){
                //     console.log(snap.val());
                    con01.style.transform="translateX(-500px)";
                    con01.style.opacity="0";
                    setTimeout(function(){ 
                        con01.style.display="none";
                        con02.style.display="block";
                     }, 505);
            // });
            
            
            
            });
    


    ulMain.addEventListener("click",function(e){
        
            con01.style.opacity="1";
            con02.style.opacity="1";
            con03.style.opacity="1";
            con04.style.opacity="1";
            con01.style.transform="translateX(0px)";
            con02.style.transform="translateX(0px)";
            con03.style.transform="translateX(0px)";
            con04.style.transform="translateX(0px)";
        
            if(e.target.id === "homeMain"){
               con01.style.display="block";
        
               con02.style.display="none";
               con03.style.display="none";
               con04.style.display="none";
            }
        
            if(e.target.id === "resumeMain"){
                con02.style.display="block";
         
                con01.style.display="none";
                con03.style.display="none";
                con04.style.display="none";
             }
        
             if(e.target.id === "projectMain"){
                con03.style.display="block";
         
                con01.style.display="none";
                con02.style.display="none";
                con04.style.display="none";
             }
        
             if(e.target.id === "contactMain"){
                con04.style.display="block";
         
                con01.style.display="none";
                con02.style.display="none";
                con03.style.display="none";
             }
        });



        outBtn.addEventListener("click",function(){
            auth.signOut().then(function(){
                window.location.href="index.html"
            }
        );





            // console.log("SIgnou")
            // alert("heloloo");
        });




}//end 