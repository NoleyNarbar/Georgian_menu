import React, { useContext } from "react"
import Image from "../components/Image"
import {Context} from "../Context"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)
    
    const imageElements = allPhotos.map((img, i) => (        
        <Image className={getClass(i)} key={img.id} img={img} />
    ))

    return (
        <main className="grid gap-2 grid-cols-2 p-10">
            {imageElements}
        </main>
    )
}

export default Photos