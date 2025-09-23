import ListElement from "./ListElement.tsx";


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
    return (
        <>
            {
                people.map((person: Human, index: number) => (
                        <ListElement
                            key={person.name || index}
                            name={person.name}
                            height={person.height}
                            mass={person.mass}
                            birth_year={person.birth_year}
                            gender={person.gender}
                        />
                ))
            }
        </>
    )
}

export default ListViewer