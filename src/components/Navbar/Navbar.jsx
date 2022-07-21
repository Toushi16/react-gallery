import './index.css';
import Button from '../Button';

const Navbar = ({showBtn, toggle}) => {

    return (
        <div className='header'>
            <Button btnTextCont={toggle ? "HIDE" : "SHOW"} onHandleClick={() => showBtn(!toggle)}/>
        </div>
    )
};

export default Navbar;