    // $.ajax({
    //     url:"https://g9dc4cb308f2ee1-q9fl39ghuzydiw07.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/moto/moto",
    //     type:"POST",
    //     data:myData,
    //     datatype:"JSON",
    //     success:function(respuesta){
    //         alert("Guardado")
    //         var clear= {
    //             id:$("#id_m").val(""),
    //             brand:$("#brand_m").val(""),
    //             model:$("#model_m").val(""),
    //             category_id:$("#categoryid_m").val(""),
    //             name:$("#name_m").val(""),
    //         }
    //     }
    // })

//**************** Moto ***********************/
function get_moto(){
    var link = "https://g9dc4cb308f2ee1-q9fl39ghuzydiw07.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/moto/moto"
    get(link)
    console.log("hola")
}
function push_moto(){
    var link = "https://g9dc4cb308f2ee1-q9fl39ghuzydiw07.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/moto/moto"
    let myData = {
        id:$("#reto2ID_moto").val(),
        brand:$("#reto2BRAND_moto").val(),
        model:$("#reto2MODEL_moto").val(),
        category_id:$("#reto2CATEGORY_ID_moto").val(),
        name:$("#reto2NAME_moto").val(),
    }
    push(myData,link)
}
function put_moto(){
    var link = "https://g9dc4cb308f2ee1-q9fl39ghuzydiw07.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/moto/moto"
    let myData = {
        id:$("#reto2ID_moto").val(),
        brand:$("#reto2BRAND_moto").val(),
        model:$("#reto2MODEL_moto").val(),
        category_id:$("#reto2CATEGORY_ID_moto").val(),
        name:$("#reto2NAME_moto").val(),
    }
    put(myData,link)
}

//**************** Client *********************/
function get_client(){
    console.log(1)
    var link = "https://g9dc4cb308f2ee1-q9fl39ghuzydiw07.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client"
    get(link)
}
function push_client(){
    var link = "https://g9dc4cb308f2ee1-q9fl39ghuzydiw07.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client"
    let myData = {
        id:$("#reto2ID_client").val(),
        name:$("#reto2NAME_client").val(),
        email:$("#reto2EMAIL_client").val(),
        age:$("#reto2AGE_client").val(),
    }
    push(myData,link)
}
function put_client(){
    var link = "https://g9dc4cb308f2ee1-q9fl39ghuzydiw07.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client"
    let myData = {
        id:$("#reto2ID_client").val(),
        name:$("#reto2NAME_client").val(),
        email:$("#reto2EMAIL_client").val(),
        age:$("#reto2AGE_client").val(),
    }
    put(myData,link)
}

// *************** Message ********************
function get_message(){
    var link = "https://g9dc4cb308f2ee1-q9fl39ghuzydiw07.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message"
    get(link)
}
function push_message(){
    var link = "https://g9dc4cb308f2ee1-q9fl39ghuzydiw07.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message"
    let myData = {
        id:$("#reto2ID_message").val(),
        messagetext:$("#reto2MESSAGETEXT_message").val(),
    }
    push(myData,link)
}
function put_message(){
    var link = "https://g9dc4cb308f2ee1-q9fl39ghuzydiw07.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message"
    let myData = {
        id:$("#reto2ID_message").val(),
        messagetext:$("#reto2MESSAGETEXT_message").val(),
    }
    put(myData,link)
}

// *************** Functions ******************
function get(link,){
    p=document.getElementById("overlay").classList.add('overlay-active')
    $.ajax({
        url:link,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            var item = respuesta.items
            console.log(item)
            r=document.getElementById('respuesta')
            var pop_ups = "tablessss"

            var keys = Object.keys(respuesta.items[0])

            //items
        
                    
            for(i=respuesta.items.length-1;i>-1;i--){
                var item = respuesta.items[i]
                var k = 0
                var pop_up = document.getElementById(pop_ups).insertRow(k)
                while (true) {
                    key = keys[k]
                    if (k < keys.length){
                        var cell = pop_up.insertCell(k)
                        cell.innerHTML = item[key]
                        k++
                        }
                    else {
                        break;
                        }
                }
            }

            var pop_up = document.getElementById(pop_ups).insertRow(0)
            for(i=0;i<keys.length;i++){
                key=keys[i]
                var cell = pop_up.insertCell(i)
                cell.innerHTML = "<h4>"+key+"</h4>"
            }
            
            //css
            m=document.getElementById("consult").classList.add('consult-active')
        }
    })
}
function push(myData,link){
    $.ajax({
        url:link,
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            alert("Guardado")
        }
    })
}
function put(myData,link){
    $.ajax({
        url:link,
        type:"PUT",
        data:JSON.stringify(myData),
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            alert("Actualizado")
        }
    })
}

var exit = document.getElementById("exit")
exit.addEventListener("click", function(){
    m=document.getElementById("consult").classList.remove('consult-active')
    p=document.getElementById("overlay").classList.remove('overlay-active')
    document.getElementById("tablessss").innerHTML = ""
})