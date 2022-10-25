import Layout from "../components/Layout";
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { AnimatePresence, motion } from "framer-motion";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps, router }) {
  const pageTransition = {
    pageInitial: {
      opacity: 0,
      x: 100,
    },
    pageAnimate: {
      opacity: 1,
      x: 0,
      duration: 3,
    },
    pageExit: {
      opacity: 0,
      x: 100,
      duration: 3,
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={pageTransition}
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
