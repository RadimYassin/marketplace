let init={
    Cart:[],
}


function AppReducer (state=init,{type,payload}){
    switch (type) {
        case "ADD":
          return {...state,Cart:[...state.Cart,payload]}
          case "Del_from_cart":
            return {...state,Cart:state.Cart.filter((item)=>item.id!==payload)}
           
        default: return state ;
           
    }
}

export default AppReducer