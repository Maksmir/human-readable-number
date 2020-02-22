module.exports = function toReadable(number) {
    let object = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred"
    }

    let hundreds = Math.floor(number / 100)
    let tens = number % 100
    let numberWords = ""

    let writeToString = (word) => {
        if (numberWords.length == 0) {
            numberWords += word
        } else {
            numberWords = numberWords + " " + word
        }
    }

    if (number === 0) {
        writeToString(object[number])
    } else if (hundreds > 0) {
        writeToString(object[hundreds])
        writeToString(object[100])
    }

    if (tens > 0 && tens < 21) {
        writeToString(object[tens])
    } else if (tens > 20) {
        writeToString(object[Math.floor(tens / 10) * 10])
        if (tens % 10 > 0) {
        writeToString(object[tens % 10])
        }
    }
    return numberWords
}
