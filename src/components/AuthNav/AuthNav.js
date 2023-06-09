import { Wrap, AuthLink } from './AuthNav.styled';

const AuthNav = () => {
    return (
        <Wrap>
            <AuthLink to="/register">Register</AuthLink>
            <AuthLink to="/login">Log in</AuthLink>
        </Wrap>
    );
};
export default AuthNav;