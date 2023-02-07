let init={
    Cart:[],
    Listprice:[],
    TotalFinal:[],

}


function AppReducer (state=init,{type,payload}){
    switch (type) {
          case "ADD":
               return {...state,Cart:[...state.Cart,payload]}
          case "Del_from_cart":
                return {...state,Cart:state.Cart.filter((item)=>item.id!==payload),
                                Listprice:state.Listprice.filter((item)=>item.id!==payload),
                                TotalFinal:state.TotalFinal.filter((item)=>item.id!==payload)
                              }
           
          case 'ADD_PRICE':
                 return {...state,Listprice:[...state.Listprice,payload]}
          case 'ADD_Q':
                  return {...state,Listprice:state.Listprice.map(i=>{
                        if (i.id==payload) {
                            return {...i,q:i.q+1}
                        }
                        return i
                      })}
          case 'DEL_Q':
                  return {...state,Listprice:state.Listprice.map(i=>{
                    if (i.id==payload) {
                        return {...i,q:i.q-1}
                    }
                   return i
                  })}
          case 'Create_PriceFinal':
                   return {...state,TotalFinal:[...state.TotalFinal,payload] }
           case 'Update_PriceFinal':
                    return {...state,TotalFinal:state.TotalFinal.map(i=>{
                      if (i.id==payload.id) {
                          return {...i,some:payload.price*payload.q}
                      }
                      return i
                    }) }
                               
           
        default: return state ;
           
    }
}

export default AppReducer