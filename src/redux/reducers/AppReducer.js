let init={
    Cart:[],
}


function AppReducer (state=init,{type,payload}){
    switch (type) {
        case "ADD":
          return {...state,Cart:[...state.Cart,payload]}
           
        default: return state ;
           
    }
}

export default AppReducer