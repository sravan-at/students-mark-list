const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')
const tBody = document.querySelector('tbody')
button.addEventListener('click', function () {
    createTr()
})

let a = 0

function createTr() {
    a++
    let trId = 'tr' + a
    let tr = document.createElement('tr')
    tBody.append(tr)
    tr.setAttribute('id', trId)

    createTd(trId)
    createMarkList(trId)
}

function createTd(trId) {
    for (let i = 1; i <= 11; i++) {
        document.getElementById(trId).append(document.createElement('td'))
    }
}

function createMarkList(trId) {
    let td = document.getElementById(trId).querySelectorAll('td')
    let totalMark = parseInt(inputs[2].value) + parseInt(inputs[3].value) + parseInt(inputs[4].value) + parseInt(inputs[5].value) + parseInt(inputs[6].value)
    td[0].innerText = a
    td[1].innerText = inputs[0].value
    td[2].innerText = inputs[1].value
    td[3].innerText = inputs[2].value
    td[4].innerText = inputs[3].value
    td[5].innerText = inputs[4].value
    td[6].innerText = inputs[5].value
    td[7].innerText = inputs[6].value
    td[8].innerText = totalMark
    td[9].innerText = totalMark / 5 + '%'
    checkGrade(td, totalMark)
    checkMinimunMark(td)
    removeInputValue()
}

function checkGrade(td, totalMark) {
    let totalPercentage = totalMark / 5
    let totalGrade = parseInt(totalPercentage / 10)

    switch (totalGrade) {
        case 10: td[10].innerText = 'A+'; break
        case 9: td[10].innerText = 'A+'; break
        case 8: td[10].innerText = 'A'; break
        case 7: td[10].innerText = 'B+'; break
        case 6: td[10].innerText = 'B'; break
        case 5: td[10].innerText = 'C'; break
        case 4: td[10].innerText = 'D'; break
        default: td[10].innerText = 'Fail', td[10].style.color = 'red';
    }
}

function removeInputValue() {
    inputs[0].value = ''
    inputs[1].value = ''
    inputs[2].value = ''
    inputs[3].value = ''
    inputs[4].value = ''
    inputs[5].value = ''
    inputs[6].value = ''
}

function checkMinimunMark(td) {
    if (td[3].innerText < 40 || td[4].innerText < 40 || td[5].innerText < 40 || td[6].innerText < 40 || td[7].innerText < 40) {
        td[10].innerText = 'Fail'
        td[10].style.color = 'red'
        td[1].style.color = 'red'
    }
}