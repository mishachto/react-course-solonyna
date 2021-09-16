import React from 'react';
import { Header, Footer, Filters, Todos } from '@containers/'

interface IComponentProps {
    children?: React.ReactNode
}

const TodosContainer = (props: IComponentProps) => {
    return  <div>
        <Header />
        <Todos />
        <Filters />
        <Footer />
    </div>
}

// class TodosContainer extends React.Component<IComponentProps> {
//     render () {
//         return <div>
//         <Header />
//         <Todos />
//         <Filters />
//         <Footer />
//     </div>
//     }
// }

export default TodosContainer;

