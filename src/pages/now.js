import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link, graphql } from "gatsby"
import Switch from "react-switch"
import Img from "gatsby-image"
import ThemeContext from "../context/ThemeContext"

import "../components/layout.css"

class now extends React.Component {
  render() {
    const book = this.props.data

    return (
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? "dark" : "light"}>
            <div
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                minHeight: `100vh`,
              }}
            >
              <h1
                style={{
                  ...scale(1.5),
                  marginBottom: rhythm(1.5),
                  marginTop: 0,
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                  }}
                  to="/"
                >
                  {" "}
                  Dang it
                </Link>
              </h1>
              <div
                id="toggleTheme"
                style={{ display: `flex`, justifyContent: `flex-end` }}
              >
                <Switch
                  onChange={theme.toggleDark}
                  checked={theme.dark}
                  onColor="#292D3E"
                  offColor="#292D3E"
                  offHandleColor="#fefefe"
                  onHandleColor="#586184"
                  checkedIcon={
                    <span
                      style={{ marginLeft: "0.3rem" }}
                      role="img"
                      aria-label="sun"
                    >
                      🌞
                    </span>
                  }
                  uncheckedIcon={
                    <span
                      style={{ marginLeft: "0.3rem" }}
                      role="img"
                      aria-label="moon"
                    >
                      🌒
                    </span>
                  }
                  activeBoxShadow="0 0 2px 3px #226597"
                />
              </div>

              <Bio />

              <h3 style={{ textAlign: "center" }}>
                What am I doing at the moment?
              </h3>
              <p>
                <span role="img" aria-label="docs">
                  📝
                </span>
                I am currently learning Redux and TypeScript as a personal
                initiative to fill the knowledge I need for my new position as a
                Software Developer at Coveo.
                <br></br>
                <br></br>
                <span role="img" aria-label="tomato">
                  🍅
                </span>
                I am looking at resources to learn how to debug effectively and
                efficiently for my new role.
                <br></br>
                <br></br>
                <span role="img" aria-label="goal">
                  🎯
                </span>
                I am still focused on studying algorithms and data structures to
                understand the fundamentals of computer science.
              </p>

              <h3 style={{ textAlign: "center" }}>Books</h3>
              <p style={{ textAlign: "center" }}>Currently reading: </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  paddingBottom: "2rem",
                }}
              >
                <Img
                  style={{ width: "35%" }}
                  fluid={book.bookone.childImageSharp.fluid}
                  alt="The Daily Stoic"
                />
                <Img
                  style={{ width: "35%" }}
                  fluid={book.booktwo.childImageSharp.fluid}
                  alt="So You Want to Talk About Race"
                />
              </div>
              <p>
                It is important to self educate on issues and events that have
                been happening the last month. I am currently reading a book
                called{" "}
                <a href="https://www.goodreads.com/book/show/35099718-so-you-want-to-talk-about-race">
                  So You Want to Talk About Race
                </a>{" "}
                by Iljeoma Oluo.
              </p>

              {/* <h3 style={{ textAlign: "center" }}>Games</h3>
              <p style={{ textAlign: "center" }}>
                Currently enjoying Valorant
                <span role="img" aria-label="SunglassSmiley">
                  🙂
                </span>
              </p> */}

              <h3 style={{ textAlign: "center" }}>Side-Projects</h3>
              <p>
                I am currently working on a full stack application and learning
                React Hooks by building multiple projects found here on my{" "}
                <a
                  href="https://github.com/kxdang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github.
                </a>
                <br></br>
                <br></br> Creating React-Redux applications with TypeScript to
                have a better grasp of the technology stack at my current
                position at Coveo. For personal interest and as a personal
                initiative to be more effective at work.
              </p>

              <p
                style={{
                  textAlign: "center",
                  marginBottom: "0",
                  fontSize: "0.8em",
                  fontStyle: "italic",
                }}
              >
                Last updated on June 19th 2020
              </p>
            </div>
            <footer>
              <p
                style={{
                  textAlign: "center",
                  marginBottom: "0",
                  fontSize: "0.8em",
                  fontStyle: "italic",
                }}
              >
                /now page inspired by{" "}
                <a
                  href="https://sivers.org/nowff"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Derek Sivers
                </a>
              </p>
            </footer>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default now

export const pageQuery = graphql`
  query Books {
    bookone: file(relativePath: { eq: "books/book1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    booktwo: file(relativePath: { eq: "books/book2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
