import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import DataList from "../components/datalist"

export const query = graphql`
  query MyPetitionsQuery {
    allPetitionsCsv {
      edges {
        node {
          Name
          Short_description
          Long_Description
          Thumbnail
          External_Link
        }
      }
    }
  }
`

const Petitions = ({ data }) => {
  function getPetitionsData(data) {
    const petitionsArray = []
    data.allPetitionsCsv.edges.forEach(item =>
      petitionsArray.push(
        <DataList
          title={item.node.Name}
          shortDesc={item.node.Short_description}
          imgSrc={item.node.Thumbnail}
          longDesc={item.node.Long_Description}
          extLink={item.node.External_Link}
        />
      )
    )
    return petitionsArray
  }

  return (
    <Layout>
      <div className="category-header">
        <h2>Sign Petitions</h2>
        <h4>
          Support those who are starting campaigns, mobilizing supporters, and
          working with decision makers to drive solutions.
        </h4>
      </div>
      <div id="data-container">{getPetitionsData(data)}</div>
    </Layout>
  )
}

export default Petitions
