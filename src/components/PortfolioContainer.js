import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Wrapper from './Wrapper';
import friends from '../friends.json';


function PortfolioContainer() {
  // Using useState, set the default value for currentPage to 'About'
  const [currentPage, handlePageChange] = useState('About Me');
  const [friendsList, setFriendsList] = useState(friends);
  const removeFriend = id => {
    const newList = friendsList.filter(friend => friend.id !== id);
    setFriendsList(newList);
  };
  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return (
          <Wrapper>
            <h1 className="title">Friends List</h1>
            {/* Map through 'friendsList' and render a 'FriendCard' for each friend */}
            {/* Pass in the 'removeFriend()' method and each property of a friend */}
            {friendsList.map(friend => (
              <Portfolio
                removeFriend={removeFriend}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                occupation={friend.occupation}
                location={friend.location}
              />
            ))}
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
