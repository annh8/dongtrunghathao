export function customInit() {
    //$('#dl-menu').dlmenu();
    var TopFixMenu = $("#fixNav");
    // dùng sự kiện cuộn chuột để bắt thông tin đã cuộn được chiều dài là bao nhiêu.
    $(window).scroll(function () {
        // Nếu cuộn được hơn 150px rồi
        if ($(this).scrollTop() > 150) {
            // Tiến hành show menu ra    
            TopFixMenu.show();
        } else {
            // Ngược lại, nhỏ hơn 150px thì hide menu đi.
            TopFixMenu.hide();
        }
    }
    );
    $('#dl-menu').dlmenu();
}
export function updateHTML(elmId, value) {
    document.getElementById(elmId).innerHTML = value;
}
// functions for the api calls
export function loadNewVideo(id, startSeconds) {
    document.getElementById('ytapiplayer').innerHTML = '<iframe width="100%" height="300" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe>';
}
export function Change() {
    /*var change=document.getElementById('chude').value;  
    loadNewVideo(change,0)*/
    document.form1.submit();
}
export function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
export function runLazyload(){
    $("img.lazy").lazyload({
        effect : "fadeIn"
    });
}
