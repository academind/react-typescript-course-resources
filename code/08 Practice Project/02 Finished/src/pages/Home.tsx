import studentsImg from '../assets/students.jpg';
import listImg from '../assets/list.jpg';
import certificateImg from '../assets/certificate.jpg';

export default function HomePage() {
  return (
    <main id="home-page">
      <h2>Our Mission: Your Success</h2>
      <section>
        <img src={studentsImg} alt="A group of students" />
        <div>
          <h3>What we do</h3>
          <p>
            ReactMentoring is a platform for React developers to find mentors
            who can help them with their React-related questions and problems.
            We are a community of React developers who want to help each other
            succeed.
          </p>
        </div>
      </section>

      <section>
        <img src={listImg} alt="A list of sessions" />
        <div>
          <h3>What we offer</h3>
          <p>
            We offer a variety of mentoring sessions, from one-on-one mentoring
            to group mentoring sessions. Browse our available sessions to find
            the one that best fits your needs.
          </p>
        </div>
      </section>
      <section>
        <img src={certificateImg} alt="A certificate" />
        <div>
          <h3>What you get</h3>
          <p>
            No matter if you are a beginner or an experienced React developer,
            we are here to help you level up your React skills.
          </p>
        </div>
      </section>
    </main>
  );
}
