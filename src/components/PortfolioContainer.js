import React, { useState } from 'react';
import NavTabs from './NavTabs/NavTabs';
import About from './About';
import Resume from './Resume/index';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Wrapper from './Wrapper';
// import friends from '../friends.json';


function PortfolioContainer() {
  // Using useState, set the default value for currentPage to 'About'
  const [currentPage, handlePageChange] = useState('About Me');
  // const [friendsList] = useState(friends);

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return (
          <Wrapper>
            <h1 className="title">Portfolio</h1>
            <Portfolio />
            {/* {friendsList.map(friend => (
              <Portfolio
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                gitHub={friend.gitHub}
                app={friend.app}
              />
            ))} */}
          </Wrapper>
        );
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default PortfolioContainer;

// import React from 'react';
// import { useState } from 'react';
// import Header from "./components/Header"
// import About from "./components/About"
// import Project from "./components/Project"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
// import Resume from "./components/Resume"

// function App() {
//   const [currentPage, handlePageChange] = useState('');

//   const renderPage = () => {
//     switch (currentPage) {
//       case '/#about':
//         return <About />;
//       case '/#portfolio':
//         return <Project />;
//       case '/#contact':
//         return <Contact />;
//         case '/#resume':
//           return <Resume />;
//       default:
//         return <About />;
//     }
//   };

//   return (
//     <div>
//       <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
//       <main>
//         {renderPage(currentPage)}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
