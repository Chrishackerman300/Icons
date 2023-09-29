function Primo(x){
    let primo = true

    if(x != 1 && x!= 0){
        for(let i = 2; i<= x; i++){
            if(x % i === 0){
                if(x === i){
                    primo = true
                }
                else{
                    primo = false
                    return primo
                }
            }
        }
    }
    else{
        primo = false
    }

    return primo
}

const cantidad = prompt('Ingrese la cantidad a capturar:')

for(let i = 0; i < cantidad; i++){
    if(Primo(i)){
        console.log(i)
    }
}