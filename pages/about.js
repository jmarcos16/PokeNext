import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit,
        distinctio repudiandae aliquid, blanditiis eum enim ex possimus nisi
        laudantium, inventore natus ea alias perspiciatis numquam sapiente magni
        eius quae!
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
