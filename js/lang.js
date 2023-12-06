
class Language {
    
    constructor(langP) {
        this.lang = langP;
    }

    setLang(langP) {
        this.lang = langP;
    }

    getLang() {
        return this.lang;
    }

    setCompany(companyP) {
        this.company = companyP;
    }

    
}

var myInstance = new Language("es");
console.log(myInstance.getLang());