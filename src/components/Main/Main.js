import React, { useState , useEffect } from 'react'
import {useStyles} from '../../styles/styles'

function Main({ albums, photos }) {
const classes = useStyles()

    const [tempAlbums, setTempAlbums] = useState(albums)
    const [searchBarValue, setSearchBarValue] = useState('')
    const [result, setResult] = useState([])
    // console.log(albums[0].id)
    const randomInteger = () => {
        return Math.floor((Math.random() * 200) + 50)
    }

    // console.log(randomInteger())

    let dataArr = []
    let dataSerial = []
    for (let i = 0; i < 5; i++) {
        let temp = []
        photos.filter((p, k) => p.albumId === albums[i].id).map(a => temp.push({
            "albumId": a.albumId,
            "id": a.id,
            "title": a.title,
            "url": a.url,
            "thumbnailUrl": a.thumbnailUrl,
            "randomNumber": randomInteger()
        }));
        temp = temp.slice(0, 10)
        dataArr = [...dataArr, temp]
        dataSerial = [...dataSerial, ...temp]
    }
    function handleChange(event) {
        event.preventDefault();
        setSearchBarValue(event.target.value)
        Results(searchBarValue)
    }

    const Results = (searchBarValue) => {
        setResult(res => res = dataSerial.filter(data => data.title.includes(searchBarValue)));
    }


    console.log(result)

    useEffect(() => {
        setTempAlbums(albums)
    }, [])
    return (
        <div style={{width:"100%"}}>
            <div className={classes.searchBarContainer} >
                <input className={classes.searchInput} autoFocus type="text" placeholder="See you financial report"
                    value={searchBarValue}
                    onChange={handleChange} />

                <span>{">"}</span>
            </div>
            <div className={classes.homeContainer}>
                {result.length > 0 ? (
                    result.map((r, i) => {
                        return (
                            <div key={i} className={classes.resContainer}>
                                <div className={classes.resLeft} >
                                    <div className={classes.resLeftPhotoContainer}>
                                        <img src={r.thumbnailUrl} alt='' />
                                    </div>
                                    <div className={classes.resLeftDetailsContainer}>
                                        <div className={classes.resLeftDetailsContainerTop}>{r.title}</div>
                                        <a href={r.url}  className={classes.resLeftDetailsContainerBottom}>{r.url}</a>
                                    </div>
                                </div>
                                <div className={classes.resRight}>
                                    <div>{r.randomNumber > 75 ? (<span style={{ color: "green" }}>{r.randomNumber}</span>) : (<span style={{ color: "red" }}>{r.randomNumber}</span>)}</div>
                                    <div>10:00 A.M.</div>
                                </div>
                            </div>
                        )
                    }
                    )
                ) : (
                    dataArr.map((a, i) => {
                        return (
                            <>
                                <h2 key={i} className={classes.albumHeading}>{albums[i]?.title}</h2>
                                {a.map((p, j) => {
                                    return (
                                        <div key={j} className={classes.resContainer}>
                                            <div className={classes.resLeft}>
                                                <div className={classes.resLeftPhotoContainer}>
                                                    <img src={p.thumbnailUrl} alt='' />
                                                </div>
                                                <div className={classes.resLeftDetailsContainer}>
                                                    <div className={classes.resLeftDetailsContainerTop}>{p.title}</div>
                                                    <a href={p.url} className={classes.resLeftDetailsContainerBottom}>{p.url}</a>
                                                </div>
                                            </div>
                                            <div className={classes.resRight}>
                                                <div>{p.randomNumber > 75 ? (<span style={{ color: "green" }}>${p.randomNumber}</span>) : (<span style={{ color: "red" }}>${p.randomNumber}</span>)}</div>
                                                <div>10:00 A.M.</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                        )
                    }))
                }
            </div>
        </div>

    )
}

export default Main
