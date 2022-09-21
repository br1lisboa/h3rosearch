import { Link } from "react-router-dom"

// este componente es el render
const CharactersByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<></>)
    return <p>{characters}</p>
}




export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const heroImgUrl = `/assets/${id}.jpg`

    // const charactersByHero = <p>{characters}</p>

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImgUrl} alt={superhero} className="card-img" />
                    </div>

                    <div className="col-8">
                        <div className="car-body">
                            <h5 className="card-title">{superhero}</h5>
                            
                            <p className="card-text">{alter_ego}</p>

                            {/* una manera
                            {
                                (alter_ego !== characters) && charactersByHero
                            } */}

                            <CharactersByHero characters={characters} alter_ego={alter_ego} />

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                More...
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}