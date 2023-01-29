import React from "react";
import {SearchProvider} from "./SearchContext";
import WidgetPage1 from "./WidgetPage1.jsx";
import WidgetPage2 from "./WidgetPage2.jsx";
// import WidgetPage4 from "./WidgetPage3.jsx";
// import MyCarousel from "./MyCarousel.jsx";

export default function App () {
    return (
        <>
            <SearchProvider>
                <WidgetPage1 />
                <WidgetPage2 />  
            </SearchProvider>
                {/* <MyCarousel />  */}
        </>
    )

}
