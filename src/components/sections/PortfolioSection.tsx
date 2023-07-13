import { styled } from 'styled-components'
import theme from '../../theme'

const PortfolioHeader = styled.h1`
    font-size: ${theme.font.size.title};
    font-weight: ${theme.font.weight.bold};
    text-align: center;
    color: ${theme.palette.primary};
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
    background-image: linear-gradient(to right, rgba(40, 40, 40, 0.25), rgba(160, 80, 80, 0.25));
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 90%;
    }
`

const PortfolioCardIcon = styled.span`
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
    justify-content: end;
    gap: 8px;
    padding: 0px 24px 24px 0;
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
            <PortfolioHeader>
                PORTFOLIO
            </PortfolioHeader>
            <PortfolioCardsWrapper>
                <PortfolioCard>
                    <PortfolioCardMainContent>
                        <div>
                            <PortfolioCardIcon />
                        </div>
                        <PortfolioCardMainContentText>
                            <PortfolioCardTitle>No Projects Im Busy</PortfolioCardTitle>
                            <PortfolioCardDescription>Não há protótipo utilizando apenas HTML, CSS e Javascript puros de um site pessoal.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>

                    <PortfolioCardBottomContent>
                        <PortfolioBadge>Absolute</PortfolioBadge>
                        <PortfolioBadge>Nothing</PortfolioBadge>
                    </PortfolioCardBottomContent>
                </PortfolioCard>

                <PortfolioCard>
                    <PortfolioCardMainContent>
                        <div>
                            <PortfolioCardIcon />
                        </div>
                        <PortfolioCardMainContentText>
                            <PortfolioCardTitle>No Projects Im Busy</PortfolioCardTitle>
                            <PortfolioCardDescription>Não há protótipo utilizando apenas HTML, CSS e Javascript puros de um site pessoal.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>

                    <PortfolioCardBottomContent>
                        <PortfolioBadge>Absolute</PortfolioBadge>
                        <PortfolioBadge>Nothing</PortfolioBadge>
                    </PortfolioCardBottomContent>
                </PortfolioCard>

                <PortfolioCard>
                    <PortfolioCardMainContent>
                        <div>
                            <PortfolioCardIcon />
                        </div>
                        <PortfolioCardMainContentText>
                            <PortfolioCardTitle>No Projects Im Busy</PortfolioCardTitle>
                            <PortfolioCardDescription>Não há protótipo utilizando apenas HTML, CSS e Javascript puros de um site pessoal.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>

                    <PortfolioCardBottomContent>
                        <PortfolioBadge>Absolute</PortfolioBadge>
                        <PortfolioBadge>Nothing</PortfolioBadge>
                    </PortfolioCardBottomContent>
                </PortfolioCard>

                <PortfolioCard>
                    <PortfolioCardMainContent>
                        <div>
                            <PortfolioCardIcon />
                        </div>
                        <PortfolioCardMainContentText>
                            <PortfolioCardTitle>No Projects Im Busy</PortfolioCardTitle>
                            <PortfolioCardDescription>Não há protótipo utilizando apenas HTML, CSS e Javascript puros de um site pessoal.</PortfolioCardDescription>
                        </PortfolioCardMainContentText>
                    </PortfolioCardMainContent>

                    <PortfolioCardBottomContent>
                        <PortfolioBadge>Absolute</PortfolioBadge>
                        <PortfolioBadge>Nothing</PortfolioBadge>
                    </PortfolioCardBottomContent>
                </PortfolioCard>
            </PortfolioCardsWrapper>
        </section>
    );
}

export default PortfolioSection;