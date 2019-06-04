(function(){

  $("#root").fillValues({datas:window.rules});

  // INIT STATE
  var global_state = {
    root_rule:{
      slave_rules: [],
      composition_type: null
    }
  };

  // REDUCER
  var reducer = function(state, action) {

    // Deep copy of previous state to avoid side-effects
    var newState = _.cloneDeep(state);

    if (action.type === 'INIT') {
      newState.root_rule.slave_rules.push({id:"r_rsa"})
    } else if (action.type === 'AND_CLICKED') {
      newState.root_rule.slave_rules.push({id:"r_rsa"})
      newState.root_rule.composition_type = "AND"
      newState.what = action.value
    } else if (action.type === 'OR_CLICKED') {
      newState.root_rule.slave_rules.push({id:"r_rsa"})
      newState.root_rule.composition_type = "OR"
      newState.what = action.value
    }
    return newState;
  }

  // MAIN STORE
  window.main_store = Redux.createStore(reducer, global_state)

  // DISPATCHERS
  var $andclick = function(e){
    main_store.dispatch({
      type: 'AND_CLICKED', 
      value: $(e.currentTarget).closest("section").attr("id")
    })
  };
  var $orclick = function(e){
    main_store.dispatch({
      type: 'OR_CLICKED', 
      value: $(e.currentTarget).closest("section").attr("id")
    })
  };

  // SUBSCRIBERS
  main_store.subscribe(function(){
    $("#root").empty()
    var state = _.cloneDeep(main_store.getState())

    _.each(state.root_rule.slave_rules, function(rule, index){
      var id = "rule_" + index
      $("#root").append("<section id='" + id + "'></section>")
      $("#" + id).boxify({id: "sel_"+id, selected: rule.id, orclick: $orclick, andclick: $andclick})
      if (state.root_rule.composition_type === "AND") {
        $("#" + id).after("<div class='andor'>ET</div>")
      } else {
        $("#" + id).after("<div class='andor'>OU</div>")
      }
    });
    
    $(".andor").last().remove()

    $("section select").select2()
  });

  main_store.dispatch({type: 'INIT' })

}());
