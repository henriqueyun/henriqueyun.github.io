import { styled } from "styled-components"
import theme from "../../theme"
import { useState } from "react"

import ChessIcon from '../../assets/chess.webp'
import VideogamesIcon from '../../assets/videogame.webp'
import ScienceIcon from '../../assets/science.webp'
import LivestreamIcon from '../../assets/livestream.webp'
import FoodIcon from '../../assets/pizza.webp'
import IllustrationIcon from '../../assets/illustration.webp'

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
    background: linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%); 
    background-clip: text;
    color: transparent;
    @media (max-width: 768px) {
        font-size: ${theme.font.size.xs.title};
    }
`

const HobbiesSubheader = styled.p`
    font-size: ${theme.font.size.highlight};
    text-align: center;
    color: ${theme.palette.text.secondary};
    @media (max-width: 768px) {
        font-size: ${theme.font.size.xs.highlight};
    }
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


const Hobbie = styled.span<{ $selected?: boolean; }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    cursor: pointer;
    opacity: ${props => !props.$selected ? '0.75' : '1'};
    width: 180px;
    &:hover {
        opacity: 1;
    }
    &:hover li {
        color: ${props => !props.$selected ? theme.palette.text.secondary : 'transparent'};
    }
`

const HobbieIcon = styled.img`
    height: 64px;
`

const HobbieTitle = styled.li<{ $selected?: boolean; }>`
    font-weight: ${theme.font.weight.bold};
    font-family: ${theme.font.family.title}; 
    font-size: ${theme.font.size.highlight};
    background: ${props => props.$selected ? `linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%)`: theme.palette.text.secondary};
    background-clip: text;
    color: transparent;
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
            description: "I was introduced to chess back in school by some classmates. I practiced it a little and I even a member of the school chess team by a while. Nowadays,  I used to keep up with world chess scenario and still play sometimes. I am currently trying to play more rapid matches (10 + 0) to solidify my knowledge.",
            image: ChessIcon
        },
        {
            title: "VIDEOGAMES",
            description: "I really enjoy videogames, the english that I know I have learned playing games and browsing on internet. My favorite game of all times is Shadow of The Colossus. I've just finished Snake Pass, Grand Theft Auto V, Monster Hunter Rise: Sunbreak (DLC) and now I've been playing Doom II, Bioshock: Remastered and Donkey Kong Country",
            image: VideogamesIcon
        },
        {
            title: "LIVESTREAM",
            description: "I really enjoy watching livestream channels when I'm down, I enjoy watching illustration, gameplay, e-sports & coding channels; I've also done some lives coding some projects and I have projects related to content creation",
            image: LivestreamIcon
        },
        {
            title: "SCIENCE",
            description: "I am a skeptic person. Since I was a kid I am always trying to ask questions to know more about the world. I found in science a opportunity to get my questions answered so I am always reading and watching science related content",
            image: ScienceIcon
        },
        {
            title: "FOOD",
            description: "I live in São Paulo - SP, Brazil and here we have pretty good pizzas; pepperoni pizza is my favorite food since I was a kid and I also like Ramen and Sushi so if you're going to ask me to eat one of those definitely the right order",
            image: FoodIcon
        },
        {
            title: "ILLUSTRATION",
            description: "I'm definitely not an illustrator, but I have always enjoyed to draw so every now and then I take time to doodle, draw and play with pen, pencils and papers",
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
                        <Hobbie key={hobbie.title} onClick={() => setSelectedHobbieDescription(hobbie.description)} $selected={hobbie.description === selectedHobbieDescription}>
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