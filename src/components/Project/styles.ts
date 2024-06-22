import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 5.0rem;
        }
      }

      h3 {
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;

        a {
          color: #fff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }

    .project {
      padding: 1.5rem 1.2rem;

      header {
        margin-bottom: 2.5rem;

        a > img {
          width: 4rem;
        }
      }

      h3 {
        margin-bottom: 1.5rem;
      }

      p {
        margin-bottom: 1.5rem;
      }

      footer .tech-list {
        gap: 1.5rem;
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 480px) {
    margin-top: 10rem;

    h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    .project {
      padding: 1rem;

      header {
        margin-bottom: 2rem;

        a > img {
          width: 3.5rem;
        }
      }

      h3 {
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 1rem;
      }

      footer .tech-list {
        gap: 1rem;
        font-size: 1rem;
      }
    }
  }
`;
