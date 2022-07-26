import React from 'react'
import Header from './containers/header/Header';
import Main from './containers/main/Main';

const App = () => {
    return (
        <div className='app'>
            <div className='container'>
                <div className='wrapper'>
                    <Header />
                    <Main />

                </div>


            </div>

        </div>
    )
}

export default App