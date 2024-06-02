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
    font-weight: ${theme.font.weight.bold};
`

const HeaderHeadline = styled.strong`
    font-size: ${theme.font.size.title};
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
    border-color: ${theme.palette.primary};
    padding: 20px 28px;
    display: flex;
    align-items: center;
    gap: 12px;
    &:hover {
        background-color: rgba(0, 87, 189, 0.25);
    }
    &:active {
        color: red;
        border-color: red;
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
            <HeaderButton target="_self" download="Currículo - Henrique Lima de Oliveira.pdf" href="/henriqueyun_curriculum_2023-06.pdf">
                <DownloadIcon fill={theme.palette.primary} width={theme.font.size.action} height={theme.font.size.action}/>
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