function favico() {
    let canvas = document.createElement('canvas'),
        ctx,
        link = document.createElement('link'),
        day = (new Date).getDate() + '';// en vez de toString
       canvas.height = canvas.width = 16;
       ctx = canvas.getContext('2d');

       ctx.font = 'bold 10px "helvetica", sans-serif';
       ctx.fillStyle = '#F0EEDD';
       if (day.length == 1) day = '0' + day;
       ctx.fillText(day, 2, 12);
       link.href = canvas.toDataURL();
       
     return document.head.appendChild(link);
}

/*
for(i = 0; i<color.length ; i++){
    ctx.beginPath();
    ctx.rect(0, 0, 8, 8);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(8, 8, 8, 8);
    ctx.fillStyle = color[i];
    ctx.fill(); 


}   
  */  
    //https://stackoverflow.com/questions/6296574/dynamic-favicon-using-image-manipulation-similar-to-gmail-adding-a-count
