import en_US from './en_US';
import zh_CN from './zh_CN';

interface ILanguages{
    [k: string]: {
        [k2: string]: string
    };
}

const Languages: ILanguages = {
    en_US,
    zh_CN
}

class Language{
    public chooseLocaleMsg() {
        let msg;
        switch (this.getLanguage().split('-')[0]) {
            case 'en':
                msg = 'en_US';
                break;
            case 'zh':
                msg = 'zh_CN';
                break;
            default:
                msg = 'en_US';
        }
        return Languages[msg]
    }
    public  setLanguage(languageType: string){
        window.localStorage.setItem("greypanel-react-intl-lan", languageType)
    }
    private getLanguage(){
        return window.localStorage.getItem("greypanel-react-intl-lan") || window.navigator.language;
    }
}

export default new Language();