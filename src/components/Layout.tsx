import Head from "next/head"
import React, { FC } from "react"

interface LayoutProps{
  children?:React.ReactElement | React.ReactElement[],
  title:string,
  description:string,
}
export const Layout:FC<LayoutProps> = ({children,title,description}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fusion/favicon.ico"/>
      </Head>
      {children}
    </>
  )
}
