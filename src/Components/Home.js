import motion from '../Assets/evr-motion.mp4'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.videoSection}>
      <video className={styles.videoTag} autoPlay loop muted playsInline>
        <source src={motion} type="video/mp4" />
      </video>
    </section>
  );
};

export default Home;

