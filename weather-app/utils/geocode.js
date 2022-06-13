const request = require('request');
const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYmlqYXk1IiwiYSI6ImNrczcyejZ4eTAyb3cyd2sxMm1saXpoejEifQ.jtUB3cX6wLHvSRErnaBUPw&limit=1';
    request({url:url, json:true},(error,response)=>{
        if(error){
            callback('unable to conect to weather services..!',undefined)
        }else if(response.body.features.length === 0){
            callback('unable to find the location!Try Another location...',undefined)
 
        }else{
           callback(undefined,{
               latitude : response.body.features[0].center[0],
               longitude : response.body.features[0].center[1],
               location : response.body.features[0].place_name

           })
        }

    })
}

module.exports = geocode

//--------------------------------------------------------------------------------------------------
//Extra

// //address -> long/lat

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmlqYXk1IiwiYSI6ImNrczcyejZ4eTAyb3cyd2sxMm1saXpoejEifQ.jtUB3cX6wLHvSRErnaBUPw&limit=1";

// request({ url:geocodeURL,json:true },(error,response)=>{

//     if(error){
//         console.log('Unable to connect to location service!')
//     }else if (response.body.features.length === 0){
//         console.log('unable to find the location!Try Another location...')
//     }else{
//     const longitude = response.body.features[0].center[0];
//     const latitude = response.body.features[0].center[1];
//     console.log(longitude,latitude);
//     }
// })