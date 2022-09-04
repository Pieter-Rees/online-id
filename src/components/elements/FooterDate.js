function GetYear() {
    return '1989 - ' + new Date().getFullYear()
}

const FooterDate = () => <GetYear />

export default FooterDate
