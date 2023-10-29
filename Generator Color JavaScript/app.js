const btn = document.querySelector('.button')
        const color = document.querySelector('.colorText')

        //Funcion para Generear el color Hexadecimal
        function generarColor(){
            let digitos = '0123456789ABCDEF'
            let colorHex = '#'

            for(let i = 0; i < 6; i++){
                let indiceGenerator = Math.floor(Math.random() * 16)
                colorHex += digitos[indiceGenerator] //Ira agregando los digitos aleatorios ala variable colorHex 
            }

            return colorHex
        }

        //Actulizando el texto del color y el Background Color
        btn.addEventListener('click', () => {
            let nuevoColor = generarColor()
            color.textContent = nuevoColor
            document.body.style.backgroundColor = nuevoColor
        })