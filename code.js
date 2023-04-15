
function submit() {
    var right_container = window.document.getElementById('image_placeholder')
    var left_container = window.document.getElementById('register')
    var left_form = window.document.getElementById('left_form')
    var lf_text = window.document.getElementById('lf_text_container')
    var submit_re = window.document.getElementsByClassName('submit_container')[1]

    //left_container
    left_container.style.width = '40%'
    left_container.style.height = '100%'
    left_container.style.backgroundImage = 'url(images/pexels-ricky-esquivel-1580173.jpg)'
    left_container.style.margin = '0px'
    left_container.style.border = 'none'
    left_form.style.display = 'none'

    lf_text.style.display = 'block'
    submit_re.classList.add('right_button')

    //right_container
    right_container.style.width = '60%'
    right_container.style.background = 'gray'
}

function submit_up() {
    
}