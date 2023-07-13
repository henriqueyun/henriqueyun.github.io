import theme from "../theme";
import { styled } from "styled-components";

const Footer = styled.footer`
    margin: 0 auto;
    text-align: center;
    font-size: ${theme.font.size.content};
    padding: 128px 0 56px 0;
    width: 80%;
    @media (max-width: 768px) {
        padding: 64px 0 56px 0;
    }
`

function Footerbar() {

    return (
        <Footer>
            henriqueyun 2023® All Rights Reserved
        </Footer>
    );
}

export default Footerbar;