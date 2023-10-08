var start =0;
function postFunction(){
    if (start==0){
        var First1 = document.getElementById("text1").value;
        document.getElementById("topic1").innerHTML=First1;
        start++;
    }
    else if (start==1)
    {
        var First1 = document.getElementById("text1").value;
        document.getElementById("comment1").innerHTML=First1;
        start++;
    }
    else if (start==2)
    {
        var First1 = document.getElementById("text1").value;
        document.getElementById("comment2").innerHTML=First1;
        start++;
    }
}
function clearFunction(){
        document.getElementById("topic1").innerHTML="";
        document.getElementById("comment1").innerHTML="";
        document.getElementById("comment2").innerHTML="";
        start=0;
    
}
function postFunction2(){
    if (start==0){
        var First1 = document.getElementById("text1").value;
        document.getElementById("topic2").innerHTML=First1;
        start++;
    }
    else if (start==1)
    {
        var First1 = document.getElementById("text1").value;
        document.getElementById("comment3").innerHTML=First1;
        start++;
    }
    else if (start==2)
    {
        var First1 = document.getElementById("text1").value;
        document.getElementById("comment4").innerHTML=First1;
        start++;
    }
}
function clearFunction2(){
        document.getElementById("topic2").innerHTML="";
        document.getElementById("comment3").innerHTML="";
        document.getElementById("comment4").innerHTML="";
        start=0;
    
}
  window.onload = twitterLink;

        function myFunction() {
            window.location.href = "https://www.bbc.com/news/world-us-canada-37493165";
        }
        function myFunction2() {
            window.location.href = "https://www.anyrgb.com/en-clipart-22sfn";
        }