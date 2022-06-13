const request = require('request');
const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=08aa5acd406c38d10e225dcf0130d798&query=' + latitude + ',' + longitude + '$units=f';

    request({url:url,json:true},(error,response)=>{
             if(error){
                 callback('Unable to connect to weather service!',undefined)
             }else if (response.body.error){
                 callback('unable to find the location!',undefined)
             }else{
                 callback(undefined , response.body.current.weather_descriptions[0] + " It is currently " + response.body.current.wind_speed + "kmph and the wind direction is " + response.body.current.wind_dir  );
        
             }
            
        
         })

}

module.exports = forecast;


//-------------------------------------------------------------Extra

// const url = 'http://api.weatherstack.com/current?access_key=08aa5acd406c38d10e225dcf0130d798&query=37.8267,-122.4233';

// request({url:url,json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if (response.body.error){
//         console.log('unable to find the location!')
//     }else{
//         console.log(response.body.current.weather_descriptions[0] + " It is currently " + response.body.current.wind_speed + "kmph and the wind direction is " + response.body.current.wind_dir  );

//     }
    

// })