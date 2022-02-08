import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </div>
        <section class="timeline">
            <div class="container">
                <div class="timeline__wrapper">
                    <div class="timeline__progressbar"></div>
                    <div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title"><h2>Start of Master’s degree</h2></h1>
                        </div>
                        <div class="timeline__block__body">
                            <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                            <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                        </div>
                    </div>
                    <div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">February 2020</h1>
                        </div>
                        <div class="timeline__block__body">
                            <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                            <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                        </div>
                    </div>
                    <div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">March 2020</h1>
                        </div>
                        <div class="timeline__block__body">
                            <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                            <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                        </div>
                    </div>
                    <div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">April 2020</h1>
                        </div>
                        <div class="timeline__block__body">
                            <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                            <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Layout>
  )
}

export default AboutPage
