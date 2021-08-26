import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import svgNew from "../../static/newTag.svg"
import svgOne from "../../static/oneTag.svg"
import svgTwo from "../../static/twoTag.svg"
import svgThree from "../../static/threeTag.svg"
import svgFour from "../../static/fourTag.svg"
import svgFive from "../../static/fiveTag.svg"

const TagList = styled.li`
  width: 60px;
  margin: 0 20px 0 0;
  text-align: center;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    width: 40px;
    flex: 0 0 auto;
    margin: 0 10px 0 0;
  }
  .tag-list__image {
    padding: 5px;
    background: ${props => props.theme.colors.body};
    border-radius: 50%;
    position: relative;
    img {
      position: relative;
      background: ${props => props.theme.colors.body};
      border-radius: 50%;
      display: block;
      z-index: 2;
    }
  }
  .tag-list__name {
    margin-top: 5px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${props => props.theme.colors.font};
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      font-size: 12px;
    }
  }
  /* &.active {
    .tag-list__image:after {
      content: "";
      position: absolute;
      display: block;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: ${props => props.theme.colors.gradient};
      animation: rotating 2s linear infinite;
    }
  }
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  } */
`
const TagNav = styled.nav`
  display: block;
  padding: 0 0 1rem;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 1em 0;
  }
`
const TagUl = styled.ul`
  display: flex;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin: 0 auto;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
      display: none;
    }
    &:after {
      content: "";
      width: 40px;
      flex: 0 0 auto;
    }
  }
`

const TagLink = ({ tagName, tagSvg, tagLink, path }) => {
  return (
    <TagList className={tagLink === path && "active"}>
      <Link to={tagLink} className="tag-list__link">
        <div className="tag-list__image">
          <img src={tagSvg} alt={tagName} />
        </div>
        <div className="tag-list__name">{tagName}</div>
      </Link>
    </TagList>
  )
}

const ArticleTagMenu = ({ location }) => {
  const path = location.pathname
  return (
    <TagNav>
      <TagUl>
        <TagLink tagName="New" tagSvg={svgNew} tagLink="/" path={path} />
        <TagLink
          tagName="One"
          tagSvg={svgOne}
          tagLink="/tags/one"
          path={path}
        />
        <TagLink
          tagName="Two"
          tagSvg={svgTwo}
          tagLink="/tags/two"
          path={path}
        />
        <TagLink
          tagName="Three"
          tagSvg={svgThree}
          tagLink="/tags/three"
          path={path}
        />
        <TagLink
          tagName="Four"
          tagSvg={svgFour}
          tagLink="/tags/four"
          path={path}
        />
        <TagLink
          tagName="Five"
          tagSvg={svgFive}
          tagLink="/tags/five"
          path={path}
        />
      </TagUl>
    </TagNav>
  )
}

export default ArticleTagMenu
