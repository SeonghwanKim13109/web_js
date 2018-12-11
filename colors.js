var Body = {
  setColor : function(value){
    var target = document.querySelector('body');
    if(value === 'ON'){
      target.style.backgroundColor='black';
      target.style.color='white';
    }
    else{
      target.style.backgroundColor='white';
      target.style.color='black';
    }
  }
}
var Link = {
  setColor : function(color){
    var link = document.querySelectorAll('a');
    var i = 0;
    while(i <link.length){
      link[i].style.color = color;
      i++;
    }
  }
}

function nightDayHandler(self){

  if(self.value === 'ON'){
    Body.setColor(self.value);
    self.value = 'OFF';
    Link.setColor("powderblue")
  }

  else if(self.value === 'OFF'){
    Body.setColor(self.value);
    self.value = 'ON';
    Link.setColor("blue");
    }
}
