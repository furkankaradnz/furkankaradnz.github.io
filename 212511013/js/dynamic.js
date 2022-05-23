$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  $( function() {
    $( "#tabs" ).tabs();
  } );

  function grafik(){
    var xArray = [1923,1925,1927,1929,1931,1933,1934,1935,1936,1937,1938];
  var yArray = [30,40,50,55,40,45,55,75,90,100,120];
  
  
  var data = [{
    x: xArray,
    y: yArray,
    mode:"lines"
  }];
  
  var layout = {
    xaxis: {range: [1923, 1938], title: "Tarih"},
    yaxis: {range: [30, 120], title: "Miktar(Milyar$)"},  
    title: "Cumhuriyetin İlk Yıllarında Türkiye Ekonomisi"
  };
  
  Plotly.newPlot("myPlot", data, layout);
  }

  function ata(){
  function kisilik(ad, soyad, yas, goz) {
    this.ad = ad;
    this.soyad = soyad;
    this.yas = yas;
    this.goz = goz;
  }
  
  const ataturk = new kisilik(" Mustafa Kemal", "Atatürk", 57, "Mavi");
  
  document.getElementById("gozler").innerHTML =
  ataturk.ad + " " + ataturk.soyad + " " + ataturk.yas + " yaşında hayata gözlerini yumdu."; 
}

function mesaj() {alert('Umudunu kaybetme, zorlukların üstesinden elbet geleceksin :)');
  }

  function genis() {
    document.getElementById("myImg").style.objectFit = "cover";
  }

  function orme() {
    document.getElementById("sinir").style.outline = "thick solid #0000FF";
  }

  function ciz() {
    document.getElementById("cizgi").style.textDecorationColor = "red";
  }

  function cevir() {
  
    document.getElementById("kutu").style.msTransform = "rotate(20deg)"; 
    
    document.getElementById("kutu").style.transform = "rotate(20deg)"; 
  }

  function gizle() {
    document.getElementById("gizli").style.visibility = "hidden";
  }

  function mOver(obj) {
    obj.innerHTML = "Teşekkür Ederim"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Oku Üzerime Getir"
  }

  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }