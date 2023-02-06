let init={
    Cart:[],
    total:[]
}


function AppReducer (state=init,{type,payload}){
    switch (type) {
        case "ADD":
          return {...state,Cart:[...state.Cart,payload]}
          case "Del_from_cart":
            return {...state,Cart:state.Cart.filter((item)=>item.id!==payload)}
           
          case 'ADD_PRICE':
               return {...state,total:[...state.total,payload]}
          case 'Del_PRICE':
                return {...state,total:state.total.filter((item)=>item!==payload)}
        default: return state ;
           
    }
}

export default AppReducer