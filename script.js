var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
// country names with asia region
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data)
    // country names with asia region
    const country = result.filter((element)=>{
         return element.region==="Asia"
    })
    country.forEach(element => {
        console.log(element.name.common)
    });
    // country names with popultion<200000
    const country1 = result.filter((element1)=>{
        return element1.population<200000
   })
   country.forEach(element1 => {
       console.log(element1.name.common)
   });
   // country names with name,capital,flag
   result.forEach(element2 => {
       console.log(`country name:${element2.name.common}
       capital:${element2.capital}
       flag:${element2.flags.png}`)
   })
    // total population of the countries
    const total = result.reduce((sum,varaiable) => {
         sum=sum+varaiable.population
         return sum
    },0)
    console.log(total)
    //country that uses us dollar
    const us = result.filter((element3)=>{
        for (let i in element3.currencies){
           if(i==="USD"){
            return element3
           }
        }

    })
     us.forEach(element5=>{
        console.log(element5.name.common)
        
    })
}