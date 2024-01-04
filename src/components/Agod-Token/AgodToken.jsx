import React from 'react'
import { useSelector } from 'react-redux';
import { addContent } from '../../store/Constant';

function AgodToken() {
    const content = useSelector((e) => e.ContentReducer.content);

    return (
        <div className='AgodToken'>
            <div className='innerAgodToken'>

                <div className='tokenname'>
                    <h2>{addContent(content.homeAgodToken).map((a, i) => (
                        <>
                            {a}
                            <br />
                        </>
                    ))}</h2>
                </div>
                <div className='tokenLogo'>
                    {/* <div className='upperLines'>
                        <img src='/img/newassets/tokenline.png' />
                    </div> */}
                    <div className='tokenImage'>
                        <img src='/img/git.gif' />
                    </div>
                    {/* <div className='lowerLines'>
                        <img src='/img/newassets/tokenline.png' />
                    </div> */}
                </div>
                <div className='tokenDes'>
                    <h2>{addContent(content.homeAgodTokenText).map((a, i) => (
                        <>
                            {a}
                            <br />
                        </>
                    ))}</h2>
                </div>
            </div>
        </div>
    )
}

export default AgodToken