import React, {useEffect, useState} from 'react';

export default function Profile()
{
    const [dropboxState, setDropboxState] = useState(false);
    const [dropbox, setDropbox] = useState(() => {
        return <div></div>;
    })

    useEffect(() => {
        //console.log("USE EFFECT ", dropboxState)
        if (dropboxState)
        {
            setDropbox(<header>
                <nav>
                    <ul1>
                        <li><a href="/" class="hover-underline-animation">HOME</a></li>
                        <li><a href="/connect" class="hover-underline-animation">CONNECT</a></li>
                        <li><a href="/people" class="hover-underline-animation">RESOURCES</a></li>
                        <li><a href="/contact" class="hover-underline-animation">CONTACT</a></li>
                    </ul1>
                </nav>
            </header>)
        }
        else
        {
            setDropbox(<div></div>);
        }
    }, [dropboxState])

    function toggleDropboxState()
    {
        setDropboxState(!dropboxState);
    }
    return (
        <>
            <button onClick={toggleDropboxState} class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            {dropbox}
            <header class="navOverlayImage">
                <nav class="black">
                    <ul>
                        <li><a href="/" class="hover-underline-animation">HOME</a></li>
                        <li><a href="/connect" class="hover-underline-animation">CONNECT</a></li>
                        <li><a href="/people" class="hover-underline-animation">RESOURCES</a></li>
                        <li><a href="/contact" class="hover-underline-animation">CONTACT</a></li>
                    </ul>
                </nav>
            </header>
            <h1 class="black">
                Your Profile
            </h1>
        </>
    )
}