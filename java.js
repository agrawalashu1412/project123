



// free e-books
let searchboxing = document.getElementById('searchbox'); 

// for free apps
let searchbox2 = document.getElementById('searchbox');

// for free softwares
let searchbox3 = document.getElementById('searchbox');


// E-books  search bar

searchboxing.addEventListener('input', function () {
  let inputVal = searchboxing.value
  //  console.log('evntfired', inputVal.toUpperCase)
  inputVal = inputVal.toLowerCase()
  // console.log(inputVal)

  let contentcontainer = document.getElementsByClassName('contentContainer')
  Array.from(contentcontainer).forEach(function (e) {
    let content = e.getElementsByTagName('h5')[0].innerText
    if (content.includes(inputVal)) {
      // console.log('if working')
      e.style.display = 'block'
      // element.style.backgroundColor = 'red'
    }
    else {
      // console.log('else working')
      e.style.display = 'none'

    }
  })
})



// for free apps
searchbox2.addEventListener('input', function () {
  let inputVal1 = searchbox2.value
  //  console.log('evntfired', inputVal.toUpperCase)
inputVal1 = inputVal1.toLowerCase()
  // console.log(inputVal)

  let contentcontainer = document.getElementsByClassName('contentContainer')
  Array.from(contentcontainer).forEach(function (e) {
    let content = e.getElementsByTagName('h5')[0].innerText
    if (content.includes(inputVal1)) {
      // console.log('if working')
      e.style.display = 'block'
      // element.style.backgroundColor = 'red'
    }
    else {
      // console.log('else working')
      e.style.display = 'none'

    }
  })
})


// for free softwares



searchbox3.addEventListener('input', function () {
  let inputVal2 = searchbox3.value
  //  console.log('evntfired', inputVal.toUpperCase)
inputVal2 = inputVal2.toLowerCase()
  // console.log(inputVal)

  let contentcontainer = document.getElementsByClassName('contentContainer')
  Array.from(contentcontainer).forEach(function (e) {
    let content = e.getElementsByTagName('h5')[0].innerText
    if (content.includes(inputVal2)) {
      // console.log('if working')
      e.style.display = 'block'
      // element.style.backgroundColor = 'red'
    }
    else {
      // console.log('else working')
      e.style.display = 'none'

    }
  })
})




