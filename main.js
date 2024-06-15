function openMap() {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    var isIOS = /iphone|ipad|ipod/.test(ua);
    
    var latitude = '-29.335278';
    var longitude = '-49.726944';
    var zoom = '12';
    
    if(isAndroid) {
      window.open(`geo:${latitude},${longitude}?z=${zoom}`);
    } else if(isIOS) {
      window.open(`http://maps.apple.com/?q=${latitude},${longitude}`);
    } else {
      window.open(`https://www.google.com/maps/@${latitude},${longitude},${zoom}z`);
    }
  }
  
  document.getElementById('meuBotaoMapa').addEventListener('click', openMap);

  