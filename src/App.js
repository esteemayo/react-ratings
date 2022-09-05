import Title from 'components/Title';
import Footer from 'components/Footer';
import Reviews from 'components/Reviews';
import BackToTop from 'components/BackToTop';
import AddReview from 'components/AddReview';
import { useGlobalContext } from 'context/ReviewContext';

function App() {
  const { reviews } = useGlobalContext();

  return (
    <div className='container'>
      <Title />
      <AddReview />
      <Reviews reviews={reviews} />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
