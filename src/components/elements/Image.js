import P from '../../img/p.webp'

const Image = (props) => (
    <picture>
        <source type="image/webp" alt="Pieter's head" />
        <img src={P} alt="Pieter's head" className="h-48 w-48" />
    </picture>
)

export default Image
