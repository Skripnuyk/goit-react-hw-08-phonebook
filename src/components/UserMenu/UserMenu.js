import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserName, Wrap, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrap>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={onLogOut}>
        Log Out
      </Button>
    </Wrap>
  );
};

export default UserMenu;