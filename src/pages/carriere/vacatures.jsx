import React from 'react';
import { graphql } from 'gatsby';
import JobsList from '../../components/JobsList';
import JobFilter from '../../components/JobFilter';
import ContentfulPage from '../../components/ContentfulPage'
import Markdown from 'markdown-to-jsx'


class JobIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studiesFilter: [],
      typesFilter: [],
    };
    this.page = props.data.contentfulPage
  }

  updateStudiesFilter = (selectedStudies) => {
    this.setState({ studiesFilter: selectedStudies });
  }

  updateTypesFilter = (selectedTypes) => {
    this.setState({ typesFilter: selectedTypes });
  }

  render() {
    return (
      <ContentfulPage page={this.page}>
        <Markdown>
          {this.page.content.content}
        </Markdown>
        <JobFilter
          updateStudiesFilter={this.updateStudiesFilter}
          studiesFilter={this.state.studiesFilter}
          updateTypesFilter={this.updateTypesFilter}
          typesFilter={this.state.typesFilter}
        />
        <JobsList
          jobs={this.props.data.allContentfulJobListing.edges}
          studiesFilter={this.state.studiesFilter}
          typesFilter={this.state.typesFilter}
        />
      </ContentfulPage>
    );
  }
}


export const JobsListQuery = graphql`
  query JobsListQuery {
    allContentfulJobListing {
      edges {
        node {
          id
          job_title
          summary
          featured
          target_studies
          type
          partner {
            name
            logo {
              file {
                url
              }
            }
          }
        }
      }
    }
    contentfulPage(slug: {eq: "vacatures"}) {
      title
      content {
        content
      }
    }
  }
`;


export default JobIndexPage;