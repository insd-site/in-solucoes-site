import { motion } from "framer-motion";

export const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-90px" }}
    transition={{ duration: 0.55, delay }}
  >
    {children}
  </motion.div>
);

export const Stagger = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-90px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
    {children}
  </motion.div>
);

export const Item = ({ children }: { children: React.ReactNode }) => (
  <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
    {children}
  </motion.div>
);
