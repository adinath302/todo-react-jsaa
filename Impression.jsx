import React, { useState } from 'react'

const Impression = () => {
    // const [liked, setliked] = useState(false);
    // console.log(liked);

    // const handleClick = () => {
    //     setliked(!liked)
    // }
    const [text, settext] = useState("")
    const handleonchange = (e) => {
        settext(e.target.value);
    }
    return (
        <div className='m-10'>
            {/* <div>
            <button onClick={handleClick}>{liked ? "Liked ❤" : "Like 🤍"}</button>
        </div> */}

            <input type="text" placeholder='enter everything' onChange={handleonchange} />
            <p>{text}</p>
        </div>
    )
}

export default Impression;