<?php

               // QUICK NOTES
//echo,print, print r(prints arrays)  are used to print.
//superglobals- variables that dont need to be declared eg POST,SERVER
//variables are case sensitive but functions are not case sensitive
// var_dump($_POST);
print_r($_POST);
// var_dump($_SERVER);
   if(!empty($_POST)){
    //getting the data
       $name = $_POST['full_name'];
       $email = $_POST['Email'];
       $phone = $_POST['phone'];
       $github= $_POST['github'];
         

       //check for empty value
      if(is_null($name)){
         echo 'error';
        }
        else if($email !=""){
        echo 'error';
        }


        //Filter method
        if(filter_var($string, FILTER_VALIDATE_EMAIL)){
            echo 'valid email';
        }
        else{
            echo 'invalid email';
        }

        }
        else if(preg_match($pattern,$string)){
            
        }
      else{
  //when all is well
      $sql="INSERT INTO details(full_name,email,phone,github)
      VALUES('$full_name','$email','$phone','github')";


     $db = mysqli_connect('localhost','root','');
     $exec = mysqli_query($db,$sql);
      }
          

            



 $db= mysqli_connect('localhost','root','','');

 //if($db){
   
    // $sql = "INSERT INTO details'(name, email,phone,github) '
    // VALUES('$name','$email','$phone','$github')";",
    // $exec = mysqli_query($db,$sql);


    //         $query = mysqli_query($db,$sql);
    //         mysqli_execute($query);
    //         mysqli_close($db);}

 

?>