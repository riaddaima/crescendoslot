import { Outlet, useLocation } from "react-router-dom";
import Header from '../Header';
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.3
};

const PageLayout = ({ children }: any) => children;

const Layout = () => {

  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Header />
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

export default Layout;