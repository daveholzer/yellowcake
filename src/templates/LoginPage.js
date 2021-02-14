import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './LoginPage.css'

// Export Template for use in CMS preview
export const LoginPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  password,
  email,
}) => (
  <main className="Login">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Login--Section1">
      <div className="container Login--Section1--Container">
        <div>
          <Content source={body} />
          <div className="Login--Details">
          </div>
        </div>

        <div>
          <FormSimpleAjax name="Simple Form Ajax" />
        </div>
      </div>
    </section>
  </main>
)

const LoginPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <LoginPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default LoginPage

export const pageQuery = graphql`
  query LoginPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        email
      }
    }
  }
`
