import styled from 'styled-components';

const Div = styled.div`
color: ${props => (props.doILikeYou ? 'green' : 'red')};
font-size: 50px;

@media (min-width: 768px) {
    font-size: 100px;
}
`

const StyledComponent = props => {
    return (
        <Div doILikeYou={false}>
            Hello there!
        </Div>
    )
}



export default StyledComponent;