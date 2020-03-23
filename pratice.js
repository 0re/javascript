var name = Olabimpe;

var course = ["html", "css", "javascript"];

function print(){
    var i;
    var write = document.getElementsByTagName('h1')[0];
    for(i = 1; i <= 200; i++){
      if((i % 2) == 0){
       continue;
      }
      write.innerHTML += i + '<br/>';
    }
   }
   print();