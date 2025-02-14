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
    background: linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%); 
    background-clip: text;
    color: transparent;
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
    max-height: 160px;
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

const CareerPositionDescription = styled.span`
    font-size: ${theme.font.size.highlight};
    color: ${theme.palette.text.secondary};
    @media (max-width: 768px) {
        text-align: justify;
        font-size: ${theme.font.size.content};
    }
`

const CareerPositionDescriptionBulletPoint = styled.p`
    padding-bottom: 16px;
`

const CareerPositionKeyTechnology = styled.p`
    font-size: ${theme.font.size.highlight};
    color: ${theme.palette.text.primary};
    @media (max-width: 768px) {
        text-align: justify;
        font-size: ${theme.font.size.content};
    }
`
function CareerSection() {

    return (
        <CareerJobCardWrapper>
            <CareerHeader id="career-section">CAREER</CareerHeader>
            <CareerJobCard>
                <a target="_blank" href="https://www.kenlo.com.br/" rel="noreferrer">
                    <CareerCompanyIcon src={KenloIcon} />
                </a>
                <CareerJobCardContent>
                    <CareerCompanyTitle>Kenlo</CareerCompanyTitle>
                    <CareerPositionTitle>Full-stack Developer</CareerPositionTitle>
                    <CareerPositionTimeInterval>
                        [Dec/23 - Now]
                    </CareerPositionTimeInterval>
                    <CareerPositionDescription>
                        <CareerPositionDescriptionBulletPoint>
                            - Works on the IMOB team, a system used by over 10,000 real estate agencies, to implement new functionalities using React, Node, and .NET 4.8, as well as maintaining existing features;
                        </CareerPositionDescriptionBulletPoint>
                        <CareerPositionDescriptionBulletPoint>
                            - Develops integrated services for IMOB, including the customers search service, using Node, Elasticsearch, Kibana, and MongoDB;
                        </CareerPositionDescriptionBulletPoint>
                        <CareerPositionDescriptionBulletPoint>
                            - Contributed to the insurance team by automating customers mailing through a batch job using Serverless Framework integrated with an internal email service.
                        </CareerPositionDescriptionBulletPoint>
                    </CareerPositionDescription>
                    <CareerPositionKeyTechnology>
                        Key technologies: React, Node (Typescript), .NET, Serverless Framework, Jest,
                        MongoDB.
                    </CareerPositionKeyTechnology>
                </CareerJobCardContent>
            </CareerJobCard>
            <CareerJobCard>
                <a target="_blank" href="hthttps://www.zrp.com.br" rel="noreferrer">
                    <CareerCompanyIcon src={ZRPIcon} />
                </a>
                <CareerJobCardContent>
                    <CareerCompanyTitle>ZRP</CareerCompanyTitle>
                    <CareerPositionTitle>Full-stack Developer</CareerPositionTitle>
                    <CareerPositionTimeInterval>
                        [Apr/22 - May/23]
                    </CareerPositionTimeInterval>
                    <CareerPositionDescription>
                        <CareerPositionDescriptionBulletPoint>
                            - Participated in the delivery of a product registration application for a giveaway. Collaborated on creating a chatbot using Twilio integrated with a Strapi instance, aimed at registering participants products via images using Amazon Textract;
                        </CareerPositionDescriptionBulletPoint>
                        <CareerPositionDescriptionBulletPoint>
                            - Contributed to an internal culture management application with React and Nest, developing end-to-end functionalities related to career path management;
                        </CareerPositionDescriptionBulletPoint>
                        <CareerPositionDescriptionBulletPoint>
                            - Supported a startup app project using React Native and Node, adjusting user interfaces, fixing Bluetooth connectivity bugs, and implementing geolocation data processing algorithms using Danfo.js.
                        </CareerPositionDescriptionBulletPoint>
                    </CareerPositionDescription>
                    <CareerPositionKeyTechnology>
                        Key technologies: React, Node (Typescript), .NET, Serverless Framework, Jest,
                        MongoDB.
                    </CareerPositionKeyTechnology>
                </CareerJobCardContent>
            </CareerJobCard>
            <CareerJobCard>
                <a target="_blank" href="https://portal.icolabora.com.br" rel="noreferrer">
                    <CareerCompanyIcon src={iColaboraIcon} />
                </a>
                <CareerJobCardContent>
                    <CareerCompanyTitle>iColabora</CareerCompanyTitle>
                    <CareerPositionTitle>Junior Programmer Analyst</CareerPositionTitle>
                    <CareerPositionTimeInterval> [Nov/19 - Apr/22]</CareerPositionTimeInterval>
                    <CareerPositionDescription>
                        <CareerPositionDescriptionBulletPoint>
                            - Worked on developing CRM processes and forms in Turbina BPMN (Activiti fork);
                        </CareerPositionDescriptionBulletPoint>
                        <CareerPositionDescriptionBulletPoint>
                            - Developed user interfaces primarily using HTML, CSS, Bootstrap, JavaScript, and Vue 2;
                        </CareerPositionDescriptionBulletPoint>
                        <CareerPositionDescriptionBulletPoint>
                            - Developed backend and ETL services mainly using Node (Sequelize ORM, ES6) and also has minor contributions for Java projects;
                        </CareerPositionDescriptionBulletPoint>
                        - Utilized data streams (SQL with templates) to persist data to user forms.
                    </CareerPositionDescription>
                    <CareerPositionKeyTechnology>
                        Key technologies: Node (Typescript), React, Serverless Framework, Nest, Jest,
                        Material UI, RDS, SQS, SQL, MongoDB e Redis.
                    </CareerPositionKeyTechnology>
                </CareerJobCardContent>
            </CareerJobCard>
            <CareerJobCard>
                <CareerCompanyIcon src={InputIcon} />
                <CareerJobCardContent>
                    <CareerCompanyTitle>Input Tecnologia</CareerCompanyTitle>
                    <CareerPositionTitle>Software Development Intern</CareerPositionTitle>
                    <CareerPositionTimeInterval>[Apr/19 - Nov/19]</CareerPositionTimeInterval>
                    <CareerPositionDescription>
                        <CareerPositionDescriptionBulletPoint>
                            - Used Clarion IDE/Language to create screens with different functionalities for applications in the Hospital, Educational and other sectors;
                        </CareerPositionDescriptionBulletPoint>
                        <CareerPositionDescriptionBulletPoint>
                            - Had contact with ASP.NET applications used for web projects.
                        </CareerPositionDescriptionBulletPoint>
                    </CareerPositionDescription>
                    <CareerPositionKeyTechnology>
                        Key technologies: Vue, HTML, CSS, Javascript, Node, Bootstrap, SQL.
                    </CareerPositionKeyTechnology>
                </CareerJobCardContent>
            </CareerJobCard>
        </CareerJobCardWrapper>
    )
}

export default CareerSection;
