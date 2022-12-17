function confirmar(){
    const dados = [
        {periodo: '2022-07-27', ingrediente_1: '20203,17773', ingrediente_2: '7673,987793', ingrediente_3: '8205,915039', ingrediente_4: '1217,679932', ingrediente_5 : '356,7152405', ingrediente_6: '699,184021',total: '38144'},
        {periodo: '2022-07-28', ingrediente_1: '21176,67578', ingrediente_2: '8415,883789', ingrediente_3: '8636,681641', ingrediente_4: '1464,556641', ingrediente_5 : '380,3089294', ingrediente_6: '738,3234863', total: '40704'},
        {periodo: '2022-07-29', ingrediente_1: '24198,91602', ingrediente_2: '10609,25879', ingrediente_3: '9623,415039', ingrediente_4: '2164,867188', ingrediente_5 : '442,8544312', ingrediente_6: '833,1877441', total: '47872'}
    ]
    let selecionar = document.getElementById('sel').value
    selel = selecionar.split('/')
    let sect = document.getElementById('hide')
    if(sect.style.display === "none"){
        sect.style.display = "block"
        let lugar = document.getElementById('res')
        if(selel[0] == '27'){
            lugar.innerText = `Ingrediente 1: ${dados[0].ingrediente_1} 
            Ingrediente 2: ${dados[0].ingrediente_2} 
            Ingrediente 3: ${dados[0].ingrediente_3} 
            Ingrediente 4: ${dados[0].ingrediente_4}
            Ingrediente 5: ${dados[0].ingrediente_4} 
            Ingrediente 6: ${dados[0].ingrediente_6}
            Total: ${dados[0].total}`
        }else if(selel[0] == '28'){
            lugar.innerText = `Ingrediente 1: ${dados[1].ingrediente_1} 
            Ingrediente 2: ${dados[1].ingrediente_2} 
            Ingrediente 3: ${dados[1].ingrediente_3} 
            Ingrediente 4: ${dados[1].ingrediente_4}
            Ingrediente 5: ${dados[1].ingrediente_4} 
            Ingrediente 6: ${dados[1].ingrediente_6}
            Total: ${dados[1].total}`
        }else if(selel[0] == '29'){
            lugar.innerText = `Ingrediente 1: ${dados[2].ingrediente_1} 
            Ingrediente 2: ${dados[2].ingrediente_2} 
            Ingrediente 3: ${dados[2].ingrediente_3} 
            Ingrediente 4: ${dados[2].ingrediente_4}
            Ingrediente 5: ${dados[2].ingrediente_4} 
            Ingrediente 6: ${dados[2].ingrediente_6}
            Total: ${dados[2].total}`
        }else{
            lugar.innerText = `Não temos nada no cardapio!`
        } 
    }else{
        sect.style.display = "none"
    }
    
}





