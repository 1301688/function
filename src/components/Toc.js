import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const TocWrapper = styled.div`
  position: sticky; // Bio fixed when scrolling
  top: 2em; // Top clearance when scrolling
  width: ${props => props.theme.sizes.bioWidth};
  padding: 0 1.3em; // Side only clearance
  background: ${props => props.theme.colors.toc}; // bio background color
  border-radius: 4px; // bio corner adjustment
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); // Bio 3D adjustment
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    top: 1em;
    position: relative;
    padding: 1.3em 1em;
    width: 100%;
  }
`
const TocName = styled.div``
const TocMain = styled.div`
  margin-top: 0.5em;
`
const HeadingList = ({ headings }) => (
  <ul>
    {headings.map(heading => (
      <React.Fragment key={heading.title}>
        <li>
          <Link
            to={heading.url.replace("#", "")}
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
          >
            {heading.title}
          </Link>
        </li>
        {heading.items && <HeadingList headings={heading.items} />}
      </React.Fragment>
    ))}
  </ul>
)

const Toc = ({ headings }) => {
  return (
    <TocWrapper>
      <TocName>Toc</TocName>
      <TocMain>
        <HeadingList headings={headings} />
        <Link to="/">Home</Link>
      </TocMain>
    </TocWrapper>
  )
}

export default Toc
