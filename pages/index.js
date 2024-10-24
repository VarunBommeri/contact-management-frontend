// pages/index.js
// pages/index.js
import AuthForm from '../components/AuthForm.js';
import ContactList from '../components/ContactList.js';
import ContactForm from '../components/ContactForm.js';

const Home = () => {
  return (
    <div>
      <h1>Contact Management System</h1>
      <AuthForm isLogin={true} />
      <AuthForm isLogin={false} />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default Home;

