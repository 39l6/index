function favico() {
    var canvas = document.createElement('canvas'),
        ctx,
        img = document.createElement('img'),
        link = document.createElement('link'),
        day = (new Date).getDate() + '';// en vez de toString
    
    if (canvas.getContext) {
      canvas.height = canvas.width = 16;
      ctx = canvas.getContext('2d');
      img.onload = function () {
        ctx.drawImage(this, 0, 0);
        ctx.font = 'bold 10px "helvetica", sans-serif';
        ctx.fillStyle = '#F0EEDD';
        if (day.length == 1) day = '0' + day;
        ctx.fillText(day, 2, 12);
        link.href = canvas.toDataURL('image/webp');
        document.body.appendChild(link);
      };
      img.src = 'image.webp';
    }
    
    }
    
    
    //https://stackoverflow.com/questions/6296574/dynamic-favicon-using-image-manipulation-similar-to-gmail-adding-a-count
