import Pieter from '../../img/p.webp'

const Image = () => (
    <picture>
        <source type="image/webp" />
        <img src={Pieter} alt="Pieter's head" className="h-48 w-48" />
    </picture>
)

export default Image
