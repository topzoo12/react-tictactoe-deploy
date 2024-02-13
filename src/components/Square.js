import React from "react";
import "./Square.css"


const Square = ({ onClick, value }) => {

    return (
        <button className="square"
            onClick={ onClick } >
            { value }
        </button>
    )

}

export default Square;



class Car {
    constructor(brand) {
        console.log("3");
        this.carname = brand;
    }

    present() {
        console.log("5");
        return 'I have a ' + this.carname;
    }
}


class Model extends Car {
    
    constructor(brand, mod) {
        
        console.log("2");
        super(brand)
        this.model = mod;
    }

    show() {
        console.log("4");
        return console.log(super.present() + ', it is a ' + this.model);
    }


}

console.log("1");
let mycar = new Model("Ford", "Mustang");

console.log("3.5");
mycar.show();