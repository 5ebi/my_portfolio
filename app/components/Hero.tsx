'use client';

import Image from 'next/image';
import { useApp } from './ThemeProvider';
import { t } from '../translations';

export default function Hero() {
  const { lang } = useApp();

  return (
    <section className="hero">
      <div className="container">
        <div className="heroInner">
          <div className="heroContent">
            <div className="heroStatus">
              <span className="heroStatusDot" />
              {t.hero.status[lang]}
            </div>

            <h1 className="heroName">Sebastian Speiser</h1>
            <p className="heroRole">Frontend Developer</p>
            <p className="heroDesc">{t.hero.subtitle[lang]}</p>

            <div className="heroCtas">
              <a href="#contact" className="btnPrimary">
                {t.hero.cta[lang]}
                <span>&rarr;</span>
              </a>
              <a href="#projects" className="btnSecondary">
                {t.hero.work[lang]}
              </a>
            </div>
          </div>

          <div className="heroImageWrap">
            <Image
              src="/images/profile.webp"
              alt="Sebastian Speiser"
              width={200}
              height={200}
              className="heroImage"
              priority
            />
          </div>
        </div>

        {/* Code snippet */}
        <div className="heroCode">
          <div className="codeHeader">
            <span className="codeDot codeDotRed" />
            <span className="codeDot codeDotYellow" />
            <span className="codeDot codeDotGreen" />
            <span className="codeFilename">developer.ts</span>
          </div>
          <div className="codeBody">
            <div className="codeLine">
              <span className="codeLineNum">1</span>
              <span><span className="codeKeyword">const</span> <span className="codeFunction">developer</span> <span className="codePunctuation">=</span> <span className="codePunctuation">{'{'}</span></span>
            </div>
            <div className="codeLine">
              <span className="codeLineNum">2</span>
              <span>  <span className="codeProperty">name</span><span className="codePunctuation">:</span> <span className="codeString">&quot;Sebastian Speiser&quot;</span><span className="codePunctuation">,</span></span>
            </div>
            <div className="codeLine">
              <span className="codeLineNum">3</span>
              <span>  <span className="codeProperty">role</span><span className="codePunctuation">:</span> <span className="codeString">&quot;Frontend Developer&quot;</span><span className="codePunctuation">,</span></span>
            </div>
            <div className="codeLine">
              <span className="codeLineNum">4</span>
              <span>  <span className="codeProperty">location</span><span className="codePunctuation">:</span> <span className="codeString">&quot;Austria&quot;</span><span className="codePunctuation">,</span></span>
            </div>
            <div className="codeLine">
              <span className="codeLineNum">5</span>
              <span>  <span className="codeProperty">skills</span><span className="codePunctuation">:</span> <span className="codePunctuation">[</span><span className="codeString">&quot;React&quot;</span><span className="codePunctuation">,</span> <span className="codeString">&quot;Next.js&quot;</span><span className="codePunctuation">,</span> <span className="codeString">&quot;TypeScript&quot;</span><span className="codePunctuation">,</span> <span className="codeString">&quot;React Native&quot;</span><span className="codePunctuation">]</span><span className="codePunctuation">,</span></span>
            </div>
            <div className="codeLine">
              <span className="codeLineNum">6</span>
              <span>  <span className="codeProperty">available</span><span className="codePunctuation">:</span> <span className="codeNumber">true</span><span className="codePunctuation">,</span></span>
            </div>
            <div className="codeLine">
              <span className="codeLineNum">7</span>
              <span><span className="codePunctuation">{'}'}</span><span className="codePunctuation">;</span><span className="codeCursor" /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
