var asyncMap = function(tasks,callback){
  var results = [];
  var counter = 0;
  for(var i = 0; i < tasks.length; i++ ){
    (function(i){
      tasks[i](function(val){
        results[i] = val
        counter++
        if(counter === tasks.length){
          callback(results)
        }
      })
    })(i)
  }
}