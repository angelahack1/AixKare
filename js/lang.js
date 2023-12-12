
class LanguageContainer {
    
    constructor(langP) {
        this.lang = langP;
        this._companyAcronimCapitalized = "AIXKARE";
        this._companyAcronim = "AiXKare";
        this._companyName = "Artificial Intelligence eXtended for K(c)are";
        this._menuLangSpaSpa = "Español";
        this._menuLangSpaEng = "Inglés";
        this._menuLangSpaPor = "Portugués";
        this._menuLangEngSpa = "Spanish";
        this._menuLangEngEng = "English";
        this._menuLangEngPor = "Portuguese";
        this._menuLangPorSpa = "Espanhol";
        this._menuLangPorEng = "Inglês";
        this._menuLangPorPor = "Português";
        this._textMainPageEng = "Main page";
        this._textMainPageSpa = "Página principal";
        this._textMainPagePor = "Página principal";
        this._textAboutPageEng = "About AiXKare";
        this._textAboutPageSpa = "Acerca de AiXKare";
        this._textAboutPagePor = "Sobre AiXKare";
        this._textProductsPageEng = "Products and Services";
        this._textProductsPageSpa = "Productos y Servicios";
        this._textProductsPagePor = "Produtos e serviços";
        this._textContactPageEng = "Contact Us";
        this._textContactPageSpa = "Contáctenos";
        this._textContactPagePor = "Fale connosco";
        this._textBannerAIEng = "AI eXtended for Healthcare.";
        this._textBannerAISpa = "IA eXtendida para la Salud.";
        this._textBannerAIPor = "IA estendida para saúde.";
        this._textBannerContentAIEng = "Our products leverage AI to offer tailored services according to your needs.";
        this._textBannerContentAISpa = "Nuestros productos aprovechan la IA para ofrecer servicios personalizados según tus necesidades.";
        this._textBannerContentAIPor = "Nossos produtos aproveitam a IA para oferecer serviços personalizados de acordo com suas necessidades.";
        this._textBannerComEng = "AI eXtended communications";
        this._textBannerComSpa = "Comuncaciones extendidas con IA";
        this._textBannerComPor = "Comunicações estendidas com IA";
        this._textBannerContentComEng = "Our network communicates using the most advanced technology offering low latency and secure channels.";
        this._textBannerContentComSpa = "Nuestra red se comunica utilizando la tecnología más avanzada ofreciendo baja latencia y canales seguros.";
        this._textBannerContentComPor = "Nossa rede se comunica utilizando a tecnologia mais avançada, oferecendo baixa latência e canais seguros.";
        this._textBannerSecEng = "AI eXtended cyber-secure technologies";
        this._textBannerSecSpa = "Tecnologías cyber-seguras eXtendidas con IA";
        this._textBannerSecPor = "Tecnologias ciberseguras ampliadas com IA";
        this._textBannerContentSecEng = "The information over all the communications channels travels securely using the most advanced cyber-security infrastructure.";
        this._textBannerContentSecSpa = "La información por todos los canales de comunicación viaja de forma segura utilizando la infraestructura de ciberseguridad más avanzada.";
        this._textBannerContentSecPor = "As informações através de todos os canais de comunicação trafegam com segurança utilizando a mais avançada infraestrutura de segurança cibernética.";
        this._textSpanCarouselPrevEng = "Previous";
        this._textSpanCarouselPrevSpa = "Anterior";
        this._textSpanCarouselPrevPor = "Anterior";
        this._textSpanCarouselNextEng = "Next";
        this._textSpanCarouselNextSpa = "Siguiente"
        this._textSpanCarouselNextPor = "Próximo";
        this._textRightsEng = "All rights reserved &copy; AixKare 2023";
        this._textRightsSpa = "Todos los derechos reservados &copy; AixKare 2023";
        this._textRightsPor = "Todos os direitos reservados &copy; AixKare 2023";
        this._textAnchorExploreEng = "Explore our technologies";
        this._textAnchorExploreSpa = "Explora nuestras tecnologías";
        this._textAnchorExplorePor = "Explore nossas tecnologias";
        this._textAnchorLearnComEng = "Learn More...";
        this._textAnchorLearnComSpa = "Saber más...";
        this._textAnchorLearnComPor = "Saber mais...";
        this._textAnchorLearnSecEng = "Learn More...";
        this._textAnchorLearnSecSpa = "Saber más...";
        this._textAnchorLearnSecPor = "Saber mais...";
        this._textHeaderConstructionEng = "This site is under construction";
        this._textHeaderConstructionSpa = "Este sitio esta en construcción";
        this._textHeaderConstructionPor = "Este site está em construção";
        this._textHeaderWorkingEng = "We are working very, very hard...";
        this._textHeaderWorkingSpa = "Estamos trabajando muy, muy duro...";
        this._textHeaderWorkingPor = "Estamos trabalhando muito, muito duro...";
        this._textParagraphWorkingEng = "In AIXKARE we are working hard to complete our start up process, in order to provide you with our services, ASAP.";
        this._textParagraphWorkingSpa = "En AIXKARE estamos trabajando duro, completando nuestro proceso de establecimiento, para poder ofrecerte nuestros servicios, tan pronto como sea posible.";
        this._textParagraphWorkingPor = "Na AIXKARE estamos a trabalhar arduamente, concluindo o nosso processo de constituição, para podermos oferecer-lhe os nossos serviços o mais rapidamente possível.";
        this._textHeaderAboutEng = "Artificial Intelligence eXtended for K(c)are (AIXKARE)";
        this._textHeaderAboutSpa = "Artificial Intelligence eXtended for K(c)are (AIXKARE)";
        this._textHeaderAboutPor = "Artificial Intelligence eXtended for K(c)are (AIXKARE)";
        this._textSubHeaderAboutEng = "About us";
        this._textSubHeaderAboutSpa = "Acerca de nosotros";
        this._textSubHeaderAboutPor = "Sobre nós";
        this._textParagraphAboutEng = "Company founded in 2019, whose mission is to provide well-being to our customers through technological products focused on Healthcare.";
        this._textParagraphAboutSpa = "Empresa fundada en 2019, cuya misión es brindar bienestar a nuestros clientes a través de productos tecnológicos enfocados al Cuidado de la Salud.";
        this._textParagraphAboutPor = "Empresa fundada em 2019, que tem como missão proporcionar bem-estar aos nossos clientes através de produtos tecnológicos focados em Healthcare.";
        this._textParagraphInnerAboutEng = "We help you to be safe, and/or take care of those who matter most to you.";
        this._textParagraphInnerAboutSpa = "Te ayudamos a estar seguro y/o cuidar a quienes más te importan.";
        this._textParagraphInnerAboutPor = "Ajudamos você a estar seguro e/ou a cuidar daqueles que são mais importantes para você.";
        this._textSpanHeadingContactEng = "Wanna know more?...";
        this._textSpanHeadingContactSpa = "¿Quieres saber más?...";
        this._textSpanHeadingContactPor = "Você quer saber mais?...";
        this._textSpanSubHeadingContactEng = "Leave a comment below, we are at your service.";
        this._textSpanSubHeadingContactSpa = "Dejanos un comentario en la parte de abajo, estamos para servirte.";
        this._textSpanSubHeadingContactPor = "Deixe um comentário abaixo, estamos ao seu dispor.";
        this._textLabelEmailEng = "Email:";
        this._textLabelEmailSpa = "Correo electrónico:";
        this._textLabelEmailPor = "Correio eletrônico:";
        this._placeholderEmailEng = "name@domain.com";
        this._placeholderEmailSpa = "nombre@dominio.com";
        this._placeholderEmailPor = "nome@dominio.com";
        this._textLabelTextEng = "Comment";
        this._textLabelTextSpa = "Comentario:";
        this._textLabelTextPor = "Comente:";
        this._placeholderTextEng = "My comment is about...";
        this._placeholderTextSpa = "Mi comentario es acerca de...";
        this._placeholderTextPor = "Meu comentário é sobre...";
        this._textLabelToSendEng = "Button to send:";
        this._textLabelToSendSpa = "Botón para enviar:";
        this._textLabelToSendPor = "Botão enviar:";
        this._textButtonSendEng = "Send";
        this._textButtonSendSpa = "Enviar";
        this._textButtonSendPor = "Enviar";
        this._textSpanThanksEng = "Thanks!";
        this._textSpanThanksSpa = "Gracias!";
        this._textSpanThanksPor = "Obrigado!";
        this._textSpanContentThanksEng = "We have received your comments.";
        this._textSpanContentThanksSpa = "Hemos recibido tus comentarios.";
        this._textSpanContentThanksPor = "Recebemos seus comentários.";
        this._textBack2MainPageEng = "Back to main page...";
        this._textBack2MainPageSpa = "Regresar a página principal...";
        this._textBack2MainPagePor = "Retornar à página principal...";

        console.log("LanguageContainer Object setted!, actual Lang: <"+langP+">");
    }

