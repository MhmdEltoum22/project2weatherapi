const request =require ("request")


const forcast =(longtitude ,latitude, Callback)=>{
    const url ="http://api.weatherapi.com/v1/current.json?key=65e48cce33594cc198245101251902&q="+ longtitude +" " + latitude
    
    request({url , json:true},(error ,response)=>{
       
        if(error){
            Callback("Conn't reched the wibside",undefined)
        }else if(response.body.error ){
            Callback(response.body.error.message ,undefined)
        }else{
            Callback (undefined , response.body.location.name + " it is : " + response.body.current.condition.text 
                + "and tempriuser is : "  + response.body.current.temp_c )
            }
    })
    }
    module.exports=forcast