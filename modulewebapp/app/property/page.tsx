import B from "../components/B"

const person =
    {
      name: " John",
      age: 47,
    }



export default function Property() {
    return (<div>
        
    <h1 className="font-bold">Property</h1>
        <div>This is: <A
            foo={42}
            Bar="Bar"
            person={person}
        /></div>
        <div>This is: <B /> </div>
        <div>This is: <D/> </div>
</div>
    )
}


function A({ foo, Bar, person }: { foo: number, Bar: string, person: { name: string; age: number } })
{
    return (<>
        A component{foo}
        <br /> < hr/>
        Person component: <C Bar={Bar} person={person}  />
  </>     
    )
}

function C({ Bar, person }: { Bar: string, person: { name: string; age: number } }) {
    return (<>
        C Component: {Bar}
        <br /> < hr/>
        Person Component: {person.name} {person.age}
        <br /> <hr />
        {JSON.stringify(person)}
        <br />
    </>)
}


function D() {
    return(<>Dog component</>)

}


