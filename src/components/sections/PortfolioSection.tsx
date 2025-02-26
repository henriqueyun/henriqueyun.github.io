import { styled } from 'styled-components'
import theme from '../../theme'

import ArarastoreIcon from '../../assets/ararastore.webp'
import MoviesIcon from '../../assets/movies.webp'
import PizzariaIcon from '../../assets/projeto-pizzaria.webp'
import XetIcon from '../../assets/xet.webp'
import OpenInNewIcon from '../../assets/open-in-new.svg?react'
import GithubIcon from '../../assets/github.svg?react'

const PortfolioHeader = styled.h1`
    font-size: ${theme.font.size.title};
    font-weight: ${theme.font.weight.bold};
    text-align: center;
    background: linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%); 
    background-clip: text;
    color: transparent;
    @media (max-width: 768px) {
        font-size: ${theme.font.size.xs.title};
    }
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
    border: 0.25px solid ${theme.palette.primary};
    border-radius: 8px;
    transition: box-shadow ease-in 0.5s;
    &:hover {
        transition: box-shadow ease-in 0.25s;
        box-shadow:
            0px 20px 300px ${theme.palette.gradient.dark};
    }
    
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


const PortfolioCardBottomWrapper = styled.span`
    display: flex;
    flex-flow: row no-wrap;
    @media (max-width: 768px) {
      flex-flow: column wrap;
    }
`

const PortfolioCardBottomLeftContent = styled.span`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: start;
    gap: 8px;
    padding: 0 0 0 24px;
    flex: 1.5 0 0;
    @media (max-width: 768px) {
        padding: 0px 24px 24px 24px;
        flex: 1;
        justify-content: center;
        align-items: center;
    }
`

const PortfolioCardBottomRightContent = styled.span`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: start;
    gap: 8px;
    padding: 0px 24px 24px 0;
    flex: 1 1 0;
    @media (max-width: 768px) {
        padding: 0px 24px 24px 24px;
        justify-content: center;
        align-items: center;
    }
`

const PortfolioCardTitle = styled.h2`
    font-size: ${theme.font.size.highlight};
    font-weight: ${theme.font.weight.bold};
`

const PortfolioCardSubtitle = styled.h2`
    font-weight: ${theme.font.weight.bold};
`

const PortfolioCardDescription = styled.p`
    font-size: ${theme.font.size.content};
    color: ${theme.palette.text.secondary};
`

const PortfolioBadge = styled.span`
    background-color: ${theme.palette.primary};
    background: linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%); 
    border-radius: 2ch;
    padding: 6px 12px;
