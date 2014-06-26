//Updates the menu according to the current page url


var pageValues = ["whats-new", "organize", "view", "edit", "share"];
var defaultValue = "overview";
    
//We loop though each elm
for (var i=0; i < pageValues.length; i++){

    //We check for a match
    if(window.location.href.indexOf(pageValues[i]) > -1) {

        //We get the element with the same class name
        var theSelected = document.getElementsByClassName(pageValues[i]);

        //We add a new class to the parent
        theSelected[0].className += " activeLink";

        //If we found what we want we leave the loop
        break;
 
    }else{

        //We check if we are done looping
        if(i >= pageValues.length-1){

           //If we dint find what we are looking for we presume that we are on the default page 
           var theSelected =   document.getElementsByClassName(defaultValue);//We use the default value
           theSelected[0].className += " activeLink";
            
        }//Ends the if 

      
    }//ends the else


}//End  the looping





/* if(window.location.href.indexOf("aaaaa") > -1) {
       alert("your url contains what you are looking for");
    }else{
//alert("it does not contain anythang");
}*/