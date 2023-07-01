import { styled } from "styled-components";
import theme from "../../theme";

import ChessIcon from '../../assets/chess.png'
import VideogamesIcon from '../../assets/videogame.png'
import ScienceIcon from '../../assets/science.png'
import LivestreamIcon from '../../assets/livestream.png'
import PizzaIcon from '../../assets/pizza.png'
import IllustrationIcon from '../../assets/illustration.png'

function HobbiesSection() {

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
    `

    const HobbiesIconWrapper = styled.ul`
        display: flex;
        justify-content: center;
        gap: 32px;
    `

    const Hobbie = styled.span`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    `

    const HobbieIcon = styled.img`
        width: 64px;
        height: 64px;
    `

    const HobbieTitle = styled.li`
        font-size: ${theme.font.size.highlight};
    `

    const HighlightedHobbieDescription = styled.p`
        font-size: ${theme.font.size.highlight};
        text-align: justify;
        line-height: 40px;
    `

    return (
        <>
            <HobbiesHeader>HOBBIES</HobbiesHeader>
            <HobbiesWrapper>
                <HobbiesIconWrapper>
                    <Hobbie>
                        <HobbieIcon src={ChessIcon} alt="Chess icon"/>
                        <HobbieTitle>Chess</HobbieTitle>
                    </Hobbie>
                    <Hobbie>
                        <HobbieIcon src={VideogamesIcon} alt="Videogames icon"/>
                        <HobbieTitle>Videogames</HobbieTitle>
                    </Hobbie>
                    <Hobbie>
                        <HobbieIcon src={ScienceIcon} alt="Science icon"/>
                        <HobbieTitle>Science</HobbieTitle>
                    </Hobbie>
                    <Hobbie>
                        <HobbieIcon src={LivestreamIcon} alt="Livestream icon"/>
                        <HobbieTitle>Livestream</HobbieTitle>
                    </Hobbie>
                    <Hobbie>
                        <HobbieIcon src={PizzaIcon} alt="Pizza icon"/>
                        <HobbieTitle>Pizza</HobbieTitle>
                    </Hobbie>
                    <Hobbie>
                        <HobbieIcon src={IllustrationIcon} alt="Illustration icon"/>
                        <HobbieTitle>Illustration</HobbieTitle>
                    </Hobbie>
                </HobbiesIconWrapper>
                <HighlightedHobbieDescription>
                    I'm definitely not an illustrator, but since I was a kid I like to draw so every now and then I take time to doodle or watch some illustration content.
                </HighlightedHobbieDescription>
            </HobbiesWrapper>
        </>
    );
}

export default HobbiesSection;