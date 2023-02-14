import { useState, createContext, useContext } from "react";
import { UserFullDetails } from "../UserFullDetails";
import { UserAlbums } from "../UserAlbums";
import { UserPosts } from "../UserPosts";
import { UserTodos } from "../UserTodos";

import "./TabsChanger.css";

const DataContext = createContext({});

function Tab({ id, children }) {
  const [activeTabID, setActiveTabID] = useContext(DataContext);

  return (
    <div>
      <div
        className={activeTabID === id ? "button-tab" : null}
        onClick={() => setActiveTabID(id)}
      >
        {children}
      </div>
    </div>
  );
}

function TabPanel({ whenActive, children }) {
  const [activeTabID] = useContext(DataContext);
  return <div>{activeTabID === whenActive ? children : null}</div>;
}

function TabSwitcher(props) {
  const [activeTabID, setActiveTabID] = useState(0);
  return (
    <DataContext.Provider value={[activeTabID, setActiveTabID]}>
      {props.children}
    </DataContext.Provider>
  );
}

export const TabsChanger = () => {
  return (
    <div className="tabs">
      <TabSwitcher>
        <div className="nav-tabs">
          <Tab id={0}>
            <button> User Details</button>
          </Tab>
          <Tab id={1}>
            <button> User Albums</button>
          </Tab>
          <Tab id={2}>
            <button> User Posts</button>
          </Tab>
          <Tab id={3}>
            <button> User Todos</button>
          </Tab>
        </div>
        <div className="nav-content">
          <TabPanel whenActive={0}>
            <UserFullDetails />
          </TabPanel>
          <TabPanel whenActive={1}>
            <UserAlbums />
          </TabPanel>
          <TabPanel whenActive={2}>
            <UserPosts />
          </TabPanel>
          <TabPanel whenActive={3}>
            <UserTodos />
          </TabPanel>
        </div>
      </TabSwitcher>
    </div>
  );
};
