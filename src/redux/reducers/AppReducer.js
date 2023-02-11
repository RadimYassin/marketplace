let init={
    Cart:[],
    Listprice:[],
    prices:[]
}


function AppReducer (state=init,{type,payload,Prices}){
    switch (type) {
          case "ADD":
               return {...state,Cart:[...state.Cart,payload],Listprice:[...state.Listprice,Prices]}
          case "Del_from_cart":
                return {...state,Cart:state.Cart.filter((item)=>item.id!==payload),
                                Listprice:state.Listprice.filter((item)=>item.id!==payload),
                                prices:state.prices.filter((item)=>item.id!==payload)
                              }
        
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
            case "a" :
                  return {...state,prices:state.Listprice.map((i)=>{

                    if (payload) {
                         return {...i,some:i.q*i.price}
                    }
                    return i
                  })}
         
        default: return state ;
           
    }
}

export default AppReducer