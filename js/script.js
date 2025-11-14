// O bloco (function () { ... })(); existente começa aqui.

// 1. Validação de Formulário com Bootstrap 5 (Vanilla JavaScript)
(function () {
    'use strict'

    // Seleciona o formulário
    var form = document.getElementById('contact-form');
    var validationAlert = document.getElementById('validation-alert');

    if (form) { // Adicionado if para segurança, caso o form não exista
        form.addEventListener('submit', function (event) {
            // Verifica a validade nativa do HTML5
            if (!form.checkValidity()) {
                event.preventDefault(); // Impede o envio se for inválido
                event.stopPropagation();
                
                // Mostra o alerta de erro global
                if (validationAlert) {
                    validationAlert.style.display = 'block';
                    // Oculta o alerta de erro após 3 segundos
                    setTimeout(function() {
                        validationAlert.style.display = 'none';
                    }, 3000);
                }
            } else {
                // Se for válido, você pode adicionar lógica de envio AJAX aqui.
                // Para fins de teste, você pode descomentar o preventDefault() e o alert.
                // event.preventDefault(); 
                // alert('Formulário enviado com sucesso!'); 
            }

            // Adiciona a classe que ativa os estilos de feedback do Bootstrap
            form.classList.add('was-validated');
        }, false);
    }
})();

// 2. Toggle de Detalhes dos Depoimentos (jQuery)
$(document).ready(function() {
    // Manipulador de clique para os cards de depoimento
    $(".testimonial-card").on("click", function() {
        var targetId = $(this).data("target");
        $(targetId).slideToggle(300);
        $(this).toggleClass("active-testimonial"); 
    });

    // 3. ROLAGEM SUAVE (SMOOTH SCROLL) - Novo código
    $('a[href^="#"]').on('click', function(e) {
        // Verifica se o link tem um hash e não é apenas '#'
        if (this.hash !== "" && this.hash.length > 1) {
            e.preventDefault();
            var hash = this.hash;

            // Anima a rolagem do corpo da página
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Adiciona o hash na URL após a animação
                window.location.hash = hash;
            });
        }
    });
});