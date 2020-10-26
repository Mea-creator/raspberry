import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
//import StreamDelete from './streams/StreamDelete';
//import StreamEdit from './streams/StreamEdit';
//import StreamList from './streams/StreamList';
//import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
              <div>
              <Header />
                <Route path="/contact" exact component={StreamCreate} />
                </div>
                <br></br>
                <br></br>
                <br></br>
            <div className="ui segment">
                <p><strong>“Flow state”  “The mental state in which a person performing some activity is fully immersed in a feeling of energized focus, full involvement, and enjoyment in the process”</strong></p>
              </div> <div className="ui segment">  <p>Or in other words, finding the perfect balance between your skill set and the challenge at hand. To find your inspiration and what you were put on this earth to accomplish.</p>
                </div> <div className="ui segment"> <p>My passion? Determining what every person’s flow state is and matching this resource supply with a possible employer.</p>
            </div>
            </BrowserRouter>
        </div>
    );
};

export default App;

