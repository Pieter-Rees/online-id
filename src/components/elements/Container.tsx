import React from 'react'

type Props = {
    fullHeight: boolean,
    content: any
  }

const Container = ({ fullHeight, content }: Props)=> (
    <section
        className={`container mx-auto px-8 
        ${fullHeight ? 'h-screen' : ''}`}
    >
        {content}
    </section>
)

export default Container
