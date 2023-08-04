$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown()
    })
    $('#cancel-button').click(function(){
        $('form').slideUp()
    })
    $('form').on('submit', function(e){
        e.preventDefault()
        const inderecoNovaImagem= $('#inserir-imagem-url').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${inderecoNovaImagem}">`).appendTo(novoItem)
        $(`
            <div class="overlay-imagens">
                <a 
                    href="${inderecoNovaImagem}" target="_blank">Ver a imagem em tela cheia
                </a>
            </div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(600)
        $('#inserir-imagem-url').val('')
    })
})