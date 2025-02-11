import React from 'react'
import dynamic from 'next/dynamic'
import { Header, Footer } from '@/components'
import Head from 'next/head';
import 'react-notion-x/src/styles.css'


const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false
  }
)
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)


const resources_component = ({ pageData }) => {
  const NotionRenderer = dynamic(() => import('react-notion-x').then((mod) => mod.NotionRenderer), {
    ssr: false,
  });
  return (
    <>
      <Header selected={'Resources'} />
      <div>
      <Head>
        <title>NJACK | Dev Resources</title>
        <style>
          {`
            .notion-page{
              width: 90% !important;
            }
            .notion-page-no-cover{
              padding-top: 0px !important;
            }
            .notion-header{
              z-index: 0 !important;
            }
            .notion-frame{
              background-color: #161616;
            }
            .notion-header .breadcrumbs, .notion-header .notion-nav-header{
              color: #ffffff;
              background-color: #161616;
            }
            .notion-header .breadcrumb.active{
              color: #ffffff;
            }
            .notion-title{
              color: #ffffff; 
            }
            .notion-collection-header-title{
              color: #ffffff;
            }
            .notion-collection-card{
              background-color: #282828 !important;
              border-radius: 15px !important;
              color: #ffffff !important;
            }
            .notion-page-title-text{
              color: #ffffff;
            }
            .notion-collection-view-type-title{
                color: #ffffff !important;
            }
            svg{
                fill: #ffffff !important;
            }
          `}
        </style>
      </Head>
      {pageData ? <NotionRenderer
        recordMap={pageData}
        fullPage={true}
        darkMode={false}
        components={{
          Code,
          Collection,
          Equation,
          Pdf,
          Modal
        }}
      /> : null}
      </div>
      <Footer />
    </>
  )
}

export default resources_component


