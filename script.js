function confirmar(){
    const dados = [
        {periodo: '2023-03-27', ingrediente_1: 'Pão Francês', ingrediente_2: 'Sonho', ingrediente_3: 'Café', ingrediente_4: 'Panqueca', ingrediente_5: 'Maria Mole', ingrediente_6: 'Pão de queijo'},
        {periodo: '2023-03-28', ingrediente_1: 'Brigadeiro', ingrediente_2: 'Café', ingrediente_3: 'Pão Francês', ingrediente_4: 'Pão de mel', ingrediente_5: 'Pão de queijo', ingrediente_6: 'Cocada'},
        {periodo: '2023-03-29', ingrediente_1: 'Achocolatado', ingrediente_2: 'Café', ingrediente_3: 'Pão de forma', ingrediente_4: 'Biscoito de Povilho', ingrediente_5: 'Maria Mole', ingrediente_6: 'Cocada'}
    ]
    let selecionar = document.getElementById('sel').value
    selel = selecionar.split('/')
    let period = []
    for(let i = 0; i <= 2; i++){
        period += dados[i].periodo.split('-')
    }
    console.log(period)
    let sect = document.getElementById('hide')
    if(sect.style.display === "none"){
        sect.style.display = "block"
        let lugar = document.getElementById('res')
        if(selel[0] == '27'){
            lugar.innerText = `Ingrediente 1: ${dados[0].ingrediente_1} 
            Ingrediente 2: ${dados[0].ingrediente_2} 
            Ingrediente 3: ${dados[0].ingrediente_3} 
            Ingrediente 4: ${dados[0].ingrediente_4}
            Ingrediente 5: ${dados[0].ingrediente_5} 
            Ingrediente 6: ${dados[0].ingrediente_6}`
        }else if(selel[0] == '28'){
            lugar.innerText = `Ingrediente 1: ${dados[1].ingrediente_1} 
            Ingrediente 2: ${dados[1].ingrediente_2} 
            Ingrediente 3: ${dados[1].ingrediente_3} 
            Ingrediente 4: ${dados[1].ingrediente_4}
            Ingrediente 5: ${dados[1].ingrediente_5} 
            Ingrediente 6: ${dados[1].ingrediente_6}`
        }else if(selel[0] == '29'){
            lugar.innerText = `Ingrediente 1: ${dados[2].ingrediente_1} 
            Ingrediente 2: ${dados[2].ingrediente_2} 
            Ingrediente 3: ${dados[2].ingrediente_3} 
            Ingrediente 4: ${dados[2].ingrediente_4}
            Ingrediente 5: ${dados[2].ingrediente_5} 
            Ingrediente 6: ${dados[2].ingrediente_6}`
        }else{
            lugar.innerText = `Não temos nada no cardapio!`
        } 
    }else{
        sect.style.display = "none"
    }
    
}





