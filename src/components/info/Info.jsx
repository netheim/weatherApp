import React from 'react';
import classes from './Info.module.css';

const Info = ({data}) => {
    const ucFirst = (str) => {
        if (!str) return str;

        return str[0].toUpperCase() + str.slice(1);
    }
    let time = new Date()

    return (
        <div className={classes.info}>
            <div className="top">
                <div className={classes.location}>
                    {data.main ? <p>{data.name}</p> : <p>Город</p>}
                </div>
                <div className={classes.temp}>
                    {data.main ? <h1>{(data.main.temp).toFixed(1)}°С</h1> : <h1>0°C</h1>}
                </div>
                <div className={classes.description}>
                    {data.weather ? <p>{ucFirst(data.weather[0].description)}</p> : <p>Описание</p>}
                </div>


            </div>
            <div className={classes.time}>
                {data.main ? <h1>{`${time.getUTCHours() + data.timezone / 3600}:${time.getUTCMinutes()}`}</h1> : <h1>00:00</h1>}
            </div>
            <div className={classes.bottom}>

                <div className="feels">
                    {data.main ? <p className={classes.bold}>{(data.main.feels_like).toFixed(1)}°C</p> : <p className={classes.bold}>0°C</p>}
                    <p>Ощущается</p>
                </div>
                <div className="humidity">
                    {data.main ? <p className={classes.bold}>{data.main.humidity}%</p> : <p className={classes.bold}>0%</p>}
                    <p>Влажность</p>
                </div>
                <div className="wind">
                    {data.wind ? <p className={classes.bold}>{(data.wind.speed).toFixed(1)}м/с</p> : <p className={classes.bold}>0м/с</p>}
                    <p>Ветер</p>
                </div>
            </div>

        </div>
    );
};

export default Info;