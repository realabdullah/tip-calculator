document.getElementById('people').addEventListener('keyup', function (event) {
  if (event.code === 'Enter') {
    event.preventDefault()
    let bill = document.getElementById('bill').value
    let people = document.getElementById('people').value

    let tipPercents = document.getElementsByName('tip-percent')

    var selectedPercent = Array.from(tipPercents).find(percent => percent.checked)

    let tip = 1 + (selectedPercent.value / 100)
    let totalTip = bill * tip

    let totalPerPerson = totalTip / people

    let totalTipPerPerson = totalTip - bill

    let eachPersonTip = totalTipPerPerson / people

    document.querySelector('.tip__amount').innerHTML = '$' + eachPersonTip.toFixed(2)

    document.querySelector('.total__amount').innerHTML = '$' + totalPerPerson.toFixed(2)
  }
})

document.getElementById('reset').onclick = function () {
  document.querySelector('#bill').value = ''
  document.querySelector('#people').value = ''
  document.querySelector('.tip__amount').innerHTML = '$0.00'
  document.querySelector('.total__amount').innerHTML = '$0.00'
}