import Header from "../components/Header";
import TextContainer from "../components/TextContainer";
import { motion } from "framer-motion";
import { bottle, bottleWrapper, leavesContainer } from "variants";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* texts wrapper */}
        <TextContainer />

        {/* juice bottle image */}
        <motion.div variants={bottleWrapper} initial="initial" animate="animate" className="bottleWrapper">
          <motion.img src="/images/juice.png" variants={bottle} className="bottle" />
        </motion.div>


      </main>
    </div>
  );
}
