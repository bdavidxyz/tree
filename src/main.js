(function(){

  $("#root").fillValues({datas:window.rules});


  // INIT STATE
  var global_state = {
    rules:[]
  };


  // REDUCER
  var reducer = function(state, action) {

    // Deep copy of previous state to avoid side-effects
    var newState = _.cloneDeep(state);

    if (action.type === 'INIT') {
      newState.rules.push({id:"r_rsa"})
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

  // SUBSCRIBERS
  main_store.subscribe(function(){
    $("#root").empty();
    var state = _.cloneDeep(main_store.getState());
    _.each(state.rules, function(rule, index){
      var id = "rule_" + index;
      $("#root").append("<div id='" + id + "'></div>");
      $("#" + id).boxify({selected: rule.id})
    })  
  });

  main_store.dispatch({type: 'INIT' })


}());

























