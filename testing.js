var myObj = new Thing(2, true);

function Thing(v1, v2) {
    // ...

    // pub methods
    this.init = function(){
        this.number = v1;
        this.bool = v2;
    };

    // ...

    this.init(); // <------------ added this
}

module.exports = myObj;