`

const CardActionButton = styled.a`
    background-color: transparent;
    border: solid 2px ${theme.palette.primary};
    padding: 12px;
    border-radius: 50px;
    background: linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%); 
    background-clip: text;
    color: transparent;
    font-size: ${theme.font.size.content};
    font-weight: ${theme.font.weight.bold};
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    &:before: {
        height: 0%;
        width: 2px;
    }
    &:hover {
        color: ${theme.palette.text.primary};
        border-color: ${theme.palette.text.secondary};
        box-shadow: 
            0 0 10px ${theme.palette.gradient.light},
            inset 0 0 10px ${theme.palette.gradient.light};
    }
    &:hover > svg {
        fill: white;
    }
    &:active {
        color: ${theme.palette.text.secondary};
        border-color: ${theme.palette.text.secondary};
    }
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
                            <PortfolioCardSubtitle>Full-stack Project</PortfolioCardSubtitle>
                            <PortfolioCardDescription>This was my college final project. It&apos;s a fashion e-commerce that has focus on early entrepeneurs. I participated of the entire process of development including design, front end development, database modeling and back end development.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>

                    <PortfolioCardBottomWrapper>
                        <PortfolioCardBottomLeftContent>
                            <CardActionButton href="https://arara-store-frontend.netlify.app" target="_blank">
                                <OpenInNewIcon fill={theme.palette.primary} />
                                Open Project
                            </CardActionButton>
                            <CardActionButton href="https://github.com/henriqueyun/arara-store-frontend" target="_blank">
                                <GithubIcon fill={theme.palette.primary} />
                                Repository
                            </CardActionButton>
                        </PortfolioCardBottomLeftContent>
                        <PortfolioCardBottomRightContent>
                            <PortfolioBadge>React.js</PortfolioBadge>
                            <PortfolioBadge>Nest.js</PortfolioBadge>
                            <PortfolioBadge>Vite</PortfolioBadge>
                        </PortfolioCardBottomRightContent>
                    </PortfolioCardBottomWrapper>
                </PortfolioCard>

                <PortfolioCard>
                    <PortfolioCardMainContent>
                        <div>
                            <PortfolioCardIcon src={MoviesIcon} alt="Movies icon" />
                        </div>
                        <PortfolioCardMainContentText>
                            <PortfolioCardTitle>The Movies API</PortfolioCardTitle>
                            <PortfolioCardSubtitle>Client Front-end</PortfolioCardSubtitle>
                            <PortfolioCardDescription>It&apos;s user interface built with React.js that consumes The Movies API for looking for movies. It uses pure CSS only and has simple features like search and pagination. Built as a Technical Challenge.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>
                    <PortfolioCardBottomWrapper>
                        <PortfolioCardBottomLeftContent>
                            <CardActionButton href="https://github.com/henriqueyun/cubos-movies" target="_blank">
                                <GithubIcon fill={theme.palette.primary} />
                                Repository
                            </CardActionButton>
                        </PortfolioCardBottomLeftContent>
                        <PortfolioCardBottomRightContent>
                        <PortfolioBadge>Vue.js</PortfolioBadge>
                        <PortfolioBadge>CSS</PortfolioBadge>
                        <PortfolioBadge>Vite</PortfolioBadge>
                        <PortfolioBadge>API</PortfolioBadge>
                        </PortfolioCardBottomRightContent>                        
                    </PortfolioCardBottomWrapper>
                </PortfolioCard>

                <PortfolioCard>
                    <PortfolioCardMainContent>
                        <div>
                            <PortfolioCardIcon src={PizzariaIcon} alt="Pizzaria icon" />
                        </div>
                        <PortfolioCardMainContentText>
                            <PortfolioCardTitle>Projeto Pizzaria</PortfolioCardTitle>
                            <PortfolioCardSubtitle>Full-stack Project</PortfolioCardSubtitle>
                            <PortfolioCardDescription>This service is part of a pizzaria system, here you can register your information order a pizza and a drink then track your order. The project has another front-end where the pizzaria attendent update information about the orders.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>
                    <PortfolioCardBottomWrapper>
                        <PortfolioCardBottomLeftContent>
                            <CardActionButton href="https://pizzaria-cliente.netlify.app" target="_blank">
                                <OpenInNewIcon fill={theme.palette.primary} />
                                Open Project
                            </CardActionButton>
                            <CardActionButton href="https://github.com/henriqueyun/pizzaria-monorepo" target="_blank">
                                <GithubIcon fill={theme.palette.primary} />
                                Repository
                            </CardActionButton>
                        </PortfolioCardBottomLeftContent>
                        <PortfolioCardBottomRightContent>
                            <PortfolioBadge>Vue.js</PortfolioBadge>
                            <PortfolioBadge>CSS</PortfolioBadge>
                            <PortfolioBadge>Node.js</PortfolioBadge>
                        </PortfolioCardBottomRightContent>                        
                    </PortfolioCardBottomWrapper>
                </PortfolioCard>

                <PortfolioCard>
                    <PortfolioCardMainContent>
                        <div>
                            <PortfolioCardIcon src={XetIcon} alt="Xet icon" />
                        </div>
                        <PortfolioCardMainContentText>
                            <PortfolioCardTitle>Xet</PortfolioCardTitle>
                            <PortfolioCardSubtitle>Full-stack Project</PortfolioCardSubtitle>
                            <PortfolioCardDescription>Personal project where I made a simple web application that uses web sockets to make chat that can be accessed through a browser. As a challenge I added the feature that chats got available for a limited amount of time.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>
                    <PortfolioCardBottomWrapper>
                        <PortfolioCardBottomLeftContent>
                            <CardActionButton href="https://github.com/henriqueyun/chat-frontend" target="_blank">
                                <GithubIcon fill={theme.palette.primary} />
                                Repository
                            </CardActionButton>
                        </PortfolioCardBottomLeftContent>
                        <PortfolioCardBottomRightContent>
                        <PortfolioBadge>Socket.io</PortfolioBadge>
                        <PortfolioBadge>Quasar.js</PortfolioBadge>
                        <PortfolioBadge>Express.js</PortfolioBadge>
                        </PortfolioCardBottomRightContent>                        
                    </PortfolioCardBottomWrapper>
                </PortfolioCard>
            </PortfolioCardsWrapper>
        </section>
    );
}

export default PortfolioSection;
