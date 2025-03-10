import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react'
import theme from '../../theme'
import { styled } from 'styled-components'

import KenloIcon from '../../assets/kenlo.webp'
import ZRPIcon from '../../assets/zrp.webp'
import iColaboraIcon from '../../assets/icolabora.webp'
import InputIcon from '../../assets/input.webp'

const CareerHeader = styled.h1`
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

const CareerJobCardWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 72px;
    align-items: center;
    @media (max-width: 768px) {
        gap: 48px;
    }
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

const CareerNumbers = styled.header`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 48px;
    @media (max-width: 768px) {
        flex-flow: column wrap;
        font-size: ${theme.font.size.highlight};
        gap: 16px;
    }
    font-size: ${theme.font.size.action};
`

const CareerBadge = styled.span`
    display: flex;
    flex-flow: row wrap;
    gap: 32px;
    border-bottom: 4px solid ${theme.palette.primary};
    padding-bottom: 8px;
    transition: border-bottom 1s ease-out;
    &:hover {
        border-bottom: 4px solid ${theme.palette.text.primary};
        box-shadow: ${theme.palette.text.primary};
        transition: border-bottom ease-out 0.25s;
    }
    &:hover strong {
        color: ${theme.palette.text.primary};
        transition: color ease-out 0.25s;
    }
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`

const CareerLabel = styled.span`
    font-weight: ${theme.font.weight.bold};
    background: linear-gradient(45deg, ${theme.palette.gradient.light} 37%, ${theme.palette.gradient.dark} 99%); 
    background-clip: text;
    color: transparent;
`

const CareerNumber = styled.strong`
    transition: color ease-out 1s;
    font-weight: ${theme.font.weight.bold};
    color: ${theme.palette.text.secondary};
`
 
function CareerSection() {
    const ref = useRef(null)

    // Secretária do bom código adverte: Essa gambiarra é realmente necessária?
    // https://i.pinimg.com/736x/6b/ad/78/6bad786f76e73b57eaaffd5ea9e6e03e.jpg
    // O Firefox não suporta animation-timeline hoje (2025-02- 17)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
     });

    const opacity = useTransform(scrollYProgress,
        [0, 0.25, 0.75, 1], [0.25, 1, 1, 0.25]
    )

    const scale = useTransform(scrollYProgress,
        [0, 0.25, 0.75, 1], [0.95, 1, 1, 0.95]
    )

    return (
        <CareerJobCardWrapper ref={ref} style={{ opacity, scale}}>
            <CareerHeader id="career-section">CAREER</CareerHeader>
            <CareerNumbers>
                <CareerBadge>
                    <CareerLabel>
                        Experience
                    </CareerLabel>
                    <CareerNumber>
                        +4 years
                    </CareerNumber>
                </CareerBadge>
                <CareerBadge>
                    <CareerLabel>
                        Node
                    </CareerLabel>
                    <CareerNumber>
                        +4 years
                    </CareerNumber>
                </CareerBadge>
                <CareerBadge>
                    <CareerLabel>
                        React
                    </CareerLabel>
                    <CareerNumber>
                        ~3 years
                    </CareerNumber>
                </CareerBadge>
            </CareerNumbers>
            <CareerJobCard>
                <a target="_blank" href="https://www.kenlo.com.br/" rel="noreferrer">
                    <CareerCompanyIcon src={KenloIcon} />
                </a>
                <CareerJobCardContent>
                    <CareerCompanyTitle>Kenlo</CareerCompanyTitle>
                    <CareerPositionTitle>Full-stack Developer</CareerPositionTitle>
                    <CareerPositionTimeInterval>
                        [Dec/23 - Sep/24]
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
                <a target="_blank" href="https://www.zrp.com.br" rel="noreferrer">
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
                        Key technologies: Node (Typescript), React, Serverless Framework, Nest, Jest, Material UI, RDS, SQS, SQL, MongoDB e Redis.
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
                    <CareerPositionTimeInterval> [Feb/21 - Apr/22]</CareerPositionTimeInterval>
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
                        <CareerPositionDescriptionBulletPoint>
                            - Utilized data streams (SQL with templates) to persist data to user forms.
                        </CareerPositionDescriptionBulletPoint>
                    </CareerPositionDescription>
                    <CareerPositionKeyTechnology>
                        Key technologies: Vue, HTML, CSS, Javascript, Node, Bootstrap, SQL.
                    </CareerPositionKeyTechnology>
                    <br />
                    <CareerPositionTitle>Software Development Intern</CareerPositionTitle>
                    <CareerPositionTimeInterval> [Nov/19 - Feb/21]</CareerPositionTimeInterval>
                    <CareerPositionDescription>
                        <CareerPositionDescriptionBulletPoint>
                            - Colaborated to migration of different environments from Rancher (v1) to Kubernetes in cloud;
                        </CareerPositionDescriptionBulletPoint>
                        <CareerPositionDescriptionBulletPoint>
                            - Refactored Jenkins pipelines to new CI scheme using Helm & Gitlab Webhooks; 
                        </CareerPositionDescriptionBulletPoint>
                        <CareerPositionDescriptionBulletPoint>
                            - Performed RBAC configuration for different environments;
                        </CareerPositionDescriptionBulletPoint>
                            - Colaborated in adequations of different services to centralized log (utilizing ELK). 
                    </CareerPositionDescription>
                    <CareerPositionKeyTechnology>
                        Key technologies: Linux, Docker, Kubernetes, Jenkins, Gitlab, Kibana, Elasticsearch.
                    </CareerPositionKeyTechnology>

                </CareerJobCardContent>
            </CareerJobCard>
            <CareerJobCard>
                <a target="_blank" href="https://input.com.vc" rel="noreferrer">
                    <CareerCompanyIcon src={InputIcon} />
                </a>
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
                        Key technologies: Clarion, Microsoft SQL Server, SQL, C#, ASP.NET.
                    </CareerPositionKeyTechnology>
                </CareerJobCardContent>
            </CareerJobCard>
        </CareerJobCardWrapper>
    )
}

export default CareerSection;
