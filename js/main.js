function get_data(){
    $.ajax({
        url:"",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
        }
    })
}