
  async function getData(){ 
    let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    let data =await response.json()
     return data
  }
  getData().then(response=>{
    console.log(response)
  })