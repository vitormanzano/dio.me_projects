//ações 
//adicionar item
async function addItem(userCart,item){
    userCart.push(item)  //adiciona no array
}

//deletar item do carrinho
async function deleteItem(userCart,name){
    const index = userCart.findIndex((item) => item.name === name); //se o item.name for igual o name paramêtro

    if (index!== -1){
        userCart.splice(index,1); //"slice" Corta 1 na frente posicao index, ou seja, corta  a posição index apenas! 
    }
}

//remover item(quantidade)
async function removeItem(userCart,index){
    const indexFound = usercart.findIndex((p) => p.name === item.name)
    
    if (indexFound == -1){
        console.log("Item não encontrado");
        return;
    }
    
    //item >1 subtrair
    if(userCart[indexFound].quantity > 1){
        usercart[indexFound].quantity -=1;
        return;
    }

    //4. caso item = 1 deletar
    if(userCart[indexFound].quantity ==1){
        userCart.splice(indexFound,1)
    }
}

//calcular o total de itens
async function calculateTotal(userCart){
    const result  = userCart.reduce((total,item) => total + item.subtotal(),0) //interage com os itens e reduz aum valor
    console.log(`\n🛒 ${result}`);
}

async function displayCart(userCart){
    console.log("\nShopee cart list: ")
    userCart.forEach((item,index) => {
        console.log(`${index + 1}. ${item.name} -  R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
    })     
}

export {
    addItem,calculateTotal,deleteItem,removeItem,displayCart
}
