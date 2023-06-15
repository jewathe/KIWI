import React from 'react'
import { Carousel } from 'react-carousel-minimal'

export default function Carouseeel () {
    const data = [
        {
            image: 'https://images7.alphacoders.com/108/thumb-1920-1088884.jpg'

        },
        {
            image: 'https://recipe-catalog.ru/wp-content/uploads/2018/05/cream-soup-from-white-mushrooms.jpg'

        },
        {
            image: 'https://hintergrundbild.org/wallpaper/full/a/a/d/94085-beautiful-gesunde-ernaehrung-hintergrundbilder-2560x1600-retina.jpg'

        },
        {
            image: 'https://tipsforwomen.pl/wp-content/uploads/2013/11/Depositphotos_40458749_l-2015.jpg'

        },
        {
            image: 'https://s1.1zoom.me/b4247/575/Baking_Pie_Apples_516248_1920x1080.jpg'

        }
    ]

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold'
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold'
    }
    return (
        <div>
            <div style={{ textAlign: 'center' }}>

                <div
                    style={{

                        padding: '0 0 20px 0'
                    }}
                >
                    <Carousel
                        data={data}
                        time={2000}
                        width='1000rem'
                        height='450px'
                        captionStyle={captionStyle}
                        radius='0px'
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition='bottom'
                        automatic
                        dots={false}
                        pauseIconColor='white'
                        pauseIconSize='40px'
                        slideBackgroundColor='darkgrey'
                        slideImageFit='cover'
                        thumbnails={false}
                        thumbnailWidth='100px'
                        showNavBtn
                    />
                </div>
            </div>
            <div />
        </div>
    )
}
