import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"

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
                            <StaticImage src="../images/master-degree.webp" alt="Master Degree Cover" />
                            <p class="timeline__block__text"><span id="makespace"> <span id="makespace">The <a href="https://www.epfl.ch/education/master/programs/sustainable-management-and-technology/" target="_blank">MSc in Sustainable Management and Technology</a> is jointly delivered by three top institutions: <a href="https://www.imd.org" target="_blank">IMD Business School</a>, <a href="https://www.epfl.ch/" target="_blank"> Swiss Federal Institute of Technology Lausanne (EPFL)</a>, and <a href="https://www.unil.ch/hec/en/home.html" target="_blank">HEC Lausanne</a>.</span></span><span id="makespace"><span id="makespace">The program equips entrepreneurs and intrapreneurs of the future with the knowledge and skills enabling them to contribute to the transition toward a more resilient, environmentally responsible, and inclusive economy while harnessing the power of technology.</span></span> The MSc builds competencies along three dimensions: technology & innovation, economics & management, and tools and skills for developing sustainable solutions.</p>
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
                            <StaticImage src="../images/internship-generali.webp" alt="Internship Assicurazioni Generali" />
                            <p class="timeline__block__text"><span id="makespace"><span id="makespace">Working experience as Junior Innovation Consultant at <a href="https://www.generali.com" target="_blank">Assicurazioni Generali S.p.A.</a>, one of the largest global insurance and asset management providers.</span></span><span id="makespace"><span id="makespace">The internship opportunity was mainly focused on activating and supporting operations of the Central Innovation Fund while monitoring KPIs of previously funded initiatives.</span></span>At the same time, I was involved in the drafting of the <a href="https://www.generali.com/investors/Strategy" target="_blank">new strategic innovation plan for the period 2022-2024</a>, which has been finalized and announced in December 2021.</p>
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
                            <StaticImage src="../images/end-bachelor-degree.webp" alt="End Bachelor Degree" />
                            <p class="timeline__block__text"><span id="makespace"><span id="makespace">With the defense of my dissertation <i>“Create an innovation engine to lay the foundations for long-term success”</i>, an important chapter of my life came to a close.</span></span><span id="makespace"><span id="makespace">Super proud to have completed my BSc in Digital Management, with a final grade of 110 cum Laude.</span></span> It has been a challenging adventure, where the Covid-19 pandemic has upset overnight our learning habits, but it is also for this reason that the class of 2021 has an extra gear: it is resilient and never gets down!</p>
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
                            <StaticImage src="../images/hack-novartis.webp" alt="Hackathon Novartis" />
                            <p class="timeline__block__text"><span id="makespace"><span id="makespace">A 24-hour marathon, where 100 people challenged each other during the “Thalathon”, the hackathon organized by <a href="https://www.novartis.com" target="_blank">Novartis</a> in collaboration with H-Farm, to develop innovative ideas that can help people affected by thalassemia.</span></span> During the competition, participants were asked to create a heterogeneous team, which aimed at tackling one out of three key challenges: the enhancement of the time spent by patients in the hospital during the therapies, the development of technological tools for therapy management, and the awareness-raising initiatives on the disease.</p>
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
                            <StaticImage src="../images/freement.webp" alt="Freement" />
                            <p class="timeline__block__text"><span id="makespace"><span id="makespace">There is nothing truer than the quote <i>"Fall in love with the problem, not the solution”</i>. For this reason, I partnered with a friend of mine in order to tackle a critical problem that all the young people in my hometown have: what to do for New Year’s Eve.</span></span> We organized a four-day event in the Alps, with over 150 participants. For this event, we managed not only accommodation and transportation but also, financial resources, communication, and customer care.</p>
                        </div>
                    </div><div class="timeline__block">
                        <div class="timeline__block__bullet-point">
                            <span class="timeline__block__circle"></span>
                        </div>
                        <div class="timeline__block__head">
                            <h1 class="timeline__block__title">June - August 2019</h1>
                        </div>
                        <div class="timeline__block__body">
                            <h2>Summer Internship at Sca.co s.r.l.</h2>
                            <StaticImage src="../images/summer-internship-scaco.webp" alt="Summer Internship Generali" />
                            <p class="timeline__block__text"><span id="makespace"><span id="makespace">Working experience as Logistic Coordinator Intern at <a href="https://www.scaco.eu" target="_blank">Sca.co. s.r.l.</a>, a key player in the seafood and fish business in Italy.</span></span> The internship opportunity was mainly focused on planning, organizing, and controlling the supply chain of fresh seafood products with a short shelf-life time (below 15 days). In particular, the main tasks were arranging national and international deliveries for Supermarkets and Wholesalers, whereas analyzing the main issues for delivery delays to improve KPIs.</p>
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
                            <StaticImage src="../images/hack-fondazione-ania.webp" alt="Hackathon Fondazione ANIA" />
                            <p class="timeline__block__text"><span id="makespace"> <span id="makespace">A 24-hour marathon, where more than 60 young people challenged each other during the “H-ack health”, the hackathon organized by <a href="https://www.ania.it" target="_blank">ANIA Foundation</a> in collaboration with H-Farm, to devise innovative and forward-looking projects for the health insurance world.</span></span> During the competition, the participants were also able to participate in interviews with large tech and insurance companies and be inspired by the interventions of experts.</p>
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
                            <StaticImage src="../images/start-bachelor-degree.webp" alt="Start bachelor degree" />
                            <p class="timeline__block__text"><span id="makespace"> <span id="makespace">The <a href="https://www.h-farm.com/en/education/college/bachelor-degrees/digital-management" target="_blank">BSc in Digital Management</a> is an innovative program, designed in partnership with <a href="https://unive.it" target="_blank">Ca’ Foscari University of Venice</a> and <a href="https://www.h-farm.com/" target="_blank">H-Farm</a>. The course trains talents capable of creating innovative startups or providing support to companies, in the digital transformation and innovation of business models.</span></span> Taught entirely in English, the course offers an immersive and interactive learning experience with an interdisciplinary pathway, problem- and project-based teaching, and a rich program of enhancing activities. The BSc is distinguished by the continuous interaction between students, teachers, innovative startups, and the engagement of important lecturers experts in the fields of digital transformation and innovation.</p>
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
                            <StaticImage src="../images/end-high-school.webp" alt="End high school" />
                            <p class="timeline__block__text"><span id="makespace"> <span id="makespace">Obtained the high school diploma in Administration, Finance, and Marketing, with a final grade of 100/100.</span></span> The diploma focuses on developing business administration skills, integrated by transversal linguistic and IT knowledge. In particular, students acquire expertise in national and international economic and business phenomena, civil and fiscal legislation, business systems (organization, planning, programming, administration and accounting, finance and management control), and marketing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Layout>
  )
}

export default AboutPage
