import React from 'react'

function FooterDate() {
  const d = new Date().getFullYear().toString()
  return <span>1989 - {d}</span>
}

export default FooterDate
