export default async function Basic() {

    const ObjA = {
        age: 22,
    }

    function foo(){
        return "Hello World"
    }

    const person={
        name: "",
        surname: "",
        myObject: ObjA,
        myArray: [1, 2, 3],
        myFoo: foo,
        myBar: function() {
            return "Bar"
        },
        myBaz: () => "Baz"
    }

    function sum(a: number, b: number, c: number) {
        return a+b+c
    }

    const result = sum(1, 2, 3)
    console.log(result)

    const sum0 = (a: number) => {
        return (b: number) => {
            return (c: number) => {
                return a+b+c

            }
        }
    }
    console.log(sum0(1)(2)(4))

    const sum1 = (a:number) => (b:number) => (c:number) =>
        a + b + c
    console.log(sum1(1)(2)(3))

    const promise = new Promise(
        (resolve) => { resolve("Hey") })
    console.log("Promise: ", promise)
    
    promise.then((result) => {
        console.log("Promise.then: ", result)
    })

    const data = await promise 
    console.log("Await: ", data)
    
    const wait = (s: number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Waited")
            }, s*1000)
        })
    }

    const data2 = await wait(1)
    console.log("Waited:", data2)

    
    

    person.name = "Fig"
    person.surname = "Tree"
    return (
        
        <div>
            Firstname: {person.name} 
            < br/>
            Lastname: {person.surname} 
            < br/>
            Age: {person.myObject.age} 
            < br />
            ??: {person.myArray[1]}
            < br />
            {JSON.stringify(person)}
            < br />
            {person.myFoo()}
            < br />
            {person.myBar()}
            < br />
            {person.myBaz()}


        </div>
    )
}