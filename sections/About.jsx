'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Fabverse</span> is a new
        thing in the future, where you can enjoy the virtual world fashion trends by feeling
        like it's really real. We are dedicated to providing a platform for emerging and established fashion designers to showcase their unique creations and connect with potential buyers who appreciate and value original, high-quality fashion
        <span className="font-extrabold text-white">
        </span>{' '}{' '}
        <span className="font-extrabold text-white"></span> Let's{' '}
        <span className="font-extrabold text-white">explore</span> the new
        fabverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
