interface navBarProps {
    leftItems: string[];
    rightItems: string[];
}

function NavBar({leftItems, rightItems}: navBarProps) {

    return (
        <div className="max-w-7xl mx-auto my-3.5">
            <ul>
                <li className="float-left"></li>
                {leftItems.map(item =>
                    <li className="hover:bg-green-100 float-left px-4 py-2 rounded-md" key={item}>{item}</li>
                )}
                {rightItems.map(item =>
                    <li className={"hover:bg-green-100 float-right px-4 py-2 rounded-md"} key={item}>{item}</li>)}
            </ul>
        </div>

    )
}

export default NavBar;