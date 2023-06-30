import theme from '../../theme'
import { styled } from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const HeaderTextWrapper = styled.span`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const HeaderText = styled.p`
    font-size: ${theme.font.size.highlight}
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
                    and I help business and write code
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