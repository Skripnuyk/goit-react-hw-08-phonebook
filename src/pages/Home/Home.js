import { useAuth } from "hooks"
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  margin: 200px auto;
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 400;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    color: rgb(255 255 255);
  }
`;
export const Section = styled.section`
  margin: ${props => props.margin || '40px 0 0 0'};
`;

export const Title = styled.h1`
  margin: ${props => props.margin || '0 0 20px 0'};
  text-align: ${props => props.position || 'start-left'};
  font-size: ${props => props.size || '18px'};
  font-weight: 700;
  line-height: 1.33;
`;


export const Home = () => {
    const { isLoggedIn } = useAuth();

    return (
        <>
            <Section margin="calc(10%) 0 0 0">
                <Title size="50px" margin="0 0 20px 0" position="center">
                    Welcome to <b> Phonebook</b>
                </Title>
            </Section>
            {!isLoggedIn ? (
                <Box>
                    <Text>
                        Please <Link to="/login">log in</Link> to your account to view
                        your contacts.
                    </Text>
                    <Text>
                        If you are not registered yet, please{' '}
                        <Link to="/register">register</Link>
                        {'.'}
                    </Text>
                </Box>
            ) : (
                <Box>
                    <Text>
                        You can view <Link to="/contacts"> your contacts</Link>
                    </Text>
                </Box>
            )}
        </>
    );
};

export default Home;