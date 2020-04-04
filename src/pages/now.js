import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link } from "gatsby"
import Switch from "react-switch";

import ThemeContext from "../context/ThemeContext"

import "../components/layout.css"

class now extends React.Component {
  render() {
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
                    color: `inherit`,
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
                  checkedIcon={<span style={{ marginLeft: "0.3rem" }}>🌞</span>}
                  uncheckedIcon={<span style={{ marginLeft: "0.3rem" }}>🌒</span>}
                  boxShadow="0 0 2px 3px #226597"
                  activeBoxShadow="0 0 2px 3px #89ddff"
                />
              </div>

              <Bio />

              <h3 style={{ textAlign: "center" }}>
                What am I doing at the moment?
              </h3>
              <p>
                I am currently working on completing{" "}
                <a
                  href="https://www.udemy.com/course/modern-react-bootcamp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Modern React Bootcamp (Hooks, Context, NextJS, Router)
                </a>
                . I'm excited to start building React applications.
                <br></br>
                <br></br>I am open for new opportunities and looking for a company that will allow me to grow professionally as a developer.
              </p>

              <h3 style={{ textAlign: "center" }}>Books</h3>
              <p style={{ textAlign: "center" }}>I am reading: </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <img
                  style={{ width: `35%`, height: "auto" }}
                  alt="The Name Of The Wind Book"
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScPPmotRjeCKBuB3kTrkSHiD6orWz94lAxk1AX5fInIqK6x7Td"
                />
                <img
                  style={{ width: `35%`, height: "auto" }}
                  alt="The Name Of The Wind Book"
                  src="https://vignette.wikia.nocookie.net/nameofthewind/images/9/9e/The_Name_of_the_Wind_%28UK%29_cover.jpg/revision/latest?cb=20150620153806"
                />

              </div>
              <p>
                The Name of the Wind by Patrick Rothfuss. A friend of mine
                recommended me a book outside my usual genre of mystery
                thriller. Looking to expand my vocabulary and improve writing
                skills.
              </p>

              <h3 style={{ textAlign: "center" }}>Games</h3>
              <p style={{ textAlign: "center" }}>
                Playing CS:GO and Borderlands 3
                <span role="img" aria-label="SunglassSmiley">
                  😎
                </span>
              </p>

              <h3 style={{ textAlign: "center" }}>Side-Projects</h3>
              <p>
                I am building multiple projects with React found on my{" "}
                <a
                  href="https://github.com/kxdang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a> and currently working on a React Colour Palette application.
              </p>

              <p
                style={{
                  textAlign: "center",
                  marginBottom: "0",
                  fontSize: "0.8em",
                  fontStyle: "italic",
                }}
              >
                Last updated on April 1st 2020
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
