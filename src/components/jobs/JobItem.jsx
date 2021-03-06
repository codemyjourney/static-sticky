import React from 'react';
import styled from 'styled-components';
import { Card, Icon, Image, Label } from 'semantic-ui-react';
import { Link } from 'gatsby';

const JobItem = props => (
  <JobWrapper>
    <Card
      as={Link}
      fluid
      to={`/${props.job.node_locale}/vacatures/${props.job.slug}`}
    >
      {
        // This div is neccesary for the styling of the ribbon, believe it or not
        // there is this .ui.card > :first-child selector in card.less (semantic)
        // that sets the border-top to none (apparently this is important)
        // overriding this is kinda hard because you need to set the color again,
        // matching (but not identical to) the label color
        // Inserting an empty before the ribbon fixes this bullshit
      }
      <div></div>
      <Label color={props.job.isJob ? 'blue' : 'yellow'} ribbon="right">
        <Icon
          name={props.job.isJob ? 'briefcase' : 'student'}
          size="large"
          className="ribbon-icon"
        />
      </Label>
      <div className="image-container">
        <Image size="small" src={props.job.partner.logo.file.url} />
      </div>
      <h4>{props.job.job_title}</h4>
      <p>{props.job.summary}</p>
    </Card>
  </JobWrapper>
);

const JobWrapper = styled.div`
  &&& {
    width: 22rem;
    padding: 1rem;
    .card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .image-container {
      height: 7em;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ribbon {
      left: calc(100% + 2.5rem);
      padding: 0.5rem;
      width: 2rem;
      height: 2.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
      &-icon {
        margin: 0;
        width: 1.5rem;
      }
    }
  }
`;

export default JobItem;
