import './DevPortal.css';
import React, { useState } from "react";
import logo from './images/logo.svg'
import profile from './images/profile.png'
import graph from './images/graph.png'
import eye from './images/eye.png'
import symbol from './images/symbol.png'
import diagArrow from './images/diag-arrow.png'

function DevPortal() {
    const [view, setView] = useState('Statistics');

    function display() {
        if (view === 'Statistics') {
            return displayStatistics();
        }
        else if (view === 'Models') {
            return displayModels();
        }
        else {
            return displayKeys();
        }
    }

    function displayStatistics() {
        return (
            <div>
                <h1 className='devh1'>Usage</h1>
                <br /><br /><br />
                <div className='grp'>
                    <table border="0">
                        <tr>
                            <td></td>&emsp;&emsp;
                            <td>Today</td>&emsp;&emsp;
                            <td>Month</td>
                        </tr>
                        <br />
                        <tr>
                            <td class='bold'>Total API Calls</td>&emsp;&emsp;
                            <td>3 860</td>&emsp;&emsp;
                            <td>56 860</td>
                        </tr>
                        <tr>
                            <td></td>&emsp;&emsp;
                            <td><sup>+10%</sup></td>&emsp;&emsp;
                            <td><sup>-2%</sup></td>
                        </tr>
                        <br />
                        <tr>
                            <td class='bold'>Estimate cost</td>&emsp;&emsp;
                            <td>$350</td>&emsp;&emsp;
                            <td>$7 856</td>
                        </tr>
                        <br /><br />
                        <tr>
                            <td class='bold'>Per key usage</td>&emsp;&emsp;
                        </tr>
                        <tr>
                            <td class='hiddenkey'>******Kw3UH </td>&emsp;&emsp;
                            <td>950</td>&emsp;&emsp;
                            <td>10 766</td>
                        </tr>
                        <br />
                        <tr>
                            <td class='hiddenkey'>******Kw3UH </td>&emsp;&emsp;
                            <td>1 268</td>&emsp;&emsp;
                            <td>20 848</td>
                        </tr>
                        <br />
                        <tr>
                            <td><a class='link' href='/'>Show More</a></td>
                        </tr>
                    </table>
                </div>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <img src={graph} alt='usage graph' className='graph' />
            </div>
        );
    }

    function displayModels() {
        return (
            <div>
                <h1 className='devh1'>Models</h1>
                <p>TBD</p>
                <p>No Figma frame provided for this screen</p>
            </div>
        );
    }

    function displayKeys() {
        return (
            <div>
                <h1 className='devh1'>Keys</h1>
                <br /><br /><br />
                <div className='grp'>
                    <div className='grp'>
                        <div class='hiddenkey'>*********************Kw3UH &emsp;&emsp;&emsp;&emsp; <img className='eye' src={eye} alt="eye symbol" /></div>
                    </div>
                    <img class='symbol' src={symbol} alt='symbol' />
                    <br /><br />
                    <div className='grp'>
                        <div className='redtext'>Revoke</div>
                    </div>
                    <a class='link' href='/'>Statistics <img class='diagarrow' src={diagArrow} alt="arrow" /></a>
                    <br /><br /><br />

                    <div className='grp'>
                        <div class='hiddenkey'>*********************Kw3UH &emsp;&emsp;&emsp;&emsp; <img className='eye' src={eye} alt="eye symbol" /></div>
                    </div>
                    <img class='symbol' src={symbol} alt='symbol' />
                    <br /><br />
                    <div className='grp'>
                        <div className='redtext'>Revoke</div>
                    </div>
                    <a class='link' href='/'>Statistics <img class='diagarrow' src={diagArrow} alt="arrow" /></a>
                    <br /><br /><br />
                    <button className='btn'>+ New Key</button>
                </div>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <div className='rec'>
                    <h2 class='blueback'>Keep keys private <br/> Keep keys safe</h2>
                    <p class='blueback'>Follow recomendations to keep keys safe <br/><br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                </div>

                <br /><br />

            </div>
        );
    }

    return (
        <div>
            <a href="/" style={{ textDecoration: "none" }}>
                <img src={logo} alt='logo' className='logo'></img>
            </a>
            <span className='username'>Esther</span>
            <img src={profile} alt='profile' className='profile' />
            <br />

            <h1 className='devh1'>Developer</h1>
            <p className='subtitle'>API Access Tokens And Security, Usage Details</p>

            <div className='grp'>
                <button className='viewbtn' onClick={() => setView('Statistics')}>Statistics</button>
                &emsp;
                <button className='viewbtn' onClick={() => setView('Models')}>Models</button>
                &emsp;
                <button className='viewbtn' onClick={() => setView('Keys')}>Keys</button>
            </div>
            <br /><br /><br />

            {display()}

            <br />
        </div>
    );

}

export default DevPortal;