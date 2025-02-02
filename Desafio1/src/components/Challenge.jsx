const Challenge = () => {
    const num1 = 7
    const num2 = 7
    const soma = () => {
        console.log(num1 + num2)
    }

    return (
        <div>
            <h1>Primeiro Numero: {num1} </h1>
            <h1>Secundo Numero: {num2} </h1>
            <button onClick={soma}>Clique para Somar</button>
        </div>
    )
}

export default Challenge