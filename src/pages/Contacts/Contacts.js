import ContactsBar from 'components/ContactsBar/ContactsBar';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';

const Contacts = () => {
    const { isLoading } = useAuth();


    return (
        <>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            {isLoading}
            <ContactsBar />
        </>
    );
};

export default Contacts;