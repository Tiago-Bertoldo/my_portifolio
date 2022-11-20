export const getLangue = () => {
    const userLocale = navigator?.languages?.length ? navigator.languages[0] : navigator.language;

    let pt = 0
    let usa = 0
    let fr = 0

    if (userLocale === "fr-FR"){
        return fr = 1
    }else if ( userLocale === "pt-BR" && userLocale === "pt-pt"){
        return pt = 2
    }else {
        return usa = 3
    }

}
