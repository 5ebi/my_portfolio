import Image from 'next/image';

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className="textContainer">
          <div className="headingContainer">
            <h1 className="heading1">
              Sebastian Speiser{' '}
              <span className="accent">{'// web developer'}</span>
            </h1>
          </div>
          <div className="paragraphContainer">
            <p>
              I’m a frontend developer with a strong focus on clean UI,
              usability, and modern web technologies. I enjoy turning complex
              ideas into simple, intuitive digital experiences. I work mainly
              with React, Next.js, and TypeScript, and I like understanding
              things deeply rather than just making them work. Curious,
              reliable, and driven to improve with every project.
            </p>
          </div>
        </div>
        <div className="imageContainer">
          <Image
            src="/images/profile_small.webp"
            alt="Profile Picture of Sebastian Speiser"
            height={2166}
            width={1455}
            className="profileImage"
          />
        </div>
      </div>
    </div>
  );
}
