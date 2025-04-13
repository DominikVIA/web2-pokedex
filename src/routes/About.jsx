import "../index.css"

export default function About() {
    return (
        <>
            <div id="about">
                <div>
                    <img src="sinnoh_logo.png" alt="A Sinnoh battle hall logo i found online!"/>
                    <h2>About!</h2>
                    <img src="sinnoh_logo.png" alt="A Sinnoh battle hall logo i found online!"/>
                </div>
                <p>
                    This is our (Group 7!) submition for the second course assignment of the second web course. <br/>
                    There were a few requirements for this submission:
                    <ul>
                        <li>the source of the information should be PokeApi</li>
                        <li>the pokedex should display a list of pokemon and include pagination</li>
                        <li>there should be more information displayed when clicked on a pokemon entry</li>
                        <li>the application should contain multiple pages and use React Router to link them together</li>
                        <li>the application should be developed with Vite</li>
                    </ul>
                    We decided to style it after the BDSP Sinnoh pokedex, because it seemed like the easiest to replicate (:<br/>
                    Unfortunately the "Pokemon details" page proved a bit too difficult so we took it a bit easy.
                </p>
            </div>
        </>
    )
}