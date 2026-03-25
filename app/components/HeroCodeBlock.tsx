import Image from 'next/image';

export default function HeroCodeBlock() {
  const codeLines = [
    { num: 1, content: <><span className="synKeyword">const</span> <span className="synFunction">developer</span> <span className="synOperator">=</span> {'{'}</> },
    { num: 2, content: <>&nbsp;&nbsp;<span className="synProperty">name</span><span className="synOperator">:</span> <span className="synString">&quot;Sebastian Speiser&quot;</span><span className="synOperator">,</span></> },
    { num: 3, content: <>&nbsp;&nbsp;<span className="synProperty">role</span><span className="synOperator">:</span> <span className="synString">&quot;Frontend Developer&quot;</span><span className="synOperator">,</span></> },
    { num: 4, content: <>&nbsp;&nbsp;<span className="synProperty">location</span><span className="synOperator">:</span> <span className="synString">&quot;Austria&quot;</span><span className="synOperator">,</span></> },
    { num: 5, content: <>&nbsp;&nbsp;<span className="synProperty">skills</span><span className="synOperator">:</span> {'['}</> },
    { num: 6, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="synString">&quot;React&quot;</span><span className="synOperator">,</span> <span className="synString">&quot;Next.js&quot;</span><span className="synOperator">,</span> <span className="synString">&quot;TypeScript&quot;</span><span className="synOperator">,</span></> },
    { num: 7, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="synString">&quot;React Native&quot;</span><span className="synOperator">,</span> <span className="synString">&quot;Node.js&quot;</span><span className="synOperator">,</span></> },
    { num: 8, content: <>&nbsp;&nbsp;{']'}<span className="synOperator">,</span></> },
    { num: 9, content: <>&nbsp;&nbsp;<span className="synProperty">focus</span><span className="synOperator">:</span> <span className="synString">&quot;Clean UI &amp; modern web&quot;</span><span className="synOperator">,</span></> },
    { num: 10, content: <>&nbsp;&nbsp;<span className="synProperty">available</span><span className="synOperator">:</span> <span className="synBoolean">true</span><span className="synOperator">,</span></> },
    { num: 11, content: <>{'}'}<span className="synOperator">;</span></> },
  ];

  return (
    <section className="hero" id="hero">
      <div className="heroInner">
        <div className="heroContent">
          <div className="heroTagline">
            <span className="heroGreeting">Hi, I&apos;m</span>
            <h1 className="heroName">Sebastian Speiser</h1>
            <p className="heroRole">
              <span className="synComment">{'// '}</span>
              frontend developer who turns complex ideas into
              <br />
              <span className="synComment">{'// '}</span>
              simple, intuitive digital experiences
            </p>
          </div>

          <div className="codeEditor">
            <div className="codeEditorBar">
              <div className="codeEditorDots">
                <span className="editorDot editorDotRed" />
                <span className="editorDot editorDotYellow" />
                <span className="editorDot editorDotGreen" />
              </div>
              <span className="codeEditorFilename">developer.ts</span>
            </div>
            <div className="codeEditorBody">
              {codeLines.map((line) => (
                <div key={line.num} className="codeLine">
                  <span className="lineNumber">{line.num}</span>
                  <span className="lineContent">{line.content}</span>
                </div>
              ))}
              <div className="codeLine">
                <span className="lineNumber">12</span>
                <span className="lineContent">
                  <span className="cursor" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="heroImage">
          <div className="heroImageGlow" />
          <Image
            src="/images/profile_small.webp"
            alt="Profile Picture of Sebastian Speiser"
            height={2166}
            width={1455}
            loading="eager"
            className="profileImage"
          />
        </div>
      </div>

      <div className="scrollIndicator">
        <span className="scrollText">scroll</span>
        <div className="scrollLine" />
      </div>
    </section>
  );
}
