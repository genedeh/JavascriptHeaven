class Fomular {
    constructor(mass, distance, newton = 9.8) {
        this.weigth = Math.floor(mass)
        this.distance = Math.floor(distance)
        this.accelerationDueToGravity = newton
        this.calculateWorkDone = () => {
            let force = Math.floor(this.weigth * this.accelerationDueToGravity)
            let workDone = Math.floor(force * this.distance)
            if (workDone === 0) {
                throw new Error(`Work done equals to ${workDone}`)
            }
            return `The work done is: ${workDone}J`
        }
        this.calculatePotentialEnergy = () => {
            let potentialEnergy = Math.floor(this.weigth * this.accelerationDueToGravity * this.distance)
            if (potentialEnergy === 0) {
                throw new Error(`Potential Energy  equals to ${PotentialEnergy}`)
            }
            return `The Potential Energy is: ${potentialEnergy}J`
        }
        this.calculateKineticEnergy = () => {
            let kineticEnergy = Math.floor(1 / 2 * this.weigth * this.distance * this.distance)
            if (kineticEnergy === 0) {
                throw new Error(`Kinetic Energy  equals to ${kineticEnergy}`)
            }
            return `The Kinetic Energy is: ${kineticEnergy}J`
        }
        this.calculatePower = (time) => {
            let force = Math.floor(this.weigth * this.accelerationDueToGravity)
            let Work = Math.floor(force * this.distance)
            let power = Math.floor(Work / time)
            if (power === 0) {
                throw new Error(`Power  equals to ${power}`)
            }
            return `The Power is: ${power}W`
        }
    }
}
const fomular = new Fomular(3000, 2, 10);
console.log(fomular.weigth)
console.log(fomular.distance)
console.log(fomular.calculateWorkDone())
console.log(fomular.accelerationDueToGravity)
console.log(fomular.calculatePotentialEnergy())
console.log(fomular.calculateKineticEnergy())
console.log(fomular.calculatePower(4))

