const Singleton = (function(){
  let instance;

  function createInstance(){
    const object = new Object({name: 'Brad'});
    
    return object;
  }

  return {
    getInstance: function(){
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instancA = Singleton.getInstance();
const instancB = Singleton.getInstance();

console.log(instancA === instancB);

// console.log(instancA);