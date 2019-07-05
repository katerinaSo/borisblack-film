import React from "react"
import styled from "styled-components"
const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h6>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h6>
    </div>
  )
}

export default styled(Title)`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h6 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: inline-block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
