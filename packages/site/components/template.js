import PopmotionLogo from '~/components/icons/Logo';
import Link from 'next/link';
import Head from 'next/head';
import reset from '~/styles/reset';
import { Fragment, useRef, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { animate } from 'popmotion';

const Global = createGlobalStyle`
  ${reset}
`;

const tagline = 'The animator’s JavaScript toolbox.'.split('');

function TaglineCharacter({ character, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate({
      from: 0,
      to: 0,
      velocity: -500,
      stiffness: 120,
      elapsed: -index * 20,
      onUpdate: (y) =>
        (ref.current.style.transform = `translateY(${y}px) translateZ(0)`),
    });

    return () => controls.stop();
  }, []);

  return (
    <span
      ref={ref}
      className="hl"
      style={{
        display: 'inline-block',
        width: character === ' ' ? 8 : 'auto',
      }}
    >
      {character}
    </span>
  );
}

export default function ({ children, tableOfContents }) {
  return (
    <Fragment>
      <Global />
      <Head>
        <title>Popmotion: The animator's JavaScript toolbox</title>
        <link rel="icon" href="https://popmotion.io/layout/favicon.png"></link>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@mattgperry"></meta>
        <meta name="twitter:creator" content="@mattgperry"></meta>
        <meta name="twitter:title" content="Popmotion"></meta>
        <meta
          name="twitter:description"
          content="Popmotion is a collection of low-level JavaScript animation functions and utils for advanced animators."
        ></meta>
        <meta
          name="twitter:image"
          content={`https://popmotion.io/images/twitter-share-2020.png`}
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Container>
        <header>
          <h1>
            <Link href="/">
              <a name="Homepage">
                <PopmotionLogo width={128} />
              </a>
            </Link>
          </h1>
          <a href="https://github.com/popmotion/popmotion" className="button">
            View on GitHub
          </a>
        </header>
        <main>
          <div className="cg">
            <h2 className="tagline">
              {tagline.map((character, i) => (
                <TaglineCharacter index={i} key={i} character={character} />
              ))}
            </h2>
            <ul className="usp-container">
              <USP title="Powerful">
                Supports <strong>keyframes</strong>, <strong>spring</strong> and{' '}
                <strong>inertia</strong> animations on <strong>numbers</strong>,{' '}
                <strong>colors</strong>, and <strong>complex strings</strong>.
              </USP>
              <USP title="Low level">
                Simple, composable functions, portable to any JS environment.
                The library behind the library, it powers the animations in{' '}
                <a href="https://framer.com/motion">Framer Motion</a>.
              </USP>
              <USP title="Stable">
                Written in TypeScript and enjoys over 95% test coverage.
              </USP>
              <USP title="Tiny">
                The <code>animate</code> function is less than 5kb, and every
                utility function is individually importable.
              </USP>
            </ul>
          </div>
          <article>
            <TOC contents={tableOfContents} />
            <div className="content-container">{children}</div>
          </article>
        </main>
        <footer>
          <nav>
            <ul>
              <li className="hl">More libraries</li>
              <li>
                <a href="/stylefire">Stylefire</a>
              </li>
              <li>
                <a href="/api/framesync">Framesync</a>
              </li>
              <li>
                <a href="/pose">Pose</a>
              </li>
              <li>
                <a href="/pure">Popmotion Pure</a>
              </li>
            </ul>
            <div>
              <p>
                Created by{' '}
                <a href="https://twitter.com/mattgperry">Matt Perry</a> and{' '}
                <a href="https://framer.com">Framer</a>
              </p>
              <p>{`© 2014-2020 Framer BV`}</p>
            </div>
          </nav>
        </footer>
        <div className="frame" />
      </Container>
    </Fragment>
  );
}

function USP({ title, children }) {
  return (
    <li className="usp">
      <Tick />
      <span className="title">{title}</span>
      {children}
    </li>
  );
}

function Tick() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11">
      <path
        d="M 2 6 L 5.5 9.5 L 13 2"
        fill="transparent"
        strokeWidth="2"
        stroke="rgb(250, 25, 108)"
        strokeLinecap="round"
        strokeMiterlimit="10"
      ></path>
    </svg>
  );
}

const generateSection = (list, filter) => (
  <ul>{list.map((item) => generateLink(item, filter))}</ul>
);

const generateLink = ({ title, id, children }, filter) => {
  if (!filter || title.toLowerCase().includes(filter.toLowerCase())) {
    return (
      <li key={id}>
        <Link href={`#${id}`}>{title}</Link>
        {Boolean(children && children.length) &&
          generateSection(children, filter)}
      </li>
    );
  } else {
    return (
      Boolean(children && children.length) && generateSection(children, filter)
    );
  }
};

const TOC = ({ contents }) => {
  const [filter, setFilter] = useState('');

  return (
    <div className="toc">
      <nav>
        <input
          type="text"
          placeholder="Filter..."
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
        />
        {generateSection(contents[0].children, filter)}
      </nav>
    </div>
  );
};

const Container = styled.div`
  .usp-container {
    margin-top: 80px;
    margin-bottom: 100px;
  }

  .usp {
    position: relative;
    font-size: 18px;
    padding-left: 30px;
    margin-bottom: 25px;
    line-height: 1.5;

    .title {
      display: block;
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 10px;
    }

    svg {
      position: absolute;
      left: 0px;
      top: 6px;
    }
  }

  .toc {
    padding: 18px 20px;
    border-radius: 10px;
    margin-top: 40px;
    overflow-y: auto;
    font-size: 24px;
    position: sticky;
    top: 40px;
    left: 40px;
    background: var(--color-shade);
    max-width: 300px;
    max-height: 80vh;

    input {
      padding: 10px;
      background: rgba(255, 255, 255, 0.6);
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      margin-bottom: 40px;
      font-size: 18px;
    }

    li a {
      display: inline-block;
      margin-bottom: 10px;
    }

    ul {
      margin-bottom: 10px;
    }

    nav > ul {
      font-size: 24px;

      > li > ul {
        font-size: 22px;
        margin-left: 10px;

        > li > ul {
          font-size: 18px;
          margin-left: 10px;

          > li > ul {
            font-size: 14px;
            margin-left: 10px;
          }
        }
      }
    }
  }

  header {
    padding: 40px;
    display: flex;
    justify-content: space-between;

    path {
      fill: var(--color-popmotion) !important;
    }

    .button {
      height: 39px;
      overflow: visible;
      background-color: var(--color-shade);
      border-radius: 20px;
      padding: 12px 20px;
      color: var(--color-black);
    }
  }

  footer {
    margin: 100px 40px 0 40px;
    border-top: 1px solid var(--color-shade);
    padding: 40px;

    nav {
      max-width: 660px;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }

    li,
    p {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }

  header {
    margin-bottom: 100px;
  }

  .tagline {
    font-size: 28px;
    letter-spacing: -0.6px;
    display: block;
  }

  .frame {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 10px solid var(--color-popmotion);
    pointer-events: none;
    z-index: 2;
  }

  article {
    display: grid;
    grid-template-columns: 1fr [a] 250px [b] 60px [c] 650px [d] 1fr;

    .toc {
      grid-column: a / b;
    }

    .content-container {
      grid-column: c / d;
    }
  }

  .cg {
    display: grid;
    grid-template-columns: 40px [lo-start] 1fr [lo-end] 40px [c-start] 650px [c-end] 1fr [ro-end] 40px [end];

    > * {
      grid-column: c-start / c-end;
    }
  }

  @media screen and (max-width: 960px) {
    article {
      display: block;

      .content-container,
      .toc {
        width: 100%;
        max-width: 650px;
        margin-left: auto;
        margin-right: auto;
      }

      .toc {
        max-height: 200px;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
      }
    }

    .cg {
      display: block;
      width: 100%;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (max-width: 740px) {
    .frame {
      border: 5px solid var(--color-popmotion);
    }

    header {
      margin-bottom: 0;
    }

    .cg {
    }

    footer nav {
      flex-direction: row;
      justify-content: stretch;
      flex-wrap: wrap;

      ul {
        margin-bottom: 20px;
      }
    }
  }

  @media screen and (max-width: 670px) {
    article {
      display: block;

      .content-container,
      .toc {
        width: calc(100vw - 40px);
        margin-left: 20px;
        margin-right: 20px;
      }

      .toc {
        top: 20px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    header {
      svg {
        width: 110px;
      }

      .button {
        font-size: 14px;
      }
    }

    .cg,
    footer,
    header {
      padding: 20px !important;
    }

    .usp-container {
      margin-top: 40px;
    }

    .usp {
      font-size: 14px;
      margin-bottom: 20px;

      .title {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }

    .tagline {
      font-size: 24px;
      letter-spacing: -0.4px;
    }

    article {
      margin-top: 80px;
    }
  }

  @media screen and (max-width: 400px) {
    .tagline {
      font-size: 18px;
      letter-spacing: -0.2px;
    }
  }
`;
