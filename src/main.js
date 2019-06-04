(function(){

  $("#root").fillValues({datas:window.rules});


  // INIT STATE
  var global_state = {

  };


  // REDUCER
  var reducer = function(state, action) {

    // Deep copy of previous state to avoid side-effects
    var newState = _.cloneDeep(state);

    if (action.type === 'INIT') {
      // do nothing
    } else if (action.type === 'AND_CLICKED') {
      newState.what = action.value
    }
    return newState;
  }


  // MAIN STORE
  window.main_store = Redux.createStore(reducer, global_state);

  // DISPATCHERS
  $(".and").on("click", function(e){
    main_store.dispatch({
      type: 'AND_CLICKED', 
      value: 42
    })
  });
  $(".or").on("click", function(e){
    main_store.dispatch({
      type: 'OR_CLICKED', 
      value: 42
    })
  });

}());

























