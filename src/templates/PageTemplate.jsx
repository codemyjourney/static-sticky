import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Card } from 'semantic-ui-react';

const PageView = ({ data }) => {
  const page = data.contentfulPage;

  return (
    <Layout>
      <PageWrapper>
        <Card fluid>
          <Card.Content><h2>{page.title}</h2></Card.Content>
          <Card.Content>
            <Markdown>
              {page.content.content}
            </Markdown>
          </Card.Content>
        </Card>
      </PageWrapper>
    </Layout>
  );
};


const PageWrapper = styled.div`
  padding: 3em 0;
`;

export default PageView;


export const pageQuery = graphql`
  query pageQuery($id: String!){
    contentfulPage(id: {eq: $id}) {
      title
      content {
        content
      }
    }
  }
`;
