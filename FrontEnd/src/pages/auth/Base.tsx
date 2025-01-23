import '../authStyles/normalize.css'
import '../authStyles/Base.css';
import { Outlet } from 'react-router-dom';


const Base = () => {
    return (
        <div className="content">
            <div className="content__principal">
                <a href={"/"}><h1 className="content__header">TodoBeast</h1></a>
                <main className="content__main">
                    <Outlet />
                </main>
                <footer className="content__footer">
                    <h1>&copy; All rights reserved by: Angel</h1>
                </footer>
            </div>
            <aside className="content__aside"></aside>
        </div>
    );
};

export default Base;