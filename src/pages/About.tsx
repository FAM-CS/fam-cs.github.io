import { FC, useEffect } from 'react'
import styled from '@emotion/styled'
import ContentHolder from '../components/ContentHolder'
import TextPanel from '../components/TextPanel'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogleScholar, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'



const Synopsis = styled.div`
    box-sizing: border-box;
    margin-top: 2em;
    margin-bottom: 1em;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4em;

    font-size: 16px;

    @media (max-width: 500px) {
        gap: 8px;
        margin: 1em 0px;
    }

    padding: 0px 8px;
    width: 100%;
`

const ProfilePicture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .profile {
        width: 160px;
        height: 160px;
        object-position: 50% -3%;
        object-fit: cover;
        border-radius: 50%;
    }

    .swirl {
        position: absolute;
        top: 180px;
        width: 2.5em;
    }

    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.tertiary};

    @media (max-width: 500px) {
        .profile {
            width: 120px;
            height: 120px;
        }

        .swirl {
            top: 125px;
            width: 2em;
        }
        border: 2px solid ${({ theme }) => theme.colors.tertiary};

    }
`

const Bio = styled.div`
    font-size: 20px;
    text-align: left;
    width: 200px;
    .greeting {
        font-weight: 600;
        font-size: 24px;
    }

    .status {
        display: inline-block;
    }

    @media (max-width: 500px) {
        font-size: 18px;
        .greeting {
            font-size: 20px;
        }
        width: 140px;
    }
`


const Socials = styled.div`
    ul {
        font-size: 20px;
        margin: 0.5em 0;
        padding: 0;
        padding-left: 0.5em;

    }

    .icon {
        font-size: 32px;
        margin-right: 0.2em;
    }

    li {
        display: block;
        margin-bottom: 0.8em;
    }

    a {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.secondary};

    }
    a:hover {
        color: ${({ theme }) => theme.colors.secondaryAlt}
    }
`


interface AppProps {
    title: string
}

const About: FC<AppProps> = ({ title }) => {
    useEffect(() => {
        document.title = title
    }, [])

    return <ContentHolder>
        <Synopsis>
            <ProfilePicture>
                <img className='profile' src='/FM_2021.jpg' alt='Fatima in a green hijab with lavender in the foreground' />
                <img className='swirl' src='swirl.svg' />
            </ProfilePicture>
            <Bio>
                <span className='greeting'>
                    Hi, I'm Fatima A. Moussaoui <br/>
                </span>
                MS/PhD Student,<br/>
                Graduate Researcher
            </Bio>
        </Synopsis>
        <TextPanel>
            <p>
                I'm a Computer Science MS/PhD student and Graduate Research Assistant at Oregon State University,
                advised by Margaret Burnett and Anita Sarma.
                I work on making technology more inclusive and humane through the lens of Human-Computer Interaction.
                I'm passionate about bringing diverse perspectives into tech&mdash;whether that's through conducting inclusive design research or mentoring others in CS.
                When I am not researching or debugging interfaces, I enjoy drawing, reading, or getting through my never-shrinking watch list.
            </p>

            <Socials>
                <h1>Links</h1>
                <ul>
                    <li>
                        <Link to="#"><FontAwesomeIcon className='icon' icon={faEnvelope}/>f.moussaoui AT pm DOT me</Link>
                    </li>
                    <li>
                        <Link to="/2026-MoussaouiFA_CV.pdf" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faFile}/>curriculum vitae</Link>
                    </li>
                    <li>
                        <Link to="https://scholar.google.com/citations?user=RpH7aJ8AAAAJ&hl=en"><FontAwesomeIcon className='icon' icon={faGoogleScholar}/>scholar</Link>
                    </li>
                    <li>
                        <Link to="https://github.com/FAM-CS"><FontAwesomeIcon className='icon' icon={faGithub}/>github</Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/fatima-moussaoui-b58370239/"><FontAwesomeIcon className='icon' icon={faLinkedin}/>linkedin</Link>
                    </li>
                    {/* <li>
                        <Link to="#"><FontAwesomeIcon className='icon' icon={faBluesky}/>bluesky</Link>
                    </li> */}
                </ul>
            </Socials>
        </TextPanel>
    </ContentHolder>
}

export default About