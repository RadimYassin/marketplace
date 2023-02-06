let init={
    Cart:[],
    total:[]
}


function AppReducer (state=init,{type,payload}){
    switch (type) {
          case "ADD":
               return {...state,Cart:[...state.Cart,payload]}
          case "Del_from_cart":
                return {...state,Cart:state.Cart.filter((item)=>item.id!==payload),total:state.total.filter((item)=>item.id!==payload)}
           
          case 'ADD_PRICE':
                 return {...state,total:[...state.total,payload]}
          case 'ADD_Q':
                  return {...state,total:state.total.map(i=>{
                        if (i.id==payload) {
                            return {...i,q:i.q+1}
                        }
                        return i
                      })}
          case 'DEL_Q':
                  return {...state,total:state.total.map(i=>{
                    if (i.id==payload) {
                        return {...i,q:i.q-1}
                    }
                   return i
                  })}
           
        default: return state ;
           
    }
}

export default AppReducer