let color = ['#F0EEDD','blue','pink'];

function faviconD() {
    let canvas = document.createElement('canvas');
        canvas.height = canvas.width = 16;
    let ctx = canvas.getContext('2d');
    
    let link = document.createElement('link');
    
    let day = (new Date).getDate() + '';// en vez de toString
    
    fondo(ctx);
    ctx.font = 'bold 10px "helvetica", sans-serif';
    ctx.fillStyle = color[0];
    if (day.length == 1) day = '0' + day;
    ctx.fillText(day, 5, 15);
       
    link.rel = 'icon';
    link.type='image/x-icon';
    link.href = canvas.toDataURL();
    
    return document.head.appendChild(link);
}


function fondo(c){
    var x = 0;
    var y = 0;
    var sx = 5; 
    var sy = 5;
    for(var i = 0; i<color.length; i++){
        c.beginPath();
        c.rect(x, y, sx, sy);
        c.fillStyle = color[i];
        c.fill();
        x = x + sx;
        y = y + sy;
    }

} 
faviconD();
//sigue dando error en favicon github, pero si pinta
  
    //https://stackoverflow.com/questions/6296574/dynamic-favicon-using-image-manipulation-similar-to-gmail-adding-a-count
