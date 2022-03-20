import React from 'react';
import './Css/404Page.css'

const Error = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1 className="NotFoundTxt">404</h1>
                </div>
                <h2>متاسفانه صفحه مورد نظر یافت نشد!</h2>
                <p>
                    لطفا از وجود صفحه مورد نظر اطمینان حاصل فرمایید
                </p>
                <a href="#">برو به خانه</a>
            </div>
        </div>
    );
};

export default Error;