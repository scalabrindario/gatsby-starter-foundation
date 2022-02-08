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
                            <h1 class="timeline__block__title">September 2021</h1>
                        </div>
                        <div class="timeline__block__body">
                            <h2>Start of Master's degree</h2>
                            <p class="timeline__block__text">The MSc in Sustainable Management and Technology program is jointly delivered by three top institutions: IMD, Swiss Federal Institute of Technology Lausanne (EPFL), and HEC Lausanne.</p>
                            <p class="timeline__block__text">The program equips entrepreneurs and intrapreneurs of the future with the knowledge and skills enabling them to contribute to the transition toward a more resilient, environmentally responsible, and inclusive economy while harnessing the power of technology.The MSc wants to build competencies along three dimensions: technology & innovation, economics & management, and tools and skills for developing sustainable solutions.</p>
                        </div>
                    </div>
                    <div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">January - August 2021</h1>
                        </div>
                        <div class="timeline__block__body">
                            <h2>Internship at Assicurazioni Generali S.p.A.</h2>
                            <p class="timeline__block__text">Working experience as Junior Innovation Consultant, at, one of the largest global insurance and asset management providers.</p>
                            <p class="timeline__block__text">The internship opportunity was mainly focused on activating and supporting operations of the Central Innovation Fund while monitoring KPIs of previously funded innovation initiatives. At the same time, I was involved in the drafting of the, which has been finalized and announced in December 2021.</p>
                        </div>
                    </div>
                    <div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">July 2021</h1>
                        </div>
                        <div class="timeline__block__body">
                            <h2>End of Bachelor's degree</h2>
                            <p class="timeline__block__text">With the defense of my dissertation <i>“Create an innovation engine to lay the foundations for long-term success”</i>, an important chapter of my life came to a close. Super proud to have completed my BSc in Digital Management, with a final grade of 110 cum Laude.</p>
                            <p class="timeline__block__text">t has been a challenging adventure, where the Covid-19 pandemic has upset overnight our learning habits, but it is also for this reason that the class of 2021 has an extra gear: it is resilient and never gets down!</p>
                        </div>
                    </div><div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">January 2020</h1>
                        </div>
                        <div class="timeline__block__body">
                            <h2>Novartis Hackathon</h2>
                            <p class="timeline__block__text">A 24-hour marathon, where 100 people challenged each other during the “Thalathon”, the hackathon organized on 24 and 25 January 2020 by the Novartis in collaboration with H-Farm, to develop innovative ideas that can help people affected by thalassemia.</p>
                            <p class="timeline__block__text">During the competition, participants were asked to create a heterogeneous team, which aimed at tackling one out of three key challenges: the enhancement of the time spent by patients in the hospital during the therapies, the development of technological tools for therapy management, and the awareness-raising initiatives on the disease.</p>
                        </div>
                    </div><div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">September - December 2019</h1>
                        </div>
                        <div class="timeline__block__body">
                            <h2>Freement (Entrepreneurial Activity)</h2>
                            <p class="timeline__block__text">There is nothing truer than the quote <i>"Fall in love with the problem, not the solution”</i>. For this reason, I partnered with a friend of mine in order to tackle a critical problem that all the young people in my hometown have: what to do for New Year’s Eve.</p>
                            <p class="timeline__block__text">We organized a four-day event in the Alps, with over 150 participants. For this event, we managed not only accommodation and transportation but also, financial resources, communication, and customer care.</p>
                        </div>
                    </div><div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">June - September 2019</h1>
                        </div>
                        <div class="timeline__block__body">
                            <h2>Summer Internship at Sca.co s.r.l.</h2>
                            <p class="timeline__block__text">Working experience as Logistic Coordinator Intern, at Sca.co. s.r.l., a key player in the seafood and fish business in Italy.</p>
                            <p class="timeline__block__text">he internship opportunity was mainly focused on planning, organizing, and controlling the supply chain of fresh seafood products with a short shelf-life time (below 15 days). In particular, the main tasks were arranging national and international deliveries for Supermarkets and Wholesalers, whereas analyzing the main issues for delivery delays to improve KPIs.</p>
                        </div>
                    </div>
                    <div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">May 2019</h1>
                        </div>
                        <div class="timeline__block__body">
                            <h2>Fondazione ANIA Hackathon</h2>
                            <p class="timeline__block__text">A 24-hour marathon, where more than 60 young people challenged each other during the “H-ack health”, the hackathon organized on 24 and 25 May 2019 by the ANIA Foundation in collaboration with H-Farm, to devise innovative and forward-looking projects for the health insurance world.</p>
                            <p class="timeline__block__text">During the competition, the participants were also able to participate in interviews with large tech and insurance companies and be inspired by the interventions of experts.</p>
                        </div>
                    </div>
                    <div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">September 2018</h1>
                        </div>
                        <div class="timeline__block__body">
                            <h2>Start of Bachelor's degree</h2>
                            <p class="timeline__block__text">The BSc in Digital Management is an innovative program, designed in partnership with Ca’ Foscari University of Venice and H-Farm. The course trains talents capable of creating innovative startups or providing support to companies, in the digital transformation and innovation of business models.</p>
                            <p class="timeline__block__text">Taught entirely in English, the course offers an immersive and interactive learning experience with an interdisciplinary pathway, problem- and project-based teaching, and a rich program of enhancing activities. The BSc is distinguished by the continuous interaction between students, teachers, innovative startups, and the engagement of important lecturers experts in the fields of digital transformation and innovation.</p>
                        </div>
                    </div>
                    <div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">July 2018</h1>
                        </div>
                        <div class="timeline__block__body">
                            <h2>End of High School</h2>
                            <p class="timeline__block__text">Obtained the high school diploma in Administration, Finance, and Marketing, with a final grade of 100/100.</p>
                            <p class="timeline__block__text">The diploma focuses on developing business administration skills, integrated by transversal linguistic and IT knowledge. In particular, students acquire expertise in national and international economic and business phenomena, civil and fiscal legislation, business systems (organization, planning, programming, administration and accounting, finance and management control), and marketing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Layout>
  )
}

export default AboutPage
