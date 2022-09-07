import Title from 'components/Title';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Reviews from 'components/Reviews';
import BackToTop from 'components/BackToTop';
import AddReview from 'components/AddReview';
import { useGlobalContext } from 'context/reviews/ReviewContext';
import { useDarkModeGlobalContext } from 'context/darkmode/DarkModeContext';

import './styles/dark.css';

function App() {
  const { reviews } = useGlobalContext();
  const { darkMode } = useDarkModeGlobalContext();

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar />
      <div className='container'>
        <Title />
        <AddReview />
        <Reviews reviews={reviews} />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
