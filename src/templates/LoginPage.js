import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Login from '../components/Login'
import './LoginPage.css'

// Export Template for use in CMS preview
export const LoginPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
}) => (
  <main className="Login">
    <section className="section Login--Section1">
        <div className="Login--Details--Item">
          <Login/>
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
      }
    }
  }
`
