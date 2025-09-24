
import './App.css'
import {useState} from "react";
import ListViewer from "./Components/ListViewer.tsx";

type Human = {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    gender: string;
}

function App() {

    const [fetchOutput, setFetchOutput] = useState<string>("Nic się nie dzieje");
    const [viewList, setViewList] = useState<boolean>(false);
    const [people, setPeople] = useState<Human[]>([]);


    async function fetchData() {

        const url = "https://swapi.info/api/people"
        setFetchOutput("Zbieranie danych...");

        try {

            const peopleResult = new Array<Human>();

            for(let i = 0; i < 81; i++) {

                if(i == 16) {
                    console.log("17 postac nie działa...")
                } else {
                    const data = await fetch(url + `/${i+1}`)
                    const jsonItem = await data.json()
                    const humanItem = {
                        name: jsonItem.name,
                        birth_year: jsonItem.birth_year,
                        gender: jsonItem.gender,
                        height: jsonItem.height,
                        mass: jsonItem.mass
                    }
                    console.log(humanItem)
                    peopleResult.push(humanItem)
                    console.log(peopleResult)

                    setFetchOutput(`Zbieranie danych... (${peopleResult.length} / 80)`);
                }
            }

            setFetchOutput("Sukces!")
            setPeople(peopleResult)
            setViewList(true)

        } catch {
            console.log("Coś się popsuło...")
            setFetchOutput("Coś się popsuło. Sprawdź połączenie z internetem.")
        }
    }


  return (
    <>
        <button className={"fetchButton"} onClick={fetchData}>Załaduj Dane</button>
        <h4>{fetchOutput}</h4>

        { viewList ? <ListViewer people={people} /> : null }

    </>
  )
}

export default App
