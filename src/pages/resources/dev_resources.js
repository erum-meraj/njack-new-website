import React from 'react'
import { NotionAPI } from 'notion-client'
import Head from 'next/head';
import ResourcesComponent from './resources_component';
import 'react-notion-x/src/styles.css'


const pageId = '0aae496d07034e838d48d0b5fee0d449';
export async function getServerSideProps() {
  // Fetch Notion page data from the Notion API
  const notion = new NotionAPI()
  const pageData = await notion.getPage(pageId)
  return {
    props: {
      pageData,
    },
  };
}

const dev_resources = ({ pageData }) => {
  return (
    <ResourcesComponent pageData={pageData} />
  )
}

export default dev_resources


