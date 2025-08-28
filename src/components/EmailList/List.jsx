import "./style.css";
import ListItem from "./ListItem";

function List({ filteredEmails, setEmails, setEmailToView, emailToView }) {
  const handleOpen = (e) => {
    if (emailToView == null) {
      setEmailToView(e);
    } else {
      setEmailToView(null);
    }

    console.log(emailToView);
  };

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <ListItem
            emailToDisplay={email}
            key={index}
            index={index}
            setEmails={setEmails}
            onClick={() => handleOpen(email)}
          />
        ))}
      </ul>
    </main>
  );
}

export default List;
