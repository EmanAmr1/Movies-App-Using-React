import './css files/NavCss.css'
import { Link } from 'react-router-dom';
import { useLanguage } from './Context/LanguageContext';
import { useSelector } from 'react-redux';
import { increment ,decrement } from '../Store/CounterSlice'
import counterReducer from '../Store/CounterSlice'

const Nav = () => {

    const favCount = useSelector((state) => state.counter.count);

    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage) => {
        changeLanguage(newLanguage);
    };


    const getText = () => {
        // Define the text based on the selected language
        return language === 'ar' ? arabicText : englishText;
    };

    const englishText = {
        appName: 'Movies App',
        watchList: 'Watch List',
        signUp: 'Sign Up?',
        languageBtn: language === 'en' ? 'English' : 'العربية',
    };

    const arabicText = {
        appName: 'تطبيق الأفلام',
        watchList: 'قائمة المشاهدة',
        signUp: 'سجّل حساب؟',
        languageBtn: language === 'en' ? 'English' : 'العربية',
    };


    return (


        <>

            <div className="nav" >
                <div className={`appname ${language === 'ar' ? 'arabic' : 'english'}`}   >{getText().appName}</div>

                <div className="vote">
                    <Link to='/WatchList' className='link watch ms-5'> {getText().watchList} {favCount} <i className="fa-solid fa-heart"> </i>  </Link>
                    <Link to='/signup' className='link watch'> {getText().signUp}   </Link>
                </div>

                {/* Other Navbar items */}

                <ul>
                    {/* Other Navbar items */}
                    <li className="dropdown">
                        <button className="dropbtn">{language === 'en' ? 'English' : 'العربية'}</button>
                        <div className="dropdown-content">
                            <span onClick={() => handleLanguageChange('en')}>English</span>
                            <span onClick={() => handleLanguageChange('ar')}>العربية</span>
                        </div>
                    </li>
                </ul>


            </div >

        </>

    )

}


export default Nav;