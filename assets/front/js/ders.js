$(document).ready(function () {
    $('.hesapla').click(function () {
        var sayi1 = parseInt($('.sayi1').val());
        var sayi2 = parseInt($('.sayi2').val());
        var islem = $('.islem').val();
        if(islem == '+'){
            sonuc = sayi1 + sayi2
        } else if(islem == '-'){
            sonuc = sayi1 - sayi2
        } else if(islem == '*'){
            sonuc = sayi1 * sayi2
        } else{
            sonuc = sayi1 / sayi2
        }
        $('.sonuc').text(sonuc)
    })
    var sayac_number = parseInt($('.sayac').attr('data-sayac'));
    $('.sayac').text(sayac_number)

    $('.dur').click(function () {
        clearInterval(deneme);
    })
    
    
    var deneme = setInterval(function  (){
        if (sayac_number > 0) {
            sayac_number = sayac_number - 1;
            $('.sayac').text(sayac_number)
        }
    }, 1000);
})