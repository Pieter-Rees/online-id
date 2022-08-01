import React from 'react'

type Props = {
    GetYear: object,
  }

function GetYear(Props) {
    return '1989 - ' + new Date().getFullYear()
}

const FooterDate = () => <GetYear />

export default FooterDate
