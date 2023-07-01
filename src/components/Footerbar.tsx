import theme from "../theme";

import { styled } from "styled-components";

function Footerbar() {

    const Footer = styled.footer`
        text-align: center;
        font-size: ${theme.font.size.content};
        padding: 128px 0 56px 0;
    `

    return (
        <Footer>
            henriqueyun 2023® All Rights Reserved
        </Footer>
    );
}

export default Footerbar;