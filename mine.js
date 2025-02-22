
const forecast =require("./data10/forcast")
const geocode =require("./data10/geocode")
const countary = process.argv[2]

geocode( countary , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : "  , data)

    forecast( data.longtitude, data.latitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
     } )
 })



