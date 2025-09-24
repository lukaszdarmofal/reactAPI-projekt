
import ListElement from "./ListElement.tsx";
import {useState} from "react";
import "../styles/ListViever.css"

type Human = {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    gender: string;
}

type ListViewerProps = {
    people: Array<Human>;
}

const ListViewer = ({people}: ListViewerProps ) => {

    const [searchQuery, setSearchQuery] = useState("");
    const [displayedPerson, setDisplayedPerson] = useState<Human>( {name: "", height: "", mass: "", birth_year: "", gender: ""} );
    const [displayElement, setDisplayElement] = useState<boolean>(false)

    function displayInfo() {
        console.log(displayedPerson);
        setDisplayElement(true)
        setSearchQuery("")
    }

    return (
        <>
            <input
                type={"text"}
                placeholder={"Szukaj:"}
                value={searchQuery}
                onChange={ (e) => {
                    setSearchQuery(e.target.value)
                    setDisplayElement(false)
                }}
            />

            {
                searchQuery.length == 0 ? <p className={"grr"}></p> :

                people
                    .filter(n => n.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((person: Human, index: number) => (
                    <p key={index} onClick={ () => {
                        setDisplayedPerson(person)
                        displayInfo()} }>

                        {person.name}
                    </p>
                ))
            }

            {
                displayElement && <ListElement
                    name={displayedPerson.name}
                    height={displayedPerson.height}
                    mass={displayedPerson.mass}
                    birth_year={displayedPerson.birth_year}
                    gender={displayedPerson.gender}
                />
            }


        </>
    )
}

export default ListViewer