    setLang(langP) {
        this.lang = langP;
    }

    getLang() {
        return this.lang;
    }

    getCompanyAcronim() {
        return this.company;
    }    

    getEnglishLang() {
        switch(this.lang) {
            case 'es':
                return this._menuLangSpaEng;
            case 'en':
                return this._menuLangEngEng;
            case 'pt':
                return this._menuLangPorEng;
        }
    }

    getSpanishLang() {
        switch(this.lang) {
            case 'es':
                return this._menuLangSpaSpa;
            case 'en':
                return this._menuLangEngSpa;
            case 'pt':
                return this._menuLangPorSpa;
        }
    }

    getPortugueseLang() {
        switch(this.lang) {
            case 'es':
                return this._menuLangSpaPor;
            case 'en':
                return this._menuLangEngPor;
            case 'pt':
                return this._menuLangPorPor;
        }
    }

    getTextareaWrongContent() {
        switch(this.lang) {
            case 'es':
                return "Campo de texto vacio: Porfavor introduzca el contenido de su consulta/duda/comentario...";
            case 'en':
                return "Field text empty: Please introduce valid content in comment area...";
            case 'pt':
                return "Texto do campo vazio: Por favor, introduza conteúdo válido na área de comentários...";
        }
    }

    getEmailEmptyContent() {
        switch(this.lang) {
            case 'es':
                return "Campo de correo vacio: Porfavor introduzca su correo electrónico en el campo de correo...";
            case 'en':
                return "Field email empty: Please introduce a valid email address in email field...";
            case 'pt':
                return "Campo email vazio: Por favor, insira um endereço de email válido no campo email...";
        }
    }

    getEmailWrongContent() {
        switch(this.lang) {
            case 'es':
                return "Campo de correo incorrecto: Porfavor introduzca correctamente su correo electrónico...";
            case 'en':
                return "Field email invalid: Please introduce a valid email address in email field...";
            case 'pt':
                return "Campo email inválido: Por favor, insira um endereço de email válido no campo email...";
        }

    }

    changeContentLang(idP, content) {
        var jElement = $("#"+idP);
        if( (typeof jElement != 'undefined') && (jElement != null) ) {
            $("#"+idP).html(content);
            return true;
        } else {
            console.error("Error: Element with id "+idP+" not found");
            return false;
        }
    }

    changeInnerTextToObject(object, content) {
        if(typeof object != 'undefined' && (object != null) ) {
            object.innerText = content;
            console.log("Object: "+object+", updated to new text content");
        } else {
            console.log("Object not defined, setting innerText: <"+object+">");
        }
    }

    changeInnerHtmlToObject(object, content) {
        if(typeof object != 'undefined' && (object != null) ) {
            object.innerHTML = content;
            console.log("Object: "+object+", updated to new html content");
        } else {
            console.log("Object not defined, setting innerHtml: <"+object+">");
        }
    }

    changePlaceholderToObject(object, content) {
        if(typeof object != 'undefined' && (object != null) ) {
            object.setAttribute("placeholder", content);
            console.log("Object: "+object+", updated to new placeholder content");
        } else {
            console.log("Object not defined, setting placeholder: <"+object+">");
        }
    }

    changeHrefToAnchor(object, href) {
        if(typeof object != 'undefined' && (object != null) ) {
            object.setAttribute("href", href);
            console.log("Object: "+object+", updated to new href content");
        } else {
            console.log("Object not defined, setting href: <"+object+">");
        }
    }

    changeActionToForm(object, action) {
        if(typeof object != 'undefined' && (object != null) ) {
            object.setAttribute("action", action);
            console.log("Object: "+object+", updated to new action trigger");
        } else {
            console.log("Object not defined, setting action: <"+object+">");
        }
    }

    getActualLangOnActualLang() {
        switch(this.lang) {
            case 'en':
                return this._menuLangEngEng;
            case 'es':
                return this._menuLangSpaSpa;
            case 'pt':
                return this._menuLangPorPor;
        }
    }



    refactorPageLanguage(langP) {
        if(langP != "en" && langP != "es" && langP != "pt") {
            console.error("Language Container, Invalid language setting: <"+langP+">");
            return false;
        }
        this.setLang(langP);
        var lang = $("html").attr("lang", langP);

        this.changeContentLang("spanEng", this.getEnglishLang());
        this.changeContentLang("spanSpa", this.getSpanishLang());
        this.changeContentLang("spanPor", this.getPortugueseLang());

        this.changeContentLang("span-flag", this.getActualLangOnActualLang());
        switch(this.lang) {
            case 'en':
                $("#i-flag").attr("class","flag-usa flag m-0");
                this.changeInnerTextToObject($("#home")[0],this._textMainPageEng);
                this.changeInnerTextToObject($("#about")[0],this._textAboutPageEng);
                this.changeInnerTextToObject($("#products")[0],this._textProductsPageEng);
                this.changeInnerTextToObject($("#contact")[0],this._textContactPageEng);
                this.changeInnerTextToObject($("#bannerAI")[0],this._textBannerAIEng);
                this.changeInnerTextToObject($("#bannerContentAI")[0],this._textBannerContentAIEng);
                this.changeInnerTextToObject($("#bannerCom")[0],this._textBannerComEng);
                this.changeInnerTextToObject($("#bannerContentCom")[0],this._textBannerContentComEng);
                this.changeInnerTextToObject($("#bannerSec")[0],this._textBannerSecEng);
                this.changeInnerTextToObject($("#bannerContentSec")[0],this._textBannerContentSecEng);
                this.changeInnerTextToObject($("#spanCarouselPrev")[0],this._textSpanCarouselPrevEng);
                this.changeInnerTextToObject($("#spanCarouselNext")[0],this._textSpanCarouselNextEng);
                this.changeInnerHtmlToObject($("#rights")[0],this._textRightsEng);
                this.changeInnerTextToObject($("#anchorExplore")[0],this._textAnchorExploreEng);
                this.changeInnerTextToObject($("#anchorLearnCom")[0],this._textAnchorLearnComEng);
                this.changeInnerTextToObject($("#anchorLearnSec")[0],this._textAnchorLearnSecEng);
                this.changeInnerTextToObject($("#construction-header")[0],this._textHeaderConstructionEng);
                this.changeInnerTextToObject($("#working-header")[0],this._textHeaderWorkingEng);
                this.changeInnerTextToObject($("#working-text")[0],this._textParagraphWorkingEng);
                this.changeInnerTextToObject($("#spanHeaderAbout")[0], this._textHeaderAboutEng);
                this.changeInnerTextToObject($("#spanSubHeaderAbout")[0], this._textSubHeaderAboutEng);
                this.changeInnerTextToObject($("#paragraphAbout")[0], this._textParagraphAboutEng);
                this.changeInnerTextToObject($("#paragraphInnerAbout")[0], this._textParagraphInnerAboutEng);
                this.changeInnerTextToObject($("#spanHeadingContact")[0], this._textSpanHeadingContactEng);
                this.changeInnerTextToObject($("#spanSubHeadingContact")[0], this._textSpanSubHeadingContactEng);
                this.changeInnerTextToObject($("#labelEmail")[0], this._textLabelEmailEng);
                this.changeInnerTextToObject($("#labelText")[0], this._textLabelTextEng);
                this.changeInnerTextToObject($("#labelSend")[0], this._textButtonSendEng);
                this.changePlaceholderToObject($("#inputEmail")[0], this._placeholderEmailEng);
                this.changePlaceholderToObject($("#textText")[0], this._placeholderTextEng);
                this.changeInnerTextToObject($("#buttonSend")[0], this._textButtonSendEng);
                this.changeHrefToAnchor($("#home")[0], "index.html?lang=en");
                this.changeHrefToAnchor($("#about")[0], "about.html?lang=en");
                this.changeHrefToAnchor($("#products")[0], "prodandserv.html?lang=en");
                this.changeHrefToAnchor($("#contact")[0], "contact.html?lang=en");
                this.changeInnerTextToObject($("#spanHeaderAbout")[0], this._textSpanThanksEng);
                this.changeInnerTextToObject($("#spanContentThanks")[0], this._textSpanContentThanksEng);
                this.changeInnerTextToObject($("#back2MainPage")[0], this._textBack2MainPageEng);
                this.changeHrefToAnchor($("#back2MainPage")[0], "index.html?lang=en");
                this.changeHrefToAnchor($("#anchor-logo")[0], "index.html?lang=en");
                this.changeActionToForm($("#contactForm")[0], "https://j6wrsf4g5k.execute-api.us-east-1.amazonaws.com/interaction/interaction?lang=en");
            break;
            case 'es':
                $("#i-flag").attr("class","flag-mexico flag m-0");
                this.changeInnerTextToObject($("#home")[0],this._textMainPageSpa);
                this.changeInnerTextToObject($("#about")[0],this._textAboutPageSpa);
                this.changeInnerTextToObject($("#products")[0],this._textProductsPageSpa);
                this.changeInnerTextToObject($("#contact")[0],this._textContactPageSpa);
                this.changeInnerTextToObject($("#bannerAI")[0],this._textBannerAISpa);
                this.changeInnerTextToObject($("#bannerContentAI")[0],this._textBannerContentAISpa);
                this.changeInnerTextToObject($("#bannerCom")[0],this._textBannerComSpa);
                this.changeInnerTextToObject($("#bannerContentCom")[0],this._textBannerContentComSpa);
                this.changeInnerTextToObject($("#bannerSec")[0],this._textBannerSecSpa);
                this.changeInnerTextToObject($("#bannerContentSec")[0],this._textBannerContentSecSpa);
                this.changeInnerTextToObject($("#spanCarouselPrev")[0],this._textSpanCarouselPrevSpa);
                this.changeInnerTextToObject($("#spanCarouselNext")[0],this._textSpanCarouselNextSpa);
                this.changeInnerHtmlToObject($("#rights")[0],this._textRightsSpa);
                this.changeInnerTextToObject($("#anchorExplore")[0],this._textAnchorExploreSpa);
                this.changeInnerTextToObject($("#anchorLearnCom")[0],this._textAnchorLearnComSpa);
                this.changeInnerTextToObject($("#anchorLearnSec")[0],this._textAnchorLearnSecSpa);
                this.changeInnerTextToObject($("#construction-header")[0],this._textHeaderConstructionSpa);
                this.changeInnerTextToObject($("#working-header")[0],this._textHeaderWorkingSpa);
                this.changeInnerTextToObject($("#working-text")[0],this._textParagraphWorkingSpa);
                this.changeInnerTextToObject($("#spanHeaderAbout")[0], this._textHeaderAboutSpa);
                this.changeInnerTextToObject($("#spanSubHeaderAbout")[0], this._textSubHeaderAboutSpa);
                this.changeInnerTextToObject($("#paragraphAbout")[0], this._textParagraphAboutSpa);
                this.changeInnerTextToObject($("#paragraphInnerAbout")[0], this._textParagraphInnerAboutSpa);
                this.changeInnerTextToObject($("#spanHeadingContact")[0], this._textSpanHeadingContactSpa);
                this.changeInnerTextToObject($("#spanSubHeadingContact")[0], this._textSpanSubHeadingContactSpa);
                this.changeInnerTextToObject($("#labelEmail")[0], this._textLabelEmailSpa);
                this.changeInnerTextToObject($("#labelText")[0], this._textLabelTextSpa);
                this.changeInnerTextToObject($("#labelSend")[0], this._textButtonSendSpa);
                this.changePlaceholderToObject($("#inputEmail")[0], this._placeholderEmailSpa);
                this.changePlaceholderToObject($("#textText")[0], this._placeholderTextSpa);
                this.changeInnerTextToObject($("#buttonSend")[0], this._textButtonSendSpa);
                this.changeHrefToAnchor($("#home")[0], "index.html?lang=es");
                this.changeHrefToAnchor($("#about")[0], "about.html?lang=es");
                this.changeHrefToAnchor($("#products")[0], "prodandserv.html?lang=es");
                this.changeHrefToAnchor($("#contact")[0], "contact.html?lang=es");
                this.changeInnerTextToObject($("#spanHeaderAbout")[0], this._textSpanThanksSpa);
                this.changeInnerTextToObject($("#spanContentThanks")[0], this._textSpanContentThanksSpa);
                this.changeInnerTextToObject($("#back2MainPage")[0], this._textBack2MainPageSpa);
                this.changeHrefToAnchor($("#back2MainPage")[0], "index.html?lang=es");
                this.changeHrefToAnchor($("#anchor-logo")[0], "index.html?lang=es");
                this.changeActionToForm($("#contactForm")[0], "https://j6wrsf4g5k.execute-api.us-east-1.amazonaws.com/interaction/interaction?lang=es");
            break;
            case 'pt':
                $("#i-flag").attr("class","flag-brasil flag m-0");
                this.changeInnerTextToObject($("#home")[0],this._textMainPagePor);
                this.changeInnerTextToObject($("#about")[0],this._textAboutPagePor);
                this.changeInnerTextToObject($("#products")[0],this._textProductsPagePor);
                this.changeInnerTextToObject($("#contact")[0],this._textContactPagePor);
                this.changeInnerTextToObject($("#bannerAI")[0],this._textBannerAIPor);
                this.changeInnerTextToObject($("#bannerContentAI")[0],this._textBannerContentAIPor);
                this.changeInnerTextToObject($("#bannerCom")[0],this._textBannerComPor);
                this.changeInnerTextToObject($("#bannerContentCom")[0],this._textBannerContentComPor);
                this.changeInnerTextToObject($("#bannerSec")[0],this._textBannerSecPor);
                this.changeInnerTextToObject($("#bannerContentSec")[0],this._textBannerContentSecPor);
                this.changeInnerTextToObject($("#spanCarouselPrev")[0],this._textSpanCarouselPrevPor);
                this.changeInnerTextToObject($("#spanCarouselNext")[0],this._textSpanCarouselNextPor);
                this.changeInnerHtmlToObject($("#rights")[0],this._textRightsPor);
                this.changeInnerTextToObject($("#anchorExplore")[0],this._textAnchorExplorePor);
                this.changeInnerTextToObject($("#anchorLearnCom")[0],this._textAnchorLearnComPor);
                this.changeInnerTextToObject($("#anchorLearnSec")[0],this._textAnchorLearnSecPor);
                this.changeInnerTextToObject($("#construction-header")[0],this._textHeaderConstructionPor);
                this.changeInnerTextToObject($("#working-header")[0],this._textHeaderWorkingPor);
                this.changeInnerTextToObject($("#working-text")[0],this._textParagraphWorkingPor);
                this.changeInnerTextToObject($("#spanHeaderAbout")[0], this._textHeaderAboutPor);
                this.changeInnerTextToObject($("#spanSubHeaderAbout")[0], this._textSubHeaderAboutPor);
                this.changeInnerTextToObject($("#paragraphAbout")[0], this._textParagraphAboutPor);
                this.changeInnerTextToObject($("#paragraphInnerAbout")[0], this._textParagraphInnerAboutPor);
                this.changeInnerTextToObject($("#spanHeadingContact")[0], this._textSpanHeadingContactPor);
                this.changeInnerTextToObject($("#spanSubHeadingContact")[0], this._textSpanSubHeadingContactPor);
                this.changeInnerTextToObject($("#labelEmail")[0], this._textLabelEmailPor);
                this.changeInnerTextToObject($("#labelText")[0], this._textLabelTextPor);
                this.changeInnerTextToObject($("#labelSend")[0], this._textButtonSendPor);
                this.changePlaceholderToObject($("#inputEmail")[0], this._placeholderEmailPor);
                this.changePlaceholderToObject($("#textText")[0], this._placeholderTextPor);
                this.changeInnerTextToObject($("#buttonSend")[0], this._textButtonSendPor);
                this.changeHrefToAnchor($("#home")[0], "index.html?lang=pt");
                this.changeHrefToAnchor($("#about")[0], "about.html?lang=pt");
                this.changeHrefToAnchor($("#products")[0], "prodandserv.html?lang=pt");
                this.changeHrefToAnchor($("#contact")[0], "contact.html?lang=pt");
                this.changeInnerTextToObject($("#spanHeaderAbout")[0], this._textSpanThanksPor);
                this.changeInnerTextToObject($("#spanContentThanks")[0], this._textSpanContentThanksPor);
                this.changeInnerTextToObject($("#back2MainPage")[0], this._textBack2MainPagePor);
                this.changeHrefToAnchor($("#back2MainPage")[0], "index.html?lang=pt");
                this.changeHrefToAnchor($("#anchor-logo")[0], "index.html?lang=pt");
                this.changeActionToForm($("#contactForm")[0], "https://j6wrsf4g5k.execute-api.us-east-1.amazonaws.com/interaction/interaction?lang=pt");
            break;
        }
        return true;
    }
}

$(function() {
    var lang = 'en';
    if(typeof _lang != 'undefined' && (_lang != null) && (_lang.length > 0) ) {
        if( (_lang === 'en') || (_lang === 'es') || (_lang === 'pt') ) {
            lang = _lang;
        } else {
            console.error("Invalid lang specified on GET parameters: "+lang);
        }
    } else {
        console.log("Lang not specified on GET parameters.");
    }

    _langContainer = new LanguageContainer(lang);

    $(document).ready(function() {
        _langContainer.refactorPageLanguage(_langContainer.getLang());
    });
});
