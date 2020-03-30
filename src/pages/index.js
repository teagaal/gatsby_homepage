import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ClientCards from "../components/ClientCards"
import DomainCards from "../components/DomainCards"
import Hero from "../components/Hero"

const Aside = styled.div`
  background: #fff;
  border-top: 1px solid #e3e8ed;
  border-bottom: 1px solid #e3e8ed;
  padding: 2.5em 8em;
  margin-top: 10em;
  width: 100%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Earlysquad" />
    <Hero />
    <Aside>
      <DomainCards />
      <ClientCards />
    </Aside>
  </Layout>
)

export default IndexPage
