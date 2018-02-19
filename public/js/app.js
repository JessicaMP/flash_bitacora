//Materialize modal
(function begin() {
    $('.modal').modal();
})();

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

// Post de texto
function post() {
    const postEstructure = `<div class="styleBox">
    <div class="title"><h5 class="center-align">${$('.post-header input').val()}</h5></div>
    <div class="styleLetter"><p class="styleLetterP">${$('#texto').val()}</p></div>
    <div>
    <div class="left-align col s5"><span class="styleLetter">${timeDate()}</span></div></div>
    </div>`;
    $('#post').prepend(postEstructure);
}

$('#btn-post').on('click', post);
