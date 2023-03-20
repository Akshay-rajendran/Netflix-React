import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function Banner() {
    return (
        <div className="banner">
            <h1 className="h1">How To Train Your Dragon</h1>
            <div className="buttons">
                <button className="play"><PlayArrowIcon />play</button>
                <button className="button-more"><InfoOutlinedIcon />more info</button>
            </div>
        </div>
    )
}

export default Banner