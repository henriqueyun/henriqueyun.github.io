import theme from '../../theme'
import { styled } from 'styled-components'

const Header = styled.header`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    gap: 64px;
    width: 100%;
    @media (max-width: 768px) {
        width: 80%;
        flex-direction: column;
        gap: 48px;
        text-align: center;
    }
`

const HeaderTop = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 768px) {
        width: 80%;
        flex-direction: column;
        gap: 32px;
        text-align: center;
    }
`

const HeaderTextWrapper = styled.span`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 80%;
    @media (max-width: 768px) {
        gap: 32px;
        width: unset;
    }
`

const HeaderText = styled.p`
    color: ${theme.palette.text.secondary};
    font-size: ${theme.font.size.highlight};
    line-height: 32px;
    text-align: justify;
    @media (max-width: 768px) {
        font-size: ${theme.font.size.content};
        gap: 20px;
        width: unset;
    }
`

const HighlightedHeaderText = styled.b`
    background: linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.primary} 99%); 
    background-clip: text;
    color: transparent;
`

const HeaderHeadline = styled.strong`
    font-size: ${theme.font.size.xs.title};
    font-weight: ${theme.font.weight.bold};
`
const HeaderButton = styled.a`
    background: unset;
    color: ${theme.palette.primary};
    font-family: ${theme.font.family.title};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.action};
    text-decoration: none;
    border: solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%);
    padding: 20px 28px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: box-shadow ease-in 1s;
    &:hover {
        box-shadow: 0px 50px 150px ${theme.palette.primary};
        transition: box-shadow ease-out 0.25s;
    }
    &:active {
        color: white;
        border-image-source: linear-gradient(45deg, ${theme.palette.gradient.dark} 37%, ${theme.palette.text.primary} 99%);
    }
    @media (max-width: 768px) {
        justify-content: center;
    }
`

import DownloadIcon from '../../assets/download.svg?react'

function HeaderSection() {
    return (
        <Header>
            <HeaderTop>
                <HeaderTextWrapper>
                    <HeaderText>
                        My name is
                        {' '}
                        <HighlightedHeaderText>Henrique Lima</HighlightedHeaderText>
                        {' '}
                        and I help business and write code, I am a Full-stack Developer that can delivery sites, services and apps from conception and design to users in production
                    </HeaderText>
                </HeaderTextWrapper>
                <HeaderButton target="_self" download="Currículo - Henrique Lima de Oliveira.pdf" href="/curriculum-henrique-lima.pdf">
                    <DownloadIcon fill={theme.palette.primary} width={theme.font.size.action} height={theme.font.size.action} />
                    Resume
                </HeaderButton>
            </HeaderTop>
            <HeaderHeadline>
                READ ABOUT ME AND MY WORK BELOW ↓
            </HeaderHeadline>
        </Header>
    );
}

export default HeaderSection;