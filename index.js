for (let i = 1; i <= 255; i++) {
    let output = ""
    if (i % 3 == 0) {
        output += "Fizz"
    }
    if (i % 5 == 0) {
        output += "Buzz"
    }
    if (i % 7 == 0) {
        output += "Bang"
    }
    if (i % 11 == 0) {
        output = "Bong"
    }
    if (i % 13 == 0) {
        let index = output.indexOf("B")
        output = index == -1 ? output + "Fezz" : output.slice(0, index) + "Fezz" + output.slice(index, output.length)
    }
    if (i % 17 == 0) {
        let outputArr = output.split(/(?=[A-Z])/)
        outputArr.reverse()
        output = outputArr.join('')
    }
    console.log(output.length ? output : i)
}