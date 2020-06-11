$(document).ready(function(){
   $('a[href^="#"]').click(function (){
      //Сохраняем значение атрибута href в переменной:
      var target = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(target).offset().top//можно вычесть высоту меню
      }, 1000);
      return false;
   });
});