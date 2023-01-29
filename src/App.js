import React from "react";
// import {WeatherProvider} from "./FetchApi.jsx";
import {SearchProvider} from "./Search.js";
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

        
            {/* <WidgetPage4 />  */}


        </>
    )

}
