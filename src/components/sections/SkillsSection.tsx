import theme from "../../theme";
import { styled } from "styled-components";


import ReactIcon from '../../assets/react.png'
import VueIcon from '../../assets/vue.png'
import MaterialUIIcon from '../../assets/material-ui.png'
import SassIcon from '../../assets/sass.png'
import JSIcon from '../../assets/js.png'
import HtmlIcon from '../../assets/html.png'
import CssIcon from '../../assets/css.png'


function SkillsSection() {
    
    const SkillsHeader = styled.h1`
        font-size: ${theme.font.size.title};
        font-weight: ${theme.font.weight.bold};
        text-align: center;
        color: ${theme.palette.primary};
    `

    const SkillsDivisionWrapper = styled.ul`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 48px;
    `

    const SkillsDivisionTitlesWrapper = styled.ul`
        display: flex;
        justify-content: center;
        gap: 40px;
    `

    const SkillDivisionTitle = styled.li`
        font-size: ${theme.font.size.highlight};
    `

    const SkillsDivisionIconWrapper = styled.ul`
        display: flex;
        justify-content: center;
        gap: 32px;
    `

    const Skill = styled.img`
        height: 64px;
        width: 64px;
    `

    return (
        <>
            <SkillsHeader>SKILLS</SkillsHeader>
            <SkillsDivisionWrapper>
                <SkillsDivisionTitlesWrapper>
                    <SkillDivisionTitle>FRONT END</SkillDivisionTitle>
                    <SkillDivisionTitle>BACK END</SkillDivisionTitle>
                    <SkillDivisionTitle>DATABASES</SkillDivisionTitle>
                </SkillsDivisionTitlesWrapper>
                <SkillsDivisionIconWrapper>
                    <Skill src={ReactIcon} alt="React icon"/>
                    <Skill src={VueIcon} alt="Vue icon"/>
                    <Skill src={MaterialUIIcon} alt="Material UI icon"/>
                    <Skill src={SassIcon} alt="SASS icon"/>
                    <Skill src={JSIcon} alt="Javascript icon"/>
                    <Skill src={HtmlIcon} alt="HTML icon"/>
                    <Skill src={CssIcon} alt="CSS icon"/>
                </SkillsDivisionIconWrapper>
            </SkillsDivisionWrapper>
        </>
    );
}

export default SkillsSection;