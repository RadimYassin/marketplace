let init={
    Cart:[],
    totale:0
}


function AppReducer (state=init,{type,payload}){
    switch (type) {
        case "ADD":
          return {...state,Cart:[...state.Cart,payload]}
          case "Del_from_cart":
            return {...state,Cart:state.Cart.filter((item)=>item.id!==payload)}
           
          case 'ADD_PRICE':
            return {...state,totale:[]}
           
        default: return state ;
           
    }
}

export default AppReducer