
type ListElementProps = {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    gender: string;
};

const ListElement = ({ name, height, mass, birth_year, gender }: ListElementProps) => {

    return (
        <>
            <h4>Name: {name}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Height: {height}</h4>
            <h4>Mass: {mass}</h4>
            <h4>Birth Year: {birth_year}</h4>
        </>
    )
}

export default ListElement