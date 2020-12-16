import ReactGA from "react-ga";

const trackingId = "UA-97488593-2"; // Replace with your Google Analytics tracking ID

ReactGA.initialize(trackingId);

export { ReactGA as analytics };
