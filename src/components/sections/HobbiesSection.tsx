import { styled } from "styled-components"
import theme from "../../theme"
import { useState } from "react"

import ChessIcon from '../../assets/chess.png'
import VideogamesIcon from '../../assets/videogame.png'
import ScienceIcon from '../../assets/science.png'
import LivestreamIcon from '../../assets/livestream.png'
import FoodIcon from '../../assets/pizza.png'
import IllustrationIcon from '../../assets/illustration.png'

interface Hobbie {
    title: string,
    description: string,
    image: string
}

const InternalSection = styled.section`
    display: flex;
    flex-flow: wrap column;
    align-items: center;
    gap: 32px;
`

const HobbiesHeader = styled.h1`
    font-size: ${theme.font.size.title};
    font-weight: ${theme.font.weight.bold};
    text-align: center;
    color: ${theme.palette.primary};
`

const HobbiesSubheader = styled.p`
    font-size: ${theme.font.size.content};
    text-align: center;
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
    @media (max-width: 768px) {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    }

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
`

const HobbieTitle = styled.li<{ $selected?: boolean; }>`
    font-weight: ${theme.font.weight.bold};
    font-family: ${theme.font.family.title}; 
    font-size: ${theme.font.size.highlight};
    color: ${props => !props.$selected ? theme.palette.text.secondary : theme.palette.text.primary};
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

    const hobbies: Hobbie[] = [
        {
            title: "CHESS",
            description: "I was introduced to chess in school by some classmates, I practiced it a little and I even was part of the school chess team by a while. Nowadays,  I used to keep up with world chess scenario and still play sometimes. I am currently trying to play more rapid (10 + 0) instead of bullet games",
            image: ChessIcon
        },
        {
            title: "VIDEOGAMES",
            description: "I play videogames since I was a kid, the english that I know I have learned playing games and browsing on internet. My favorite game of all times is Shadow of The Colossus. I've just finished Grand Theft Auto V, Monster Hunter Rise: Sunbreak (DLC) and Pokémon: Soul Silver and now I've been playing Snake Pass, Donkey Kong Country and Trials Fusion",
            image: VideogamesIcon
        },
        {
            title: "LIVESTREAM",
            description: "I really enjoy watching livestream channels when I'm down, I enjoy watching illustration, gameplay, e-sports & coding channels; I've also done some lives coding some projects and I have projects related to content creation",
            image: LivestreamIcon
        },
        {
            title: "SCIENCE",
            description: "Since I discovered the scientific thinking/method I became a skeptic person, so on I try to be near of science news, exercise my own scientic thinking and encourage people to also do it",
            image: ScienceIcon
        },
        {
            title: "FOOD",
            description: "I live in São Paulo - SP, Brazil, and it has a pretty cool pizza culture; pepperoni pizza is my favorite food since I was a kid so if you're going to ask me to eat it's definitely the right order. I also like Ramen and Sushi",
            image: FoodIcon
        },
        {
            title: "ILLUSTRATION",
            description: "I'm definitely not an illustrator, but I really enjoy to draw since I was a kid so every now and then I take time to doodle, draw and play with pen, pencils and papers",
            image: IllustrationIcon
        }
    ]

    const [selectedHobbieDescription, setSelectedHobbieDescription] = useState<any>(hobbies[0].description);

    const uppercaseFirstLetter = (text: string): string => text.charAt(0) + text.slice(1, text.length - 1)

    return (
        <InternalSection>
            <HobbiesHeader id="hobbies-section">HOBBIES</HobbiesHeader>
            <HobbiesSubheader>Select below to see the hobby description</HobbiesSubheader>
            <HobbiesWrapper>
                <HobbiesIconWrapper>
                    {hobbies.map((hobbie: Hobbie) => (
                        <Hobbie key={hobbie.title} onClick={() => setSelectedHobbieDescription(hobbie.description)}>
                            <HobbieIcon src={hobbie.image} alt={`${uppercaseFirstLetter(hobbie.title)} icon`} />
                            <HobbieTitle $selected={hobbie.description === selectedHobbieDescription}>{hobbie.title}</HobbieTitle>
                        </Hobbie> 
                    ))}
                </HobbiesIconWrapper>
                <HighlightedHobbieDescription>
                    {selectedHobbieDescription}
                </HighlightedHobbieDescription>
            </HobbiesWrapper>
        </InternalSection>
    );
}

export default HobbiesSection;