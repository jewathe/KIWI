import React from 'react'
import Rating from '../component/Rating'
import FavoriteIcon from '@mui/icons-material/Favorite'
// import { BsFillFileEarmarkPdfFill } from 'react-icons/bs'
import PDFFile from './pdfFile'
import { PDFDownloadLink } from '@react-pdf/renderer'

export default function ListEpicerie () {
    const data = localStorage.getItem('Lists')
    const storedData = JSON.parse(data)

    console.log(storedData)
    return (
        <section className='h-[100auto]'>
            <div>
                <h1 style={{ textAlign: 'center' }}>Liste d'epicerie</h1>

                {storedData.map((item) => {
                    return (

                        <div key={item.id} style={{ height: '320px', width: '300px', border: '2px solid black', margin: '3px', textAlign: 'center', borderRadius: '5px' }}>
                            <img style={{ width: '300px', height: '200px' }} src={item.img} alt={item.name} />
                            <span style={{ position: 'relative' }}>
                                <FavoriteIcon style={{ position: 'absolute', top: '-180px', left: '-290px', color: 'red' }} sx={{ fontSize: '50px' }} />

                                <br />
                                <strong> {item.name}</strong> : {item.desc}  {item.name} {item.desc}
                            </span>
                            <br />

                            <Rating rating={4} reviews={5} />

                            <PDFDownloadLink document={<PDFFile />} filename='FORM'>
                                {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
                            </PDFDownloadLink>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
