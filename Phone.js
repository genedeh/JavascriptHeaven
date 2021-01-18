phoneNumber = {
    Dad: "08023053843",
    Mum: "07063354139",
    ire: "08123980289"
};
class Phone {
    constructor(Name, PersonalPhoneNumber, obj) {
        this.Name = Name
        this.personalPhoneNumber = PersonalPhoneNumber
        this.object = obj
        this.phoneNumbers = () => {
            for (let value in this.object) {
                console.group(value, ":", this.object[value])
            }
        }
        this.getContacts = (Target) => {
            if (Target in this.object){
               console.log(Target, ":", this.object[Target])
            }
            else
                throw new Error(`${Target} dose not exists in phone dialogue`)
        }
        this.addContact = (Target, TargetValue) => {
            if (Target in this.object) {
                throw new Error(`${Target} exists already`)
            }
            let Added = this.object[Target] = TargetValue
            return Added
        }
        this.deleteContact = (Target) => {
            if (Target in this.object) {
                let Deleted = delete this.object[Target]
                return `${Target} has been deleted from phone dialogue`
            }
            else
               throw new Error(`${Target} dose not exist in phone dialogue `)
        }
        this.call = (Target) => {
            if (Target in this.object) {
                while (true) {
                    return `Dialing ${Target}`
                }
            }
            else
              throw new Error(`${Target} Dose not exists`)
        }
    }
}
const Phones = new Phone("Genesis", 081296741, phoneNumber);
console.log(Phones.Name)
console.log(Phones.personalPhoneNumber)
console.log(Phones.object)
console.log(Phones.getContacts("Dad"))
console.log(Phones.addContact("Unknown", 102389278))
// console.log(Phones.DeleteContact("Unknown"))
console.log(Phones.call("Unknown"))
console.log(Phones.phoneNumbers())
