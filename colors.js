var Body = {
  setColor : function(value){
    // var target = document.querySelector('body');

    if(value === 'ON'){
        $('body').css('backgroundColor','black');
        $('body').css('color','white');
      // target.style.backgroundColor='black';
      // target.style.color='white';
    }
    else{
      $('body').css('backgroundColor','white');
      $('body').css('color','black');
      // target.style.backgroundColor='white';
      // target.style.color='black';
    }
  }
}
var Link = {
  setColor : function(color){
    // var link = document.querySelectorAll('a');
    // var i = 0;
    // while(i <link.length){
    //   link[i].style.color = color;
    //   i++;
    // }
    $('a').css('color',color); //이 홈페이지에 있는 모든  a 태그를 제어하겠다는 의미
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
