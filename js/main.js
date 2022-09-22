function get_data(){
    $.ajax({
        url:"https://g9dc4cb308f2ee1-q9fl39ghuzydiw07.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/moto/moto",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)

            for(i=0;i<respuesta.items.length;i++){
                var keys = Object.keys(respuesta.items[i])
                var item = respuesta.items[i]
                for(j=0;j<keys.length;j++){
                    var key = keys[j]
                    console.log(item[key]+', ')
                    $('#resultado').append(item[key]+', ')
                }
                $('#resultado').append('<br>')
            }
        }
    })
}