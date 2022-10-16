

function sumMix( num ) {
    const toNumber = num.map(Number)

    const soma = toNumber.reduce ( (ac, at) => {
        return ac + at
    })
    console.log(soma)
    
}

sumMix([25, 30, 10, "30", "5"])