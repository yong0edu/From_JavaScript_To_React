var kim ={name: 'Kim'};
var lee ={name: 'Lee'};
function hi(){
    console.log('hi,' + this.name)
}
hi.call(kim);