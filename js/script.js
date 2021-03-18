
$('div').start('click', function(){
   $(this).html('Добавление класса проведено успешно')
   $(this).classAdd('active');
});

$('div').start('dblclick', function(){
   $(this).html('Удаление класса проведено успешно')
    $(this).classRemove('active');
});
