import ReactGA from "react-ga";

const trackingId = "UA-97488593-2"; // Replace with your Google Analytics tracking ID

ReactGA.initialize(trackingId);

const getPageURL = (): string => {
    return window.location.href;
};

const pageview = {
    pageview: () => {
        ReactGA.pageview(getPageURL());
    },
};

const analytics = { ...ReactGA, ...pageview };

export { analytics, getPageURL };
