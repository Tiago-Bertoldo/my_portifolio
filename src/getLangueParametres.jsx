export const getLangue = () => {
    const userLocale = navigator?.languages?.length ? navigator.languages[0] : navigator.language;
    if (userLocale === "fr-FR"){
        return 1
    }else if ( userLocale === "pt-BR" && userLocale === "pt-pt"){
        return 2
    }else {
        return 3
    }

}

export default getLangue
