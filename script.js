document.getElementById('goBtn').addEventListener('click', function () {

  function error () {
    document.getElementById('errorSpan').style.opacity = '1'
    setTimeout(function () {
      document.getElementById('errorSpan').attributes.removeNamedItem('style')
    }, 1500)
  }

  let json = document.getElementById('json').value

  function checkValue (key, value) {
    if (key === undefined && value === undefined) {
      return undefined
    } else return value
  }

  try {
    let objJson = JSON.parse(json)
    document.getElementById('formattedJSON').textContent = JSON.stringify(objJson, checkValue, 5)
  } catch (e) {
    error()
  }

})