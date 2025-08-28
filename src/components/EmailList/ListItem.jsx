import "./style.css";

function ListItem({ emailToDisplay, index, setEmails, onClick }) {
  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  return (
    <li
      key={index}
      onClick={onClick}
      className={`email ${emailToDisplay.read ? "read" : "unread"}`}
    >
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={emailToDisplay.read}
          onChange={() => toggleRead(emailToDisplay)}
        />
      </div>

      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={emailToDisplay.starred}
          onChange={() => toggleStar(emailToDisplay)}
        />
      </div>

      <div className="sender">{emailToDisplay.sender}</div>

      <div className="title">{emailToDisplay.title}</div>
    </li>
  );
}

export default ListItem;
