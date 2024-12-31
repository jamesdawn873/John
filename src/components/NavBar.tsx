interface navBarProps {
    leftItems: string[];
    rightItems: string[];
}

function NavBar({leftItems, rightItems}: navBarProps) {

    return (
        <div className="max-w-7xl mx-auto my-3.5 content-center p-2 bg-green-100" id={"navbar"}>
            <a href={"/"} className="hover:bg-green-100 float-left px-4 py-2 rounded-md" >John</a>
            {rightItems.map(item =>
                <a className={"hover:bg-green-100 float-right px-4 py-2 rounded-md"}    key={item}>{item}</a>)}
        </div>

    )
}

export default NavBar;