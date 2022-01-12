function changer(dieFunction){  
    document.getElementById('pictop').src = dieFunction.src;  
  }
  
  document.getElementById('pictop').addEventListener("dblclick", function() { 
    document.getElementById('pictop').src = 'images/rose.png';   
    document.getElementById('die1').src = 'images/die_04.png';   
    document.getElementById('die2').src = 'images/die_05.png'; 
    document.getElementById('die3').src = 'images/die_06.png'; 
  });

  // The code below is me trying to figure out how to 
  // change the big image back to the original image, and then,
  // I got out of hand and made other ways to change the images.
  // I'm sure there are many more efficient ways to do this,
  // I haven't learned any in class to this point, so...

  document.getElementById('pictop').addEventListener("click", function() { 
    document.getElementById('pictop').src = 'images/rose.png';   
    document.getElementById('die1').src = 'images/die_01.png';   
    document.getElementById('die2').src = 'images/die_02.png'; 
    document.getElementById('die3').src = 'images/die_03.png'; 
  });

  document.getElementById('die1').addEventListener("dblclick", function() { 
    document.getElementById('pictop').src = 'images/rose.png';   
    document.getElementById('die1').src = 'images/die_06.png';   
    document.getElementById('die2').src = 'images/die_02.png'; 
    document.getElementById('die3').src = 'images/die_06.png'; 
  });

  document.getElementById('die2').addEventListener("dblclick", function() { 
    document.getElementById('pictop').src = 'images/rose.png';   
    document.getElementById('die1').src = 'images/die_04.png';   
    document.getElementById('die2').src = 'images/die_04.png'; 
    document.getElementById('die3').src = 'images/die_01.png'; 
  });

  document.getElementById('die3').addEventListener("dblclick", function() { 
    document.getElementById('pictop').src = 'images/rose.png';   
    document.getElementById('die1').src = 'images/die_05.png';   
    document.getElementById('die2').src = 'images/die_05.png'; 
    document.getElementById('die3').src = 'images/die_05.png'; 
  });