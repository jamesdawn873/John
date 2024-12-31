import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {

    let items = [
        'John'

    ]
    let links = [
        'Projects',
        'LinkedIn',
        'GitHub'
    ]
    return (
        <div id={"root"}>
            <NavBar leftItems={items} rightItems={links} />

            <Main/>

        </div>

    )
}

export default App
