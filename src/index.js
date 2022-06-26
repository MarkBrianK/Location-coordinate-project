  async function getData(){ 
    let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    let data =await response.json()
    const {latitude, longitude} = data
    document.getElementById('lat').textContent = latitude
    document.getElementById('long').textContent = longitude
  }
  
  getData()
  setInterval(getData, 1000)

  document.getElementsByClassName("btn").addEventListener("click", button)
function button(){
   alert (`Thank you for your response`)
}
const reviewForm = document.querySelector('form#review-form')
reviewForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const customerReview = document.getElementById("review").value
    const newReview = document.createElement('li')
    newReview.style.cursor = 'pointer'
    newReview.innerText = customerReview
    reviewList.appendChild(newReview)
    reviewForm.reset()
    newReview.addEventListener('click',(e)=>{
        e.preventDefault()
        newReview.remove()
    })
})
