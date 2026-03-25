import Image from 'next/image';

export default function HeroCodeBlock() {
  return (
    <section className="hero" id="hero">
      <div className="heroInner">
        <div className="heroContent">
          <div className="heroStatus">
            <span className="statusDot" />
            <span className="statusText">STATUS: OPEN_FOR_COLLABORATION</span>
          </div>

          <h1 className="heroName">
            SEBASTIAN
            <br />
            SPEISER
          </h1>

          <p className="heroDescription">
            Frontend developer specializing in{' '}
            <strong>clean, high-performance interfaces</strong> and modern web
            technologies. Building digital infrastructure that prioritizes
            usability over complexity.
          </p>

          <div className="heroActions">
            <a href="#contact" className="btnPrimary">
              INITIALIZE_CONTACT
            </a>
            <a href="#projects" className="btnSecondary">
              VIEW_PROJECTS
            </a>
          </div>
        </div>

        <div className="heroImageCol">
          <div className="heroImageWrapper">
            <Image
              src="/images/profile_small.webp"
              alt="Sebastian Speiser"
              height={2166}
              width={1455}
              loading="eager"
              className="profileImage"
            />
          </div>
          <div className="heroBadge">
            <span className="heroBadgeNumber">03+</span>
            <span className="heroBadgeLabel">YEARS_EXP</span>
          </div>
        </div>
      </div>

      <div className="heroCodeSnippet">
        <div className="codeEditorBar">
          <div className="codeEditorDots">
            <span className="editorDot editorDotRed" />
            <span className="editorDot editorDotYellow" />
            <span className="editorDot editorDotGreen" />
          </div>
          <span className="codeEditorFilename">developer.config.ts</span>
        </div>
        <div className="codeEditorBody">
          <div className="codeLine">
            <span className="lineNumber">1</span>
            <span className="lineContent">
              <span className="synKeyword">export const</span>{' '}
              <span className="synFunction">config</span>{' '}
              <span className="synOperator">=</span> {'{'}
            </span>
          </div>
          <div className="codeLine">
            <span className="lineNumber">2</span>
            <span className="lineContent">
              {'  '}
              <span className="synProperty">name</span>
              <span className="synOperator">:</span>{' '}
              <span className="synString">&quot;Sebastian Speiser&quot;</span>
              <span className="synOperator">,</span>
            </span>
          </div>
          <div className="codeLine">
            <span className="lineNumber">3</span>
            <span className="lineContent">
              {'  '}
              <span className="synProperty">stack</span>
              <span className="synOperator">:</span> [
              <span className="synString">&quot;React&quot;</span>
              <span className="synOperator">,</span>{' '}
              <span className="synString">&quot;Next.js&quot;</span>
              <span className="synOperator">,</span>{' '}
              <span className="synString">&quot;TypeScript&quot;</span>]
              <span className="synOperator">,</span>
            </span>
          </div>
          <div className="codeLine">
            <span className="lineNumber">4</span>
            <span className="lineContent">
              {'  '}
              <span className="synProperty">available</span>
              <span className="synOperator">:</span>{' '}
              <span className="synBoolean">true</span>
              <span className="synOperator">,</span>
            </span>
          </div>
          <div className="codeLine">
            <span className="lineNumber">5</span>
            <span className="lineContent">
              {'}'}<span className="synOperator">;</span>
              <span className="cursor" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
