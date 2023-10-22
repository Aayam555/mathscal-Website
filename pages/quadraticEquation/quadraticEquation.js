solve = () => {
    // Getting value from user
    a = document.getElementById('a').value
    b = document.getElementById('b').value
    c = document.getElementById('c').value

    // Solving quadratic equation
    let insideSquareRoot = b**2 - (4*a*c)
    let ans1 = `(${-b} + &#8730;${insideSquareRoot})/${2*a}`
    let ans2 = `(${-b} - &#8730;${insideSquareRoot})/${2*a}`

    if (insideSquareRoot > 0){
        ans1 = (-b + Math.sqrt(insideSquareRoot))/2*a
        ans2 = (-b - Math.sqrt(insideSquareRoot))/2*a
    }

    // Displaying answers
    let answers = `${ans1} and ${ans2}`

    document.getElementById('display').innerHTML = answers
}