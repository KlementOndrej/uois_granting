import { GrantingDropdown } from "./GrantingDropdown"

export const GrantingProgramTypeSelect = ({program, actions}) => {
    const types = [
        {value: "fd4f0980-9315-11ed-9b95-0242ac110002", name: "bakalářský prezenční 3 roky čeština"},
        {value: "fd4f1d4e-9315-11ed-9b95-0242ac110002", name: "bakalářský kombinovaný 3 roky čeština"},
        {value: "fd4f1eb6-9315-11ed-9b95-0242ac110002", name: "magisterský navazující na bakalářský prezenční 2 roky čeština"},
        {value: "fd4f1f4c-9315-11ed-9b95-0242ac110002", name: "magisterský navazující na bakalářský kombinovaný 2 roky čeština"},
        {value: "fd4f1fba-9315-11ed-9b95-0242ac110002", name: "doktorský prezenční 4 roky čeština"},
        {value: "fd4f2028-9315-11ed-9b95-0242ac110002", name: "doktorský kombinovaný 4 roky čeština"},
        {value: "fd4f2082-9315-11ed-9b95-0242ac110002", name: "magisterský prezenční 5 let čeština"},
        {value: "fd4f20dc-9315-11ed-9b95-0242ac110002", name: "magisterský prezenční 6 let čeština"}
    ];

    const onChange = (value) => {
        actions.programTypeAsyncUpdate({...program, type:{id: value}})
            .then(json=>console.log("ProgramTypeChange", json.data.programUpdate.msg))
    }

    return(
        <GrantingDropdown id={program.id} value={program.type.id} onChange={onChange} items={types}/>
    )
}