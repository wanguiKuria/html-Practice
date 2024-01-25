function validate(){
     console.log(document.getElementById('full_name'));
     console.log(document.getElementById('phone'));
     console.log(document.getElementById('github'));
    //get values from HTML in javascript
    let name=document.getElementById('full_name').value;
    let phone=document.getElementById('phone').value;
    let github=document.getElementById('github').value;

    // console.log("name is :" +name+",phone is :"+phone+", github is :"+github);
     console.log("name is  :"+name);
     console.log("phone is :"+phone);
     console.log("github is:"+github);



     //Identify the correct formats of various input values
     //--name(alphabets only,special character[',])
     //--regular expressions[^a-zA-z/s]
     //startwith,startwith any,any,enswith,endany
     //

     const name_rejex = new RegExp("^[a-zA-Z/s']+$");
     const phone_rejex=/^[0-9]/;
     const github_rejex=/[^a-zA-z]+$/;

    console.log(name_rejex.test("Esther Kuria"));
    console.log(phone_rejex.test("0707928978"));
    console.log(github_rejex.test("esther"));

    //Test whether what the user has writtenis inline with the form
    //If not ask the user to enter the correct values
    //if so all is well continue



    




}