import React, { Suspense, lazy } from 'react'
import Renderloader from '../elements/Renderloader'

const Title = lazy(async () => await import('../elements/Title'))
const ContentContainer = lazy(async () => await import('../elements/ContentContainer'))

const Skills = () => (
    <Suspense fallback={Renderloader()}>
        <div id='skills'>
            <Title size={'xxl'} title={'Skills'} />

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-24'>
                <ContentContainer
                    content={
                        'Fronted Development is something I adore. My biggest passion is to deliver meaningful software focused on a streamlined user centered design and performance.'
                    }
                    image={
                        <svg
                            className='fill-black dark:fill-white hover:fill-red'
                            viewBox='0 0 64 64'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M45.707 28.293l-1.414 1.414L46.586 32l-2.293 2.293 1.414 1.414L49.414 32zM38.293 28.293L34.586 32l3.707 3.707 1.414-1.414L37.414 32l2.293-2.293zM41.0185 36.914375l1.005-9.99975 1.99.2-1.005 9.99975z' />
                            <path d='M42 21c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm0 20c-4.962 0-9-4.037-9-9s4.038-9 9-9 9 4.037 9 9-4.038 9-9 9z' />
                            <path d='M63 38V4c0-1.654-1.346-3-3-3H20c-1.654 0-3 1.346-3 3v19H4c-1.654 0-3 1.346-3 3v34c0 1.654 1.346 3 3 3h40c1.654 0 3-1.346 3-3V46.125c.886-.315 1.734-.708 2.535-1.176l6.93 6.93c.723.723 1.684 1.121 2.706 1.121C61.283 53 63 51.282 63 49.172c0-1.023-.398-1.984-1.122-2.707L56.414 41H60c1.654 0 3-1.346 3-3zm-3 1h-4.744C56.365 36.908 57 34.528 57 32c0-8.271-6.729-15-15-15s-15 6.729-15 15c0 2.528.635 4.908 1.744 7H20c-.551 0-1-.448-1-1V11h42v27c0 .552-.449 1-1 1zm-18 6c-7.168 0-13-5.832-13-13s5.832-13 13-13 13 5.832 13 13-5.832 13-13 13zm-31 2h12v-2h2v8H11zm10-2H7v-8h10v1c0 1.654 1.346 3 3 3h1zM20 3h40c.551 0 1 .448 1 1v5H19V4c0-.552.449-1 1-1zM4 25h13v6H3v-5c0-.552.449-1 1-1zm41 35c0 .552-.449 1-1 1H4c-.551 0-1-.448-1-1V33h14v2H5v12h4v8h18V43h-4v-2h7.028c2.74 3.635 7.079 6 11.972 6 1.027 0 2.03-.105 3-.302zm16-10.828C61 50.18 60.18 51 59.171 51c-.488 0-.948-.19-1.293-.535l-6.658-6.658c.964-.754 1.831-1.622 2.586-2.586l6.658 6.658c.341.341.536.811.536 1.293z' />
                            <path d='M21 5h2v2h-2zM25 5h2v2h-2zM29 5h2v2h-2zM5 27h2v2H5zM9 27h2v2H9zM13 27h2v2h-2zM5 57h2v2H5zM9 57h18v2H9zM29 57h2v2h-2zM33 57h10v2H33zM29 53h14v2H29zM29 49h14v2H29zM21 35h4v2h-4zM21 31h4v2h-4zM21 27h4v2h-4zM21 25h6V13h-6zm2-10h2v8h-2zM29 13h2v2h-2zM33 13h26v2H33zM53 17h6v2h-6z' />
                        </svg>
                    }
                    title={'Frontend'}
                />
                <ContentContainer
                    content={
                        "I am getting highly enthusiastic from server side applications, API's, NodeJS, Python, databases, security, requests and responds. The whole shebang."
                    }
                    image={
                        <svg
                            className='fill-black dark:fill-white hover:fill-red'
                            viewBox='0 0 64 64'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M16 45c-2.206 0-4 1.794-4 4v8h2v-4h4v4h2v-8c0-2.206-1.794-4-4-4zm-2 6v-2c0-1.103.897-2 2-2s2 .897 2 2v2zM26 45h-4v12h2v-4h2c2.206 0 4-1.794 4-4s-1.794-4-4-4zm0 6h-2v-4h2c1.103 0 2 .897 2 2s-.897 2-2 2zM32 47h2v8h-2v2h6v-2h-2v-8h2v-2h-6z' />
                            <path d='M60.945 18H63v-6h-2.055c-.778 0-1.473-.465-1.786-1.222-.303-.726-.143-1.551.409-2.102l1.456-1.456-4.244-4.244-1.456 1.455c-.551.55-1.377.712-2.141.393C52.465 4.527 52 3.833 52 3.055V1h-6v2.055c0 .778-.465 1.473-1.222 1.786-.728.303-1.551.142-2.103-.409L41.22 2.976 36.976 7.22l1.456 1.457c.552.551.712 1.376.394 2.14-.299.718-.993 1.183-1.771 1.183H35v3h-8.219l-1.433-5.728C25.015 7.935 23.817 7 22.438 7H10c-1.654 0-3 1.346-3 3v25.104C5.74 37.105 5 39.465 5 42c0 1.911.416 3.79 1.211 5.502C3.127 48.647 1 51.618 1 55c0 4.411 3.589 8 8 8h33c3.859 0 7-3.14 7-7 0-2.998-1.877-5.594-4.609-6.578.4-1.096.609-2.26.609-3.422 0-.338-.018-.671-.051-1H52c1.654 0 3-1.346 3-3V25.312c.115.074.225.158.324.257l1.456 1.455 4.244-4.244-1.456-1.456c-.552-.551-.712-1.376-.394-2.14.299-.719.993-1.184 1.771-1.184zM47 56c0 2.757-2.243 5-5 5H9c-3.309 0-6-2.691-6-6 0-2.871 2.043-5.348 4.858-5.888l1.396-.268-.724-1.223C7.529 45.929 7 43.985 7 42c0-6.065 4.935-11 11-11 4.952 0 9.313 3.328 10.605 8.092l.39 1.439 1.184-.907C31.564 38.562 33.231 38 35 38c4.411 0 8 3.589 8 8 0 1.271-.296 2.493-.88 3.634l-.622 1.214 1.345.228C45.252 51.484 47 53.555 47 56zm6-14c0 .551-.448 1-1 1h-7.461c-1.277-4.053-5.07-7-9.539-7-1.716 0-3.409.448-4.888 1.279C28.197 32.343 23.396 29 18 29c-3.493 0-6.662 1.392-9 3.641V10c0-.551.448-1 1-1h12.438c.46 0 .858.312.971.758L25.219 17H52c.552 0 1 .449 1 1zm1.731-25.227c-.336-.746-.969-1.321-1.747-1.594.004-.06.016-.119.016-.179 0-2.206-1.794-4-4-4s-4 1.794-4 4h-2c0-3.309 2.691-6 6-6s6 2.691 6 6c0 .61-.093 1.206-.269 1.773zM47 15c0-1.103.897-2 2-2s2 .897 2 2zm10.313 3.452c-.616 1.478-.286 3.16.841 4.287l.042.041-1.416 1.416-.042-.042c-.487-.488-1.088-.816-1.738-.993v-2.887c1.288-1.462 2-3.315 2-5.275 0-4.411-3.589-8-8-8s-8 3.589-8 8h-4v-1h.055c1.591 0 3.011-.95 3.632-2.452.616-1.478.286-3.16-.841-4.287l-.042-.04 1.416-1.416.042.042c1.127 1.126 2.81 1.455 4.318.827C47.05 6.066 48 4.646 48 3.055V3h2v.055c0 1.591.95 3.011 2.452 3.631 1.477.615 3.159.287 4.286-.84l.042-.042 1.416 1.416-.042.042c-1.127 1.127-1.457 2.81-.827 4.319.607 1.47 2.027 2.42 3.618 2.42H61v2h-.055c-1.591-.001-3.01.949-3.632 2.451z' />
                            <path d='M11 11h2v4h-2zM15 11h2v4h-2zM19 11h2v4h-2z' />
                        </svg>
                    }
                    title={'Backend'}
                />
                <ContentContainer
                    content={
                        "Nothing can reach it's potential without a streamlined build and deploy process. Let's provide continuous delivery with high software quality."
                    }
                    image={
                        <svg
                            className='fill-black dark:fill-white hover:fill-red'
                            viewBox='0 0 504 504'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M472 456c-13.230469 0-24 10.769531-24 24s10.769531 24 24 24 24-10.769531 24-24-10.769531-24-24-24zm0 32c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8 8 3.585938 8 8-3.59375 8-8 8zm0 0M48 24C48 10.769531 37.230469 0 24 0S0 10.769531 0 24s10.769531 24 24 24 24-10.769531 24-24zm-32 0c0-4.40625 3.59375-8 8-8s8 3.59375 8 8-3.59375 8-8 8-8-3.59375-8-8zm0 0M429.769531 317.03125l-15.800781-31.597656c3.351562-6.800782 6.222656-13.671875 8.582031-20.511719L456 253.769531v-91.539062l-33.449219-11.152344c-2.351562-6.839844-5.230469-13.710937-8.582031-20.511719L429.785156 98.9375 365.0625 34.214844 333.433594 50.03125c-6.800782-3.351562-13.671875-6.230469-20.511719-8.582031L301.769531 8h-91.539062l-11.152344 33.449219c-6.839844 2.351562-13.710937 5.230469-20.511719 8.582031L146.9375 34.214844 82.214844 98.9375l15.816406 31.628906c-3.351562 6.800782-6.230469 13.671875-8.582031 20.511719L56 162.230469v91.53125l33.449219 11.148437c2.335937 6.792969 5.175781 13.601563 8.496093 20.347656L87.65625 304H40v160h56v-24h60.6875l24 24H224v8c0 17.648438 14.351562 32 32 32s32-14.351562 32-32v-8h56.007812c13.230469 0 24-10.769531 24-24 0-6.167969-2.40625-11.742188-6.238281-16 3.839844-4.257812 6.238281-9.832031 6.238281-16s-2.40625-11.742188-6.238281-16c3.054688-3.390625 5.140625-7.625 5.871094-12.34375zm-315.679687-35.320312c-4.402344-8.453126-7.992188-17.046876-10.675782-25.527344l-1.230468-3.886719L72 242.230469v-68.46875l30.183594-10.058594 1.222656-3.894531c2.671875-8.472656 6.265625-17.066406 10.671875-25.519532l1.882813-3.625-14.28125-28.566406L150.089844 53.6875l28.566406 14.28125 3.625-1.878906c8.460938-4.410156 17.046875-8 25.519531-10.675782l3.894531-1.222656L221.769531 24h68.46875l10.058594 30.183594 3.894531 1.222656c8.472656 2.671875 17.066406 6.265625 25.519532 10.671875l3.625 1.882813 28.566406-14.28125 48.410156 48.410156-14.28125 28.566406 1.878906 3.625c4.410156 8.460938 8 17.046875 10.675782 25.519531l1.222656 3.894531L440 173.769531v68.46875l-30.183594 10.058594-1.230468 3.886719c-2.683594 8.480468-6.273438 17.074218-10.675782 25.527344l-1.878906 3.625 14.296875 28.585937-47.273437 47.636719c-.40625-.535156-.839844-1.0625-1.285157-1.558594 3.839844-4.257812 6.238281-9.832031 6.238281-16 0-12.480469-9.609374-22.640625-21.792968-23.777344C380.152344 293.023438 400 252.207031 400 208c0-79.398438-64.601562-144-144-144s-144 64.601562-144 144c0 43.671875 19.855469 84.753906 53.558594 112H97.128906l18.933594-34.496094zM352.007812 408c0 4.414062-3.59375 8-8 8H280c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8h64.007812c4.40625 0 8 3.585938 8 8zM236.6875 208h38.625L288 195.3125V160c8.824219 0 16 7.175781 16 16v36.6875L276.6875 240h-41.375L208 212.6875V176c0-8.824219 7.175781-16 16-16v35.3125zM240 256h32v32h-32zm48-4.6875l32-32V176c0-17.648438-14.351562-32-32-32h-16v44.6875L268.6875 192h-25.375L240 188.6875V144h-16c-17.648438 0-32 14.351562-32 32v43.3125l32 32V288h-19.3125l-.503906.503906C176.871094 270.878906 160 240.664062 160 208c0-52.9375 43.0625-96 96-96s96 43.0625 96 96c0 32.425781-16.199219 62.121094-43.3125 80H288zM368 208c0-61.761719-50.238281-112-112-112s-112 50.238281-112 112c0 36.953125 18.382812 71.359375 48.535156 92.152344l-11.519531 11.519531C147.792969 287.609375 128 249.097656 128 208c0-70.574219 57.425781-128 128-128s128 57.425781 128 128c0 39.535156-17.871094 76.015625-48.382812 100.199219-.914063-5.671875-3.808594-10.632813-7.96875-14.238281C353.144531 272.792969 368 241.625 368 208zm-23.992188 128c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8H280c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8zM280 384c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8h64.007812c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8zM80 448H56V320h24zm107.3125 0l-24-24H96v-88h83.3125l32-32H312c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8h-83.3125l-34.34375 34.34375 11.3125 11.3125L224 347.3125V448zM256 488c-8.824219 0-16-7.175781-16-16V336h17.472656C256.574219 338.511719 256 341.183594 256 344c0 6.167969 2.40625 11.742188 6.238281 16C258.398438 364.257812 256 369.832031 256 376s2.40625 11.742188 6.238281 16C258.398438 396.257812 256 401.832031 256 408s2.40625 11.742188 6.238281 16C258.398438 428.257812 256 433.832031 256 440c0 10.414062 6.710938 19.214844 16 22.527344V472c0 8.824219-7.175781 16-16 16zm88.007812-40H280c-4.40625 0-8-3.585938-8-8s3.59375-8 8-8h64.007812c4.40625 0 8 3.585938 8 8s-3.59375 8-8 8zm0 0M16 72h16v16H16zm0 0M16 112h16v16H16zm0 0M16 152h16v16H16zm0 0M464 336h16v16h-16zm0 0M464 376h16v16h-16zm0 0M464 416h16v16h-16zm0 0' />
                        </svg>
                    }
                    title={'Devops'}
                />
            </div>
        </div>
    </Suspense>
)

export default Skills
