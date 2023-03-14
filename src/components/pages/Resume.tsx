import '../../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Container from '../elements/Container';
import Footer from '../segments/Footer';
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
    const [password, setPassword] = useState('');
    const [data, setData] = useState<DataInterface[]>([]);
    const fetchData = () => {
        setTimeout(() => {
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
                .then((data) => setData(data));
        }, 1000);
    };

    return (
        <div className='dark:bg-black'>
            {data.length > 0 ? null : (
                <Wall fetchData={fetchData} setPassword={setPassword} />
            )}
            {data.length > 0 ? (
                <>
                    <Social />

                    <Container content={<ResumeLanding />} fullHeight={true} />
                    {data.length > 1 ? (
                        <Container
                            content={
                                <>
                                    {data && (
                                        <ul className='flex justify-center flex-wrap items-stretch'>
                                            {data.map((data, index) => (
                                                <li
                                                    className='w-96 m-8'
                                                    key={index}
                                                >
                                                    <h3 className='text-xl'>
                                                        {data.title}
                                                    </h3>
                                                    {data.subTitle && (
                                                        <h4 className='text-lg'>
                                                            {data.subTitle}
                                                        </h4>
                                                    )}
                                                    <ul>
                                                        {data.powers &&
                                                            data.powers.map(
                                                                (
                                                                    powers,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        className='text-base'
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {
                                                                            powers.name
                                                                        }
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
                            fullHeight={true}
                        />
                    ) : null}
                    <Footer />
                </>
            ) : null}
            <div className='absolute left-4 top-4 z-1000'>
                <Link to='/'>
                    <SvgContainer color='grey' size='small' svg={<Tag />} />
                </Link>
            </div>
        </div>
    );
}

export default Resume;
