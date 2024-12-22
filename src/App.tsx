import NavBar from "./components/NavBar";

function App() {
    let items = [
        'John',
        'Projects'
    ]
    let links = [
        'LinkedIn',
        'GitHub'
    ]
    return (
        <><NavBar leftItems={items} rightItems={links} /></>

    )
}

export default App
