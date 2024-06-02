import theme from "../../theme"
import { styled } from "styled-components"
import { useState } from "react"

import ReactIcon from '../../assets/react.png'
import VueIcon from '../../assets/vue.png'
import MaterialUIIcon from '../../assets/material-ui.png'
import SassIcon from '../../assets/sass.png'
import JSIcon from '../../assets/js.png'
import HtmlIcon from '../../assets/html.png'
import CssIcon from '../../assets/css.png'

import NestIcon from '../../assets/nest.png'
import ExpressIcon from '../../assets/express.png'
import NodeIcon from '../../assets/node.png'
import JavaIcon from '../../assets/java.png'
import ServerlessIcon from '../../assets/serverless.png'

import MySQLIcon from '../../assets/mysql.png'
import MicrosoftSQLIcon from '../../assets/microsoft-sql.svg'
import MongoDBIcon from '../../assets/mongodb.png'
import PostgreSQLIcon from '../../assets/postgres.png'

const InternalSection = styled.section`
    display: flex;
    flex-flow: wrap column;
    align-items: center;
    gap: 32px;
`

const SkillsHeader = styled.h1`
    font-size: ${theme.font.size.title};
    font-weight: ${theme.font.weight.bold};
    text-align: center;
    color: ${theme.palette.primary};
`

const SkillsSubHeader = styled.p`
    font-size: ${theme.font.size.content};
`

const SkillsDivisionWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
    @media (max-width: 768px) {
        align-items: center;
    }
`

const SkillsDivisionTitlesWrapper = styled.ul`
    display: flex;
    justify-content: center;
    gap: 40px;
    @media (max-width: 768px) {
        align-items: center;
        flex-direction: column;
    }
`

const SkillDivisionTitle = styled.li<{ $selected: boolean; }>`
    font-size: ${theme.font.size.highlight};
    color: ${props => props.$selected ? theme.palette.text.primary : theme.palette.text.secondary};
    font-weight: ${theme.font.weight.bold};
    cursor: pointer;
`

const SkillsDivisionIconWrapper = styled.ul`
    display: flex;
    justify-content: center;
    gap: 32px;
    @media (max-width: 768px) {
        align-items: center;
        width: 80%;
        flex-wrap: wrap;
    }
`

const Skill = styled.img`
    height: 64px;
    width: 64px;
`

const SkillBg = styled.span`
    padding: 8px;
    border-radius: 50%;
    background-color: rgba(0, 87, 189, 0.75);
    border: solid 10px ${theme.palette.primary}
`

function SkillsSection() {

    const divisions = ["FRONT END", "BACK END", "DATABASES"]
    const [selectedDivision, setSelectedDivision] = useState(divisions[0])

    return (
        <InternalSection>
            <SkillsHeader id="skills-section">SKILLS</SkillsHeader>
            <SkillsSubHeader>Select below to see area related skills</SkillsSubHeader>
            <SkillsDivisionWrapper>
                <SkillsDivisionTitlesWrapper>
                    {divisions.map(division => (
                        <SkillDivisionTitle $selected={division === selectedDivision}
	key={division}
	onClick={() => setSelectedDivision(division)}
                        >
                            {division}
                        </SkillDivisionTitle>
                    ))}
                </SkillsDivisionTitlesWrapper>
                {selectedDivision === 'FRONT END'
                    ? (
                        <SkillsDivisionIconWrapper>
                            <SkillBg>
                                <Skill src={ReactIcon} alt="React icon" title="React" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={VueIcon} alt="Vue icon" title="Vue" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={MaterialUIIcon} alt="Material UI icon" title="Material UI" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={SassIcon} alt="SASS icon" title="SASS" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={JSIcon} alt="Javascript icon" title="Javascript" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={HtmlIcon} alt="HTML icon" title="HTML" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={CssIcon} alt="CSS icon" title="CSS" />
                            </SkillBg>
                        </SkillsDivisionIconWrapper>
                    ) : selectedDivision === 'BACK END' ? (
                        <SkillsDivisionIconWrapper>
                            <SkillBg>
                                <Skill src={NestIcon} alt="Nest icon" title="Nest" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={ExpressIcon} alt="Express icon" title="Express" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={NodeIcon} alt="Node icon" title="Node" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={JavaIcon} alt="Java icon" title="Java" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={ServerlessIcon} alt="Serverless icon" title="Serverless" />
                            </SkillBg>
                        </SkillsDivisionIconWrapper>
                    ) : (
                        <SkillsDivisionIconWrapper>
                            <SkillBg>
                                <Skill src={MySQLIcon} alt="My SQL icon" title="MySQL" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={MicrosoftSQLIcon} alt="Microsoft SQL icon" title="Microsoft SQL" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={MongoDBIcon} alt="Mongo DB icon" title="MongoDB" />
                            </SkillBg>
                            <SkillBg>
                                <Skill src={PostgreSQLIcon} alt="Postgre SQL icon" title="PostgreSQL" />
                            </SkillBg>
                        </SkillsDivisionIconWrapper>
                    )
                }
            </SkillsDivisionWrapper>
        </InternalSection>
    );
}

export default SkillsSection;