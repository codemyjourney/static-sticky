import React from 'react';
import Link from 'gatsby-link'
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import styled from 'styled-components';


const Job = (props) => (
  <JobWrapper>
    <div className="logo-container">
      <Link to={'/partners/' + props.partner.name.replace(/\W+/g, '-').toLowerCase()}>
        <img className="logo"
          src={props.job.partner.logo.file.url}
          alt="Partner Logo"
        />
      </Link>
    </div>
    <Link to={"/vacatures/" + props.job.job_title.replace(/\W+/g, '-').toLowerCase()} className="content-container">
      <CardContent>
        <h3>{props.job.job_title}</h3>
        <p>
          {props.job.summary}
        </p>
      </CardContent>
    </Link>
  </JobWrapper>
);


const JobWrapper = styled(Card)`
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 3fr;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }
  .logo-container {
    display: flex;  
    align-items: center;
    justify-content: center;
    height: inherit;
    padding: 25px;
    background-color: #eee;
    .logo {
      width: auto;
      height: auto;
      margin: 0;
      transition: all 0.15s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .content-container {
    color: black;
    text-decoration: none;
  }
`


export default Job;
