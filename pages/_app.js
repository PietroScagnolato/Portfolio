import '../styles/globals.css';

//Components
import Layout from '../components/Layout';
import Transition from '../components/Transition'

//Router
import { userRouter } from 'next/router'

//Frame Motion
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <AnimatePresence mode='wait'>
      <motion.div key={Router.route} className='h-full'>
        <Transition />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </Layout>
  );
}

export default MyApp;
