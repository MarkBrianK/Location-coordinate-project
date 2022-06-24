  async function getData(){ 
    let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    let data =await response.json()
    const {latitude, longitude} = data
    console.log(data.latitude)
    console.log(data.longitude)
  }
  getData()
  document.getElementById("location").addEventListener("click", button)
function button(){
   alert (`Disclaimer: This apllication is still in the development stages`)
}