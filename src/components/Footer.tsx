import { FC } from 'react'
import styled from '@emotion/styled'


const Container = styled.div`
    box-sizing: border-box;
    position: absolute;

    bottom: 0;
    width: 100%;
    padding-left: 10%;
    /* background-color: pink; */
`


const Footer: FC = () => {
    return <Container>
        © 2026 Fatima A. Moussaoui
    </Container>
}

export default Footer
