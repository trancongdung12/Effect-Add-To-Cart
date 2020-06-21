$(document).on('click', '.btn-add-cart', function(e) {
    e.preventDefault();
    if ($(this).hasClass('disable')) {
        return false;
    }
    $(document).find('.btn-add-cart').addClass('disable');

    var parent = $(this).parents('.thumbnail');
    var cart = $(document).find('#shopping-cart');
    var itemImg = parent.find('img').attr('src');
    // var itemImg = $(this).closest('.thumbnail').find('img').eq(0);
    // flyToElement($(itemImg), $('.cart_anchor'));
    var parTop = parent.offset().top;
    var parLeft = parent.offset().left;
    $('<img />', {
        class: 'img-product-fly',
        src: itemImg
    }).appendTo('body').css({
        'top': parTop,
        'left': parseInt(parLeft) + parseInt(parent.width()) - 50,
        'display': 'block'
    });
    setTimeout(function() {
        $(document).find('.img-product-fly').css({
            'top': cart.offset().top,
            'left': cart.offset().left
        });
        setTimeout(function() {
            $(document).find('.img-product-fly').remove();
            $(document).find('.btn-add-cart').removeClass('disable');
        }, 1000);
    }), 2000;
});