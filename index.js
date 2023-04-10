
function receivesAFunction(name){
    name();

}

function returnsANamedFunction(){
    return function namedFunction(){};
    

}
function returnsAnAnonymousFunction(){
    return function(){
        
    }

}