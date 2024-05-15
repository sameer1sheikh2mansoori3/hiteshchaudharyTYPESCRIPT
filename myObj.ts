interface user{
    name :string,
    age :number,
    email:string
}

const myStudent : user = {
    name :"sameer",
    age : 200,
    email:"Sameer@gmail.com"
}
const myStudent1  = {
    name :12344,
    age : 200,
    email:"Sameer@gmail.com"
}

const printName = (myObj : user)=>{
    const {name , age , email } = myObj
    console.log(`we are having ${name} and ${email}`)
}

printName(myStudent)
interface Course{
    name :string,
    price : number
}

const createCourse = () =>{
    const myCourse = {
        name :"hindi",
        price:200
    }
    return myCourse
}
console.log(createCourse())
// 
type custom = {
    name : string , 
    readonly _id  : [string]
}
const myUser : custom = {
    name :"sameer" ,
    _id :[""]
}
let myArr = myUser._id
myArr.push('smaeer')
console.log(myArr.length)

export {}

