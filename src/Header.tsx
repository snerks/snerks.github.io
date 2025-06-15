import { useState } from "react";

export function Header() {

    const [activeSection, setActiveSection] = useState("About");

    const sectionLinks = [
        { name: "About", id: "one" },
        { name: "Things I Can Do", id: "two" },
        { name: "React Apps", id: "react" },
        { name: "Angular Apps", id: "angular" },
        { name: "Typescript Apps", id: "typescript" },
        // { name: "A Few Apps", id: "three" },
        { name: "A Few DevOps Apps", id: "devops" }
    ];

    const handleSectionClick = (event: any, sectionName: string) => {
        event.preventDefault();

        setActiveSection(sectionName);

        // const listItemElement = event.currentTarget;
        // const childAnchorElement = listItemElement.querySelector("a");
        // const listItemElement = event.currentTarget;
        const childAnchorElement = event.currentTarget;

        if (childAnchorElement) {
            // // Remove the 'active' class from all links
            // const allLinks = document.querySelectorAll("#nav a");
            // allLinks.forEach(link => link.classList.remove("active"));

            // // Add the 'active' class to the clicked link
            // childAnchorElement.classList.add("active");
            const childAnchorElementHref = childAnchorElement.getAttribute("href");
            if (childAnchorElementHref) {
                const elementId = childAnchorElementHref.substring(1);
                const element = document.getElementById(elementId);
                const section = element;
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }

        }
    };

    return <section id="header">
        <header>
            <span className="image avatar">
                <img
                    src="https://avatars1.githubusercontent.com/u/7326391?s=460&v=4"
                    alt="" />
            </span>
            <h1 id="logo"><a href="#">snerks</a></h1>
            <p style={{ margin: "0 0 0 0" }}>Full-stack software development</p>
        </header>
        <nav id="nav">
            <ul>
                {/* <li onClick={_ => setActiveSection("About")}><a href="#one" className={activeSection === "About" ? "active" : ""}>About</a></li>
                <li onClick={_ => setActiveSection("Things I Can Do")}><a href="#two" className={activeSection === "Things I Can Do" ? "active" : ""}>Things I Can Do</a></li>
                <li onClick={_ => setActiveSection("A Few Apps")}><a href="#three" className={activeSection === "A Few Apps" ? "active" : ""}>A Few Apps</a></li>
                <li onClick={_ => setActiveSection("A Few DevOps Apps")}><a href="#four" className={activeSection === "A Few DevOps Apps" ? "active" : ""}>A Few DevOps Apps</a></li> */}

                {sectionLinks.map((section) => (
                    <li key={section.id} >
                        <a href={`#${section.id}`} onClick={(event) => handleSectionClick(event, section.name)} className={activeSection === section.name ? "active" : ""}>
                            {section.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        <footer>
            <ul className="icons">
                <li>
                    <a href="https://github.com/snerks" className="icon brands fa-github"
                    ><span className="label">Github</span></a>
                </li>
            </ul>
        </footer>
    </section>;
}
