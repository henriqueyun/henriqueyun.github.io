import theme from '../../theme'
import { styled } from "styled-components"

import KenloIcon from '../../assets/kenlo.png'
import ZRPIcon from '../../assets/zrp.png'
import iColaboraIcon from '../../assets/icolabora.png'
import InputIcon from '../../assets/input.png'

const CareerHeader = styled.h1`
    font-size: ${theme.font.size.title};
    font-weight: ${theme.font.weight.bold};
    text-align: center;
    color: ${theme.palette.primary};
`

const CareerJobCardWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 72px;
`    

const CareerJobCard = styled.div`
    display: flex;
    gap: 48px;
    padding: 0 100px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
        padding: 0 32px;
        align-items: center;
        text-align: center;
    }
`

const CareerCompanyIcon = styled.img`
    max-height: 128px;
    max-width: 128px;
`

const CareerJobCardContent = styled.span`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const CareerCompanyTitle = styled.h2`
    font-size: ${theme.font.size.highlight};
    font-weight: ${theme.font.weight.bold};
`

const CareerPositionTitle = styled.h3`
    font-size: ${theme.font.size.highlight};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.palette.primary};
`

const CareerPositionTimeInterval = styled.h3`
    font-size: ${theme.font.size.highlight};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.palette.primary};
    @media (max-width: 768px) {
        font-size: ${theme.font.size.content};
    }
`

const CareerPositionDescription = styled.p`
    font-size: ${theme.font.size.highlight};
    color: ${theme.palette.text.secondary};
    @media (max-width: 768px) {
        text-align: justify;
        font-size: ${theme.font.size.content};
    }
`

function CareerSection() {

    return (
        <>
            <CareerJobCardWrapper>
                <CareerHeader id="career-section">CAREER</CareerHeader>
                <CareerJobCard>
                    <CareerCompanyIcon src={KenloIcon} />
                    <CareerJobCardContent>
                        <CareerCompanyTitle>Kenlo</CareerCompanyTitle>
                        <CareerPositionTitle>Full-stack Developer</CareerPositionTitle>
                        <CareerPositionTimeInterval>
                            [Dec/23 - Now]
                        </CareerPositionTimeInterval>
                        <CareerPositionDescription>
                        Works in one of the most used real state softwares of the country: IMOB. Using mainly .NET, Javascript and HTML + CSS to perform backend/frontend tasks for development of existing and new features
                        </CareerPositionDescription>
                    </CareerJobCardContent>
                </CareerJobCard>
                <CareerJobCard>
                    <CareerCompanyIcon src={ZRPIcon} />
                    <CareerJobCardContent>
                        <CareerCompanyTitle>ZRP</CareerCompanyTitle>
                        <CareerPositionTitle>Full-stack Developer</CareerPositionTitle>
                        <CareerPositionTimeInterval>
                            [Apr/22 - May/23]
                        </CareerPositionTimeInterval>
                        <CareerPositionDescription>
                            Acted in different projects using Node.js, React.js and Material UI; including a Twilio Chatbot 
                            integrated to a Node.js API (Strapi); along the projects has also had experiences with Serverless 
                            Framework (AWS Lambda), Typescript, Nest.js, TypeORM, Jest and more
                        </CareerPositionDescription>
                    </CareerJobCardContent>
                </CareerJobCard>
                <CareerJobCard>
                    <CareerCompanyIcon src={iColaboraIcon} />
                    <CareerJobCardContent>
                        <CareerCompanyTitle>iColabora</CareerCompanyTitle>
                        <CareerPositionTitle>Junior Programmer Analyst</CareerPositionTitle>
                        <CareerPositionTimeInterval> [Nov/19 - Apr/22]</CareerPositionTimeInterval>
                        <CareerPositionDescription>
                            Had worked with Turbina, a BPMS, developing new processes and features through the 
                            application (using Vue.js, Javascript, HTML & CSS). Had also built and worked on backend APIs 
                            using Node.js.
                        </CareerPositionDescription>
                    </CareerJobCardContent>
                </CareerJobCard>
                <CareerJobCard>
                    <CareerCompanyIcon src={InputIcon} />
                    <CareerJobCardContent>
                        <CareerCompanyTitle>Input Tecnologia</CareerCompanyTitle>
                        <CareerPositionTitle>Software Development Intern</CareerPositionTitle> 
                        <CareerPositionTimeInterval>[Apr/19 - Nov/19]</CareerPositionTimeInterval>
                        <CareerPositionDescription>
                            Developed and maintained different ERP systems but acting mainly in the company Hospital System (WinHosp), using the Clarion IDE/Language connected with Microsoft SQL Server Databases.
                        </CareerPositionDescription>
                    </CareerJobCardContent>
                </CareerJobCard>
            </CareerJobCardWrapper>
        </>
    );
}

export default CareerSection;