import Cards from "../components/cards/Cards.jsx";

const Home = ({characters,onClose}) => {
    return (
        <div>
            <Cards characters={characters} onClose={onClose}></Cards>
        </div>
    )
}

export default Home