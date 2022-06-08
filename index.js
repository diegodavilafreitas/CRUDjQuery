// https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=crud-data-table-for-database-with-modal-form

$(document).ready(function(){
    var modal = $('#modal');
    var btnAdd = $('#btnAdd');
    var formBtn = $('#formBtn');
    var removeBtn = $('.remove');
    var edditBtn = $('.eddit');
    modal.hide();
    btnAdd.click(function(){
        modal.fadeIn('normal');
    })    
    formBtn.click(function(){
        console.log('funciono')
        // inputs Modal
        var title = $('#title').val();
        var author = $('#author').val();
        var genre = $('#genre').val();
        var price = $('#price').val();
        var pass = false;
        if(isNaN(parseInt(price))){
            alert('EL PRECIO NO ES VALIDO');
            pass = false
        }else{
            pass = true;
        }
        if(title.length>0&&author.length>0){
            pass = true
        }else{
            alert('HAY ALGUN CAMPO SIN COMPLETAR')
            pass= false;
        }
        if(pass==true){
            añadir();
        }
        //Funciones    
        function añadir(){
            $('#tbTable').append(`
            <tr>
                <td>${title}</td>
                <td>${author}</td>
                <td>${genre}</td>
                <td>${price}</td>
                <td>
                    <input type="button" name="eddit" class="eddit" value="E">
                    <input type="button" name="remove" class="remove" value="R">
                </td>
            </tr>
            `)
            modal.fadeOut();
        }
    })
    removeBtn.click(function(){
        console.log('entra')
        $(this).eq(0).parent().parent().remove();

    })
    edditBtn.click(function(){

        var tds = document.get

    })

    


})
