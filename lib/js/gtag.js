export const GA_MEASUREMENT_ID = "G-ZQ1FTYHH7G"

export const pageview = (url) => {
    window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
    })
}