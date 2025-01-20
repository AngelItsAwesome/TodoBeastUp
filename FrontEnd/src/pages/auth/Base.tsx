import '../authStyles/normalize.css'
import '../authStyles/Base.css';

interface BaseProps {
    children: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ children }) => {
    return (
        <div className="content">
            <div className="content__principal">
                <h1 className="content__header">TodoBeast</h1>
                <main className="content__main">
                    {children}
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