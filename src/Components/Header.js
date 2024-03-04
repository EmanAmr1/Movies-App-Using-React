import './css files/HeaderCss.css'
import { useLanguage } from './Context/LanguageContext';
const Header = () => {

    const { language } = useLanguage();


    const englishText = {
        title: 'Welcome To Our Movie App',
        description: 'Millions of movies, TV shows, and people to discover. Explore Now.',
        placeholder: 'Search and Explore ...',
        searchButton: 'Search',
      };
    
      const arabicText = {
        title: 'مرحبًا بك في تطبيقنا للأفلام',
        description: 'ملايين الأفلام والمسلسلات والأشخاص لاكتشافها. استكشف الآن.',
        placeholder: 'ابحث واستكشف ...',
        searchButton: 'ابحث',
      };
    


    const getText = () => {
        // Define the text based on the selected language
        return language === 'ar' ? arabicText : englishText;
      };



    return (


        <>

            <div className={`header ${language === 'ar' ? 'arabic' : 'english'}`}>
                <h1>{getText().title}</h1>
                <p>{getText().description}</p>
                <div className='search'>
                    <input type="text" placeholder={getText().placeholder}></input>
                    <button>{getText().searchButton} </button>
                </div>
            </div>


        </>

    )

}


export default Header;