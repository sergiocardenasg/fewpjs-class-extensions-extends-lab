// Your code here

class Polygon {
    constructor (sides) {
        this.sides = sides
    }

    get countSides() {
        let counter = 0
        for (let i = 0; i < this.sides.length; i++) {
            counter = counter + 1
        }
        return counter
    }

    get perimeter() {
        let counter = 0
        for (let i = 0; i < this.sides.length; i++) {
            counter = counter + this.sides[i]
        }
        return counter
    }
}

class Triangle extends Polygon {
    get isValid() {
        return ((this.sides[0] + this.sides[1]) > this.sides[2]) && ((this.sides[0] + this.sides[2]) > this.sides[1])  && ((this.sides[1] + this.sides[2]) > this.sides[0]) ? true : false
    }
}

class Square extends Polygon {
    get isValid() {
        return (this.sides[0] === this.sides[1]) && (this.sides[0] === this.sides[2]) && (this.sides[0] === this.sides[3]) ? true : false
    }

    get area() {
        for (let i = 0; i <= 1; i++) {
            return this.sides[i] * this.sides[i]
        }
    }
}