import style from "../styles/About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Henry Country Project</h1>
      <h2 className={style.subtitle}>Created by Nahuel Tovar</h2>
      <p className={style.description}>
        Welcome to the Henry Country Project, a demo project for the Henry
        bootcamp. This project was created using React and Next.js, and it
        showcases the skills and knowledge learned during the bootcamp. Feel
        free to explore the different pages and features of the project, and
        don't hesitate to reach out if you have any questions or comments!
      </p>
      <div className={style.links}>
        <a
          className={style.link}
          href="https://www.linkedin.com/in/nahueltovar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;