import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Header = () => {
  return (
    <motion.nav variants={fadeIn("down")} initial="initial" animate="animate" className="header">
      <span className="header-logo">SUCOS NATURAIS</span>
      <ul>
        <li>SHOP</li>
        <li>HISTÓRIA</li>
        <li>MENU</li>
        <li>CONTATO</li>
        <li>TODOS OS SUCOS</li>
      </ul>

      <span className="header-account">MINHA CONTA</span>
    </motion.nav>
  );
};

export default Header;