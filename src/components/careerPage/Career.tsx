// libs
import React,{useRef, useContext} from "react";
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";
// components

// hooks
// store
// utils & animation
import { firstPage, firstPage2 } from "../../utils/animation";
import { GlobalCtx } from "../../store/context/globalCtx";
import Footer from "../layout/Footer";

const Career: React.FC = (): JSX.Element => {
  const globCtx = useContext(GlobalCtx);

  const bioRef = useRef(null);
  const eduRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    exit="out"
    variants={globCtx.toCareer === 1 ? firstPage : firstPage2}
    className="career-container"
    >
    <span className="w-screen h-full">
    <Footer />
    </span>
      </motion.div>
  );
};

export default Career;
