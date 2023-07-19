import theme from '../../theme'
import { styled } from 'styled-components'

const Header = styled.header`
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
        background-color: rgba(238, 68, 68, 0.1);
    }
    &:active {
        color: red;
        border-color: red;
    }
    @media (max-width: 768px) {
        justify-content: center;
    }
`

import DownloadIcon from '../../assets/download.svg'

const Icon = styled.img`
    width: ${theme.font.size.action};
    height: ${theme.font.size.action};
`

function HeaderSection() {
    return (
        <Header>
            <HeaderTextWrapper>
                <HeaderText>
                    My name is
                    {' '}
                    <HighlightedHeaderText>Henrique Lima</HighlightedHeaderText>
                    {' '}
                    and I am an Full Stack Developer that write code to help business
                </HeaderText>
                <HeaderHeadline>
                    CHECK MY WORK BELOW
                </HeaderHeadline>
            </HeaderTextWrapper>
            <HeaderButton target="_self" download="Currículo - Henrique Lima de Oliveira.pdf" href="/henriqueyun_curriculum_2023-06.pdf">
                <Icon src={DownloadIcon} alt="Download icon" />
                Resume
            </HeaderButton>
        </Header>
    );
}

export default HeaderSection;