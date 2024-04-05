const adultPrice = 3140000
const childPrice = 3140000
const infantPrice = 785000

var totalAdultPrice = 0
var totalChildPrice = 0
var totalInfantPrice = 0
var total = 0

var adultPlus = document.getElementById('adult-plus')
var childPlus = document.getElementById('child-plus')
var infantPlus = document.getElementById('infant-plus')

var adultMinus = document.getElementById('adult-minus')
var childMinus = document.getElementById('child-minus')
var infantMinus = document.getElementById('infant-minus')

var adultNum = 1
var childNum = 0
var infantNum = 0

function formatString(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}

adultPlus.addEventListener('click', function(){
    adultNum = adultNum + 1
    totalAdultPrice = adultNum * adultPrice
    total = totalAdultPrice + totalChildPrice + totalInfantPrice
    document.getElementById('adult-price').innerHTML = formatString(totalAdultPrice)
    document.getElementById('number-adult').innerHTML = adultNum
    document.getElementById('total-price').innerHTML = formatString(total)
})

adultMinus.addEventListener('click', function () {
    if (adultNum > 1) {
        adultNum = adultNum - 1
        totalAdultPrice = adultNum * adultPrice
        total = totalAdultPrice + totalChildPrice + totalInfantPrice
        document.getElementById('adult-price').innerHTML = formatString(totalAdultPrice)
        document.getElementById('number-adult').innerHTML = adultNum
        document.getElementById('total-price').innerHTML = formatString(total)
    }
})

childPlus.addEventListener('click', function(){
    childNum = childNum + 1
    totalChildPrice = childNum * childPrice
    total = totalAdultPrice + totalChildPrice + totalInfantPrice
    document.getElementById('child-price').innerHTML = formatString(totalChildPrice)
    document.getElementById('number-child').innerHTML = childNum
    document.getElementById('total-price').innerHTML = formatString(total)
})

childMinus.addEventListener('click', function () {
    if (childNum > 1) {
        childNum = childNum - 1
        totalChildPrice = childNum * childPrice
        total = totalAdultPrice + totalChildPrice + totalInfantPrice
        document.getElementById('child-price').innerHTML = formatString(totalChildPrice)
        document.getElementById('number-child').innerHTML = childNum
        document.getElementById('total-price').innerHTML = formatString(total)
    }
})

infantPlus.addEventListener('click', function () {
    infantNum = infantNum + 1
    totalInfantPrice = infantNum * infantPrice
    total = totalAdultPrice + totalChildPrice + totalInfantPrice
    document.getElementById('infant-price').innerHTML = formatString(totalInfantPrice)
    document.getElementById('number-infant').innerHTML = infantNum
    document.getElementById('total-price').innerHTML = formatString(total)
})

infantMinus.addEventListener('click', function () {
    if (childNum > 0) {
        infantNum = infantNum - 1
        totalInfantPrice = infantNum * infantPrice
        total = totalAdultPrice + totalChildPrice + totalInfantPrice
        document.getElementById('infant-price').innerHTML = formatString(totalInfantPrice)
        document.getElementById('number-infant').innerHTML = infantNum
        document.getElementById('total-price').innerHTML = formatString(total)
    }
})

