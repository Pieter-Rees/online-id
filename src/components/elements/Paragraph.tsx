import React from 'react'

type Props = {
    content: any
  }

const Paragraph = ({content}: Props) => (
    <p className="mt-8 text-base xl:text-lg text-black dark:text-white">
        {content}
    </p>
)

export default Paragraph
