import { TabsChanger } from "../TabsChanger/TabsChanger";

import "./userDetails.css";

export const UserDetails = () => {
  return (
    <div className="user-details">
      <h1 className="user-details__title">User Details</h1>
      <TabsChanger />
    </div>
  );
};
