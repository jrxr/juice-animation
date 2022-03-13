import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "variants";

const TextContainer = () => {
  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="textContainer">

      <div className="textContainer-top">
        <motion.span variants={fadeIn()} className="text-green-600 ">
          Encontre seu suco natural
        </motion.span>
        <motion.span variants={fadeIn()} className="first-letter:text-5xl">
          2 /4
        </motion.span>
      </div>
 
      <div className="textContainer-middle">
        <motion.span
         variants={fadeIn()} initial="initial" animate="animate">
          Laranja
        </motion.span>
      </div>

      <div className="textContainer-bottom ">
        <motion.button variants={fadeIn()}>Mostrar todos os sucos</motion.button>
        <motion.p variants={fadeIn()}>
          Sua vida<span> saudável </span> <br />  começa aqui conosco!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TextContainer;