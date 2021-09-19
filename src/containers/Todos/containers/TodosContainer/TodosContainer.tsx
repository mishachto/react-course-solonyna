import React from "react";
import {Header, Todos, Filter, Footer} from "@containers/"
import styles from './index.module.scss' 


interface IComponentProps {
    data?: string;
}



const TodosContainer = (props: IComponentProps) => {
    return <div className={styles.todosContainer}>
        {<Header />}
        {<Todos/>}
        {<Filter/>}
        {<Footer/>}

    </div>
}
export default TodosContainer;