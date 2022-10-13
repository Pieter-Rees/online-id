function GetYear() {
    return (
        <span>
            '1989 - ' + new Date().getFullYear()
        </span>
    )
}

const FooterDate = () => <GetYear />

export default FooterDate
