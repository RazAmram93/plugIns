import React, { useEffect, useState } from "react";
import './App.css';

//Arrow function to fetch the data from the feed url
const FetchData = () => {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        fetch('https://app.konimbo.co.il/api/v2?storeId=4030&token=25565b5887d52c7f8293ba20ef117beb457cfd32431a1cad604d0f9611d68782602c7b3ac121b645&groupName=group1&modelName=item&=fdghd')
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>hello</h1>
            <div className="itemsWrapper" >
            {/* Uses the map function to create a new array with elements that contain each plugin's information */}
                {records.map((list, index) => (
                    <div className="item" key={index}>
                        <div className="itemWrapper">
                            <div className="group1_wrapper">
                                <div className="wrap">
                                    <div className="img_wrapper">
                                        <img src={list.images[0].url} alt={list.title} className="item-image" />
                                    </div>
                                    <p className="item_title" >{list.title}</p>
                                    <a href={'https://secure.konimbo.co.il/admin/user_files/new?duplicate='+list.model_title} className="installBtn">התקן עכשיו !</a>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default FetchData;
