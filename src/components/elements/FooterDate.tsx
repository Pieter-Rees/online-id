import React from 'react'

interface FooterDateProps {
    year?: string
}

function FooterDate(props: FooterDateProps) {
    const d = new Date().getFullYear().toString()
    return <span>1989 - {d}</span>
}

export default FooterDate
