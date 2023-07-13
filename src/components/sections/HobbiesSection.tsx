import { styled } from "styled-components"
import theme from "../../theme"
import { useState } from "react"

import ChessIcon from '../../assets/chess.png'
import VideogamesIcon from '../../assets/videogame.png'
import ScienceIcon from '../../assets/science.png'
import LivestreamIcon from '../../assets/livestream.png'
import PizzaIcon from '../../assets/pizza.png'
import IllustrationIcon from '../../assets/illustration.png'

const HobbiesHeader = styled.h1`
    font-size: ${theme.font.size.title};
    font-weight: ${theme.font.weight.bold};
    text-align: center;
    color: ${theme.palette.primary};
`

const HobbiesWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 64px;
    @media (max-width: 768px) {
        width: 80%;
    }
`

const HobbiesIconWrapper = styled.ul`
    display: flex;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
`

const Hobbie = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    cursor: pointer;
`

const HobbieIcon = styled.img`
    width: 64px;
    height: 64px;
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

const HobbieTitle = styled.li`
    font-size: ${theme.font.size.highlight};
    @media (max-width: 768px) {
        font-size: ${theme.font.size.content};
    }
`

const HighlightedHobbieDescription = styled.p`
    font-size: ${theme.font.size.highlight};
    text-align: justify;
    line-height: 40px;
    @media (max-width: 768px) {
        line-height: 26px;
        font-size: ${theme.font.size.content};
    }
`

function HobbiesSection() {

    const texts = {
        chess: "I was introduced to chess in school by some classmates, I practiced it a little and I even was part of the school chess team by a while. Nowadays,  I used to keep up with world chess scenario, and sometimes I play as a casual player in chess.com",
        videogames: "I play videogames since I was a kid, the english that I know I have learned playing games and browsing on internet. I think that my favorite game of all times is Shadow of The Colossus and i've been playing Raft, Pokémon: Fire Red and Hollow Knight (2nd time)",
        science: "I'm a skpetical ever trying to practice the scientific thinking and that believes I am a skeptic who always seeks to exercise scientific thinking and who thinks that it is the way to improve our societies and therefore should be taught to everyone in the world",
        livestream: "I really enjoy watching livestream channels when I'm down, I enjoy watching illustration, gameplay, e-sports & coding channels; I've also done some lives coding some projects and I have plans to start creating some kind of content related to technology and programming",
        pizza: "São Paulo, Brazil has a pretty cool pizza culture; pepperoni pizza is my favorite food since I was a kid so if you're going to ask me to eat it's definitely the right order",
        illustration: "I'm definitely not an illustrator, but since I was a kid I like to draw so every now and then I take time to doodle or watch some illustration content"
    }

    const [selectedHobbie, setSelectedHobbie] = useState(texts.illustration);

    return (
        <>
            <HobbiesHeader>HOBBIES</HobbiesHeader>
            <HobbiesWrapper>
                <HobbiesIconWrapper>
                    <Hobbie onClick={() => setSelectedHobbie(texts.illustration)}>
                        <HobbieIcon src={IllustrationIcon} alt="Illustration icon" />
                        <HobbieTitle>Illustration</HobbieTitle>
                    </Hobbie>
                    <Hobbie onClick={() => setSelectedHobbie(texts.chess)}>
                        <HobbieIcon src={ChessIcon} alt="Chess icon" />
                        <HobbieTitle>Chess</HobbieTitle>
                    </Hobbie>
                    <Hobbie onClick={() => setSelectedHobbie(texts.videogames)}>
                        <HobbieIcon src={VideogamesIcon} alt="Videogames icon" />
                        <HobbieTitle>Videogames</HobbieTitle>
                    </Hobbie>
                    <Hobbie onClick={() => setSelectedHobbie(texts.science)}>
                        <HobbieIcon src={ScienceIcon} alt="Science icon" />
                        <HobbieTitle>Science</HobbieTitle>
                    </Hobbie>
                    <Hobbie onClick={() => setSelectedHobbie(texts.livestream)}>
                        <HobbieIcon src={LivestreamIcon} alt="Livestream icon" />
                        <HobbieTitle>Livestream</HobbieTitle>
                    </Hobbie>
                    <Hobbie onClick={() => setSelectedHobbie(texts.pizza)}>
                        <HobbieIcon src={PizzaIcon} alt="Pizza icon" />
                        <HobbieTitle>Pizza</HobbieTitle>
                    </Hobbie>
                </HobbiesIconWrapper>
                <HighlightedHobbieDescription>
                    {selectedHobbie}
                </HighlightedHobbieDescription>
            </HobbiesWrapper>
        </>
    );
}

export default HobbiesSection;