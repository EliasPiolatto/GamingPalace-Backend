switch (expr) { //check order value Population Ascen Population Desc Alphabetic Ascen Alphabetic Des
    case 'Alphabetic Ascen':
        console.log('selected order is..Alphabetic Ascen.')
        //do the filter logic
         result = arraytoorder.sort(function compare (a, b) {
            if (a['name'] > b['name'] ) {return 1}
              if (b['name'] > a['name'] ){return -1}
              if (b['name'] == a['name'] ){return 0} 
            })
                     //dispatch array on dispaly
                      //dispatch faarrayfiltered
                                 objectdispatch = {data: result}
                        dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
                         dispatch(SET_FAARRAYFILTERED(result)) //modifico valores del filtro , para que tome el siguiente
             break
     case 'Alphabetic Desc':
                console.log('selected order is..Alphabetic Desc.')
                //do the filter logic
                 result = arraytoorder.sort(function compare (a, b) {
                    if (a['name'] > b['name'] ) {return -1}
                      if (b['name'] > a['name'] ){return 1}
                      if (b['name'] == a['name'] ){return 0} 
                    })
                             //dispatch array on dispaly
                              //dispatch faarrayfiltered
                                         objectdispatch = {data: result}
                                dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
                                 dispatch(SET_FAARRAYFILTERED(result)) //modifico valores del filtro , para que tome el siguiente
                     break
        case 'Population Ascen':
                         console.log('selected order is..Population Ascen.')
                             //do the filter logic
                             result = arraytoorder.sort(function compare (a, b) {
                             if (a['population'] > b['population'] ) {return -1}
                         if (b['population'] > a['population'] ){return 1}
                             if (b['population'] == a['population'] ){return 0} 
                              })
                            //dispatch array on dispaly
                                 //dispatch faarrayfiltered
                                 objectdispatch = {data: result}
                                dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
                            dispatch(SET_FAARRAYFILTERED(result)) //modifico valores del filtro , para que tome el siguiente
             break
     case 'Population Desc':
                     console.log('selected order is..Population Desc.')
                     //do the filter logic
                         result = arraytoorder.sort(function compare (a, b) {
                    if (a['population'] > b['population'] ) {return 1}
                      if (b['population'] > a['population'] ){return -1}
                      if (b['population'] == a['population'] ){return 0} 
                    })
                             //dispatch array on dispaly
                              //dispatch faarrayfiltered
                                         objectdispatch = {data: result}
                                dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
                                 dispatch(SET_FAARRAYFILTERED(result)) //modifico valores del filtro , para que tome el siguiente
                     break
    default:
  }