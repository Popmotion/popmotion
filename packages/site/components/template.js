import PopmotionLogo from '~/components/icons/Logo';
import Link from 'next/link';
import Head from 'next/head';
import reset from '~/styles/reset';
import { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  ${reset}
`;

export default function ({ children }) {
  return (
    <Fragment>
      <Global />
      <Head>
        <title>Popmotion</title>
        <link rel="icon" href="/layout/favicon.png"></link>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@mattgperry"></meta>
        <meta name="twitter:creator" content="@mattgperry"></meta>
        <meta name="twitter:title" content="Popmotion"></meta>
        <meta
          name="twitter:description"
          content="The JavaScript animation toolbox"
        ></meta>
        <meta name="twitter:image" content={`/images/twitter-card.png`}></meta>
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
        <main className="cg">
          <h2 className="tagline">{'The animator’s JavaScript toolbox.'}</h2>
          <article>{children}</article>
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
                <a href="/pure">Popmotion 8</a>
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

const verticalSpacingSection = '40px';

const Container = styled.div`
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .hl {
    font-family: 'GT Walsheim Bold', Neue Helvetica W02, Helvetica Neue,
      Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a,
  a.hl {
    color: var(--color-black);
  }

  header {
    margin-bottom: 100px;
  }

  .tagline {
    font-size: 28px;
    letter-spacing: -0.6px;
    display: block;
  }

  article {
    h2 {
      font-size: 48px;
      letter-spacing: -1.5px;
      line-height: 1.5;
      font-weight: 700;
      margin-bottom: ${verticalSpacingSection};
      margin-top: 80px;
    }

    h3 {
      margin-top: 50px;
      margin-bottom: 30px;
      line-height: 1;
      font-size: 32px;

      code {
        border-radius: 5px;
        padding: 10px 15px;
        position: relative;
        left: -15px;
        background: var(--color-shade);
      }
    }

    h4,
    h5 {
      margin-top: 30px;
      margin-bottom: 10px;
      line-height: 1;
      font-size: 18px;

      code {
        border-radius: 5px;
        padding: 5px 8px;
        position: relative;
        left: -8px;
        background: var(--color-shade);
      }
    }

    p,
    li {
      margin-bottom: 20px;
      line-height: 1.5;
      font-size: 18px;

      code {
        font-size: 18px;
        background: var(--color-shade);
        border: none;
      }
    }

    ul,
    li {
      list-style: disc;
    }

    ul {
      margin-left: 40px;
    }
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

  .cg {
    width: 100%;
    max-width: 660px;
    margin: 10px auto;
  }

  article {
    margin-top: 130px;
  }

  @media screen and (max-width: 1080px) {
    .cg {
    }
  }

  @media screen and (max-width: 820px) {
    .frame {
      border: 5px solid var(--color-popmotion);
    }

    .cg {
    }
  }

  @media screen and (max-width: 600px) {
    .cg {
    }
  }
`;
