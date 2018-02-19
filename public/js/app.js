//Materialize modal
(function begin() {
    $('.modal').modal();
})();

//Function Time
const timeDate = () => {
    let f = new Date();
    let time = f.getHours() + ":" + f.getMinutes();
    let timeAbsolute = '';

    if (f.getHours() <= 12) {
        timeAbsolute = time + ' AM';
    } else {
        timeAbsolute = time + ' PM';
    }
    return timeAbsolute;
}

// Post de text
function post() {
    const postEstructure = `<div class="styleBox">
    <div class="title"><h5 class="center-align">${$('.post-header input').val()}</h5></div>
    <div class="styleLetter"><p class="styleLetterP">${$('#texto').val()}</p></div>
    <div class="right-align"><span class="styleLetter">${timeDate()}</span></div>
    </div>`;
    $('#post').prepend(postEstructure);
    $('.post-header input').val(' ');
    $('#texto').val(' ');
}

$('#btn-post').on('click', post);

//Preview Image
$('input[type=file]').change(function () {
    let file = (this.files[0].name).toString();
    let reader = new FileReader();

    reader.onload = function (e) {
        $('#modal2 img').attr('src', e.target.result);
    }
    reader.readAsDataURL(this.files[0]);
});

// Post de Image
function image() {
    let imagen = $("#img-guardar");

    const imgEstructure = `<div class="styleBox">
    <img src="${imagen[0].src}" class="post-img"></img>
    <div class="styleLetter"><p class="styleLetterP">${$('#texto').val()}</p></div>
    <div class="right-align"><span class="styleLetter">${timeDate()}</span></div>
    </div>`;
    $('#post').prepend(imgEstructure);
}

$('#btn-img').on('click', image);
