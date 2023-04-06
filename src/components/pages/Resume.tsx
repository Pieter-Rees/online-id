import '../../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Container from '../elements/Container';
import Fader from '../elements/Fader';
import Footer from '../segments/Footer';
import Hr from '../elements/Hr';
import ResumeLanding from '../segments/ResumeLanding';
import Social from '../elements/Social';
import SvgContainer from '../elements/SvgContainer';
import Tag from '../svg/Tag';
import Wall from '../elements/Wall';

interface Powers {
    name: string;
}
interface DataInterface {
    isLoggedIn?: boolean;
    password?: string;
    title?: string;
    subTitle?: string;
    powers?: Powers[];
}

function Resume() {
    const [data, setData] = useState<DataInterface[]>([]);
    const [errorMessage, setError] = useState('');

    const fetchData = (password) => {
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                password: password
            })
        };

        fetch('http://localhost:5050/resume', options)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => {
                if (error.message.includes('Unauthorized')) {
                    setError(errorMessage + 'Unauthorized');
                }
            });
    };

    return (
        <div className='dark:bg-black'>
            {errorMessage.includes('Unauthorized') ? (
                <Fader>
                    <div className='fixed h-full w-full bg-white flex justify-center items-center'>
                        <span className='text-xxl'>UNAUTHORIZED</span>
                    </div>
                </Fader>
            ) : (
                <>{data.length > 0 ? null : <Wall fetchData={fetchData} />}</>
            )}

            {data.length > 0 ? (
                <>
                    <Social />
                    <Fader>
                        <Container
                            content={<ResumeLanding />}
                            fullHeight={true}
                        />
                    </Fader>
                    <Container
                        content={
                            <>
                                {data && (
                                    <ul className='flex justify-center flex-wrap items-stretch'>
                                        {data.map((data, index) => (
                                            <li
                                                className='text-base lg:text-lg text-black dark:text-white text-center flex align-center flex-col w-96 m-8'
                                                key={index}
                                            >
                                                <h3 className='text-xl'>
                                                    <Fader>{data.title}</Fader>
                                                </h3>
                                                {data.subTitle && (
                                                    <h4 className='text-lg'>
                                                        <Fader>
                                                            {data.subTitle}
                                                        </Fader>
                                                    </h4>
                                                )}
                                                <ul>
                                                    {data.powers &&
                                                        data.powers.map(
                                                            (powers, index) => (
                                                                <li
                                                                    className='text-base'
                                                                    key={index}
                                                                >
                                                                    <Fader>
                                                                        {
                                                                            powers.name
                                                                        }
                                                                    </Fader>
                                                                </li>
                                                            )
                                                        )}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        }
                        fullHeight={false}
                    />

                    <Hr />

                    <Footer />
                </>
            ) : null}
            <div className='fixed left-4 top-4 z-1000'>
                <Link to='/'>
                    <SvgContainer color='grey' size='small' svg={<Tag />} />
                </Link>
            </div>
        </div>
    );
}

export default Resume;
