import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import List from "./components/EmailList/List";
import Header from "./components/EmailHeader/Header";
import LeftMenu from "./components/EmailLeftMenu/LeftMenu";
import EmailViewer from "./components/EmailViewer/EmailViewer";

const getReadEmails = (emails) => emails.filter((email) => !email.read);
const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [emailToView, setEmailToView] = useState(null);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");

  const handleSearch = (q) => {
    const query = q.trim().toLowerCase();

    setEmails(
      query
        ? initialEmails.filter((e) => e.title.toLowerCase().includes(query))
        : initialEmails
    );
  };

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <LeftMenu
        emails={emails}
        currentTab={currentTab}
        hideRead={hideRead}
        setCurrentTab={setCurrentTab}
        setHideRead={setHideRead}
        onClick={() => setEmailToView(null)}
      />
      {emailToView == null ? (
        <List
          filteredEmails={filteredEmails}
          setEmails={setEmails}
          setEmailToView={setEmailToView}
        />
      ) : (
        <EmailViewer
          emailToView={emailToView}
          setEmailToView={setEmailToView}
        />
      )}
    </div>
  );
}

export default App;
