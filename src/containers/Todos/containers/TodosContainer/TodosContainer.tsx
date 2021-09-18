import React from "react";
import {Header, Toodos} from "../../"


interface IComponentProps {
    data: string;
}



const component = (props: IComponentProps) => {
    return <div>
        {<Header />}
        {<Toodos/>}
        {/* {<Filter/>} */}
        {/* {<Footer/>} */}

    </div>
}
export default component;