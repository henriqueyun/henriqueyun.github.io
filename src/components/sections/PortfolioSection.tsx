import { styled } from 'styled-components'
import theme from '../../theme'

import ArarastoreIcon from '../../assets/ararastore.png'
import MoviesIcon from '../../assets/movies.png'
import PokeabilitiesIcon from '../../assets/pokeabilities.png'
import XetIcon from '../../assets/xet.png'

const PortfolioHeader = styled.h1`
    font-size: ${theme.font.size.title};
    font-weight: ${theme.font.weight.bold};
    text-align: center;
    background: linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%); 
    background-clip: text;
    color: transparent;
`

const PortfolioCardsWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding-top: 56px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const PortfolioCard = styled.div`
    background-image: linear-gradient(60deg, rgba(40, 40, 40, 0.25), rgba(0, 87, 189, 0.25));
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 90%;
    }
`

const PortfolioCardIcon = styled.img`
    width: 128px;
    height: 128px;
    border: solid;
    border-color: white;
    border-width: 2px;
    display: block;
`

const PortfolioCardMainContent = styled.span`
    margin: 40px 32px 32px 40px;
    text-align: justify;
    display: flex;
    gap: 20px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const PortfolioCardMainContentText = styled.span`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const PortfolioCardBottomContent = styled.span`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: 8px;
    padding: 0px 24px 24px 0;
    @media (max-width: 768px) {
        justify-content: center;
        padding: 0px 24px 24px 24px;
    }
`

const PortfolioCardTitle = styled.h2`
    font-size: ${theme.font.size.highlight};
`

const PortfolioCardDescription = styled.p`
    font-size: ${theme.font.size.content};
`

const PortfolioBadge = styled.span`
    background-color: ${theme.palette.primary};
    border-radius: 2ch;
    padding: 6px 12px;
`

function PortfolioSection() {

    return (
        <section>
            <PortfolioHeader id="portfolio-section">
                PORTFOLIO
            </PortfolioHeader>
            <PortfolioCardsWrapper>
                <PortfolioCard>
                    <PortfolioCardMainContent>
                        <div>
                            <PortfolioCardIcon src={ArarastoreIcon} alt="Ararastore icon" />
                        </div>
                        <PortfolioCardMainContentText>
                            <PortfolioCardTitle>Ararastore</PortfolioCardTitle>
                            <PortfolioCardDescription>This was my college final project. It&apos;s a fashion e-commerce that has focus on early entrepeneurs. I participated of the entire process of development including design, front end development, database modeling and back end development.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>

                    <PortfolioCardBottomContent>
                        <PortfolioBadge>React.js</PortfolioBadge>
                        <PortfolioBadge>Nest.js</PortfolioBadge>
                        <PortfolioBadge>Vite</PortfolioBadge>
                    </PortfolioCardBottomContent>
                </PortfolioCard>

                <PortfolioCard>
                    <PortfolioCardMainContent>
                        <div>
                            <PortfolioCardIcon src={MoviesIcon} alt="Movies icon"/>
                        </div>
                        <PortfolioCardMainContentText>
                            <PortfolioCardTitle>The Movies API</PortfolioCardTitle>
                            <PortfolioCardDescription>It&apos;s user interface built with React.js that consumes The Movies API for looking for movies. It uses pure CSS only and has simple features like search and pagination. Built as a Technical Challenge.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>

                    <PortfolioCardBottomContent>
                        <PortfolioBadge>React.js</PortfolioBadge>
                        <PortfolioBadge>CSS</PortfolioBadge>
                        <PortfolioBadge>Vite</PortfolioBadge>
                        <PortfolioBadge>API</PortfolioBadge>
                    </PortfolioCardBottomContent>
                </PortfolioCard>

                <PortfolioCard>
                    <PortfolioCardMainContent>
                        <div>
                            <PortfolioCardIcon src={PokeabilitiesIcon} alt="Pokéabilities icon" />
                        </div>
                        <PortfolioCardMainContentText>
                            <PortfolioCardTitle>Pokéabilities</PortfolioCardTitle>
                            <PortfolioCardDescription>My second Pokédex ever built with Vue.js. I am a developer so I must have built something using the Pokémon Public Web API, right? In this app. you can look for a Pokémon and see it abilities. Built as a Technical Challenge.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>

                    <PortfolioCardBottomContent>
                        <PortfolioBadge>Vue.js</PortfolioBadge>
                        <PortfolioBadge>CSS</PortfolioBadge>
                    </PortfolioCardBottomContent>
                </PortfolioCard>

                <PortfolioCard>
                    <PortfolioCardMainContent>
                        <div>
                            <PortfolioCardIcon src={XetIcon} alt="Xet icon" />
                        </div>
                        <PortfolioCardMainContentText>
                            <PortfolioCardTitle>Xet</PortfolioCardTitle>
                            <PortfolioCardDescription>Personal project where I made a simple web application that uses web sockets to make chat that can be accessed through a browser. As a challenge I added the feature that chats got available for a limited amount of time.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>

                    <PortfolioCardBottomContent>
                        <PortfolioBadge>Socket.io</PortfolioBadge>
                        <PortfolioBadge>Quasar.js</PortfolioBadge>
                        <PortfolioBadge>Express.js</PortfolioBadge>
                    </PortfolioCardBottomContent>
                </PortfolioCard>
            </PortfolioCardsWrapper>
        </section>
    );
}

export default PortfolioSection;