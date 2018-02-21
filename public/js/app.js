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

//Modal post
$('#post-modal').on('click', () => {
    $('#post-modal').addClass('waves-effect waves-light modal-trigger');

    const modalPostContent = `<div class="row">
        <div class="col offset-l4 post-header">
            <input type="text" name="" value="" placeholder="Title" class="title post-header" autofocus>
        </div>
        <textarea name="text" id="texto" class="text-area-height" placeholder="¿Qué estas pensando?" type="text"></textarea>
        <hr></div>`

    const modalPostFooter = `<a id="btn-post" href="#!" class="modal-action modal-close waves-effect waves-green btn-flat teal darken-1 white-text">
        <i class="material-icons right">send</i>Public</a>`

    $('.modal-content').html(modalPostContent);
    $('.modal-footer').html(modalPostFooter);

    $('#btn-post').on('click', post);
});

// Post de text
function post() {
    const postEstructure = `<div class="styleBox z-depth-5 col l5">
    <div class="title"><h5 class="center-align">${$('.post-header input').val()}</h5></div>
    <div class="styleLetter"><p class="styleLetterP">${$('#texto').val()}</p></div>
    <div class="right-align"><span class="styleLetter">${timeDate()}</span></div>
    </div>`;
    $('#post').prepend(postEstructure);
    $('.post-header input').val(' ');
    $('#texto').val(' ');
}

$('#btn-post').on('click', post);

// Post de Image
function image() {
    let imagen = $("#img-guardar");

    const imgEstructure = `<div class="styleBox z-depth-5 col l5">
    <img src="${imagen[0].src}" class="co l12"></img>
    <div class="right-align"><span class="styleLetter">${timeDate()}</span></div>
    </div>`;
    $('#post').prepend(imgEstructure);
}

function previewImage() {
    let file = (this.files[0].name).toString();
    let reader = new FileReader();

    reader.onload = function (e) {
        $('#modal1 img').attr('src', e.target.result);
    }
    reader.readAsDataURL(this.files[0]);
};

//Modal image
$('#img-modal').on('click', function () {
    $('#img-modal').addClass('waves-effect waves-light modal-trigger');
    $('.modal').addClass('modal-photo');
    const modalImgContent = `<div class="center">
                                <h6>Elige la imagen que deseas publicar</h6>
                            </div>
                            <form action="#">
                                <div class="file-field input-field">
                                    <div class="btn light-green accent-3">
                                        <i class="material-icons">linked_camera</i>
                                        <input id="file-select" type="file" multiple>
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" placeholder="Change your photo">
                                    </div>
                                </div>
                            </form>
                            <figure class="center">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzEiIGhlaWdodD0iMTgwIj48cmVjdCB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI2VlZSI+PC9yZWN0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9Ijg1LjUiIHk9IjkwIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MTcxeDE4MDwvdGV4dD48L3N2Zz4="
                                    alt="Previsualizacion Imagen" id="img-guardar" class="responsive-img post-img">
                            </figure>`

    const modalImgFooter = `<a id="btn-img" class="modal-action modal-close waves-effect waves-green btn-flat green white-text">
    <i class="material-icons right">send</i>Public</a>`

    $('.modal-content').html(modalImgContent);
    $('.modal-footer').html(modalImgFooter);

    //Preview Image
    $('input[type=file]').change(previewImage);
    $('#btn-img').on('click', image);
});