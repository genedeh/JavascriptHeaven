class Shape {
    constructor(name, sides, color, thickness, size) {
        this.name = name;
        this.sides = sides;
        this.size = size;
        this.color = color;
        this.thickness = thickness;
        this.SideVeriation = function () {
            if (this.sides <= 2 || this.sides >= 11) {
                console.error(`you have to have more than two sides and less than eleven sides: ${this.sides}`);
            }
            else {
                console.log("It's okay");
                console.log(this.sides);
            }
        };
        this.Draw = function () {
            console.log(`Drawing a ${this.name} The size is ${this.size}`);
        };
        this.Description = function () {
            console.log(`This is a  ${this.name}  and it has  ${this.sides}  sides it's size is ${this.size} it's thickness value is ${this.thickness}  and it's color is ${this.color}`);
        };
    }
}

const shape = new Shape("Square", 4, "green", "50px", 11);
// console.log(shape.name)
// console.log(shape.sides)
// console.log(shape.color)
// console.log(shape.thickness)
// console.log(shape.size)
// console.log(shape.Draw())
// console.log(shape.Description())
// console.log(shape.SideVeriation())

class CakeMaker {
    constructor(name, Ingredients) {
        this.name = name;
        this.Ingredients = Ingredients;
        this.HowManyIngredient = function () {
            for (Index in this.Ingredients) {
                console.log("Ingridients are", Index[this.Ingredients]);
                Index++;
            }
        };
    }
}
// const Cake = new CakeMaker("Choco cake", ["flour", "oil", "Milk", "Salt", "Sugar"]);
// console.log(Cake.HowManyIngredient())
class UrlConfig {
    constructor(SiteName, UrlMessage) {
        this.SiteName = `http:${SiteName}/`;
        this.UrlMessage = UrlMessage;
        this.config = function () {
            const parts = this.UrlMessage.split(' ');
            console.log(`${this.SiteName}${parts.join("_")}/`);
        };
    }
}
const Url = new UrlConfig("test","Hello hi,! my God what the hell just happend")
// console.log(Url.UrlMessage)
// console.log(Url.SiteName)
// console.log(Url.config())
priceList = {
    value: 1,
    price: 2,
    value2: 3,
    price2: 4
}
class PriceCounter {
    constructor(obj) {
        this.obj = obj;
        this.Price = function () {
            let price = 0;
            for (value in this.obj) {
                price += this.obj[value];
            }
            return `the total is: ${price}`;
        };
    }
}
const Price = new PriceCounter(priceList);
console.log(Price.Price())
