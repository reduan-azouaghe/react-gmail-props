import "./style.css";

function EmailViewer({ emailToView, setEmailToView }) {
  return (
    <div>
      <div>
        <button>Reply</button>
        <button>Archive</button>
        <button>Trash</button>
      </div>

      <div>
        <div>1 of 25</div>
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>

      <button onClick={() => setEmailToView(null)}>Back</button>

      <div>sender: {emailToView.sender}</div>

      <div>title: {emailToView.title}</div>

      <div>other: {JSON.stringify(emailToView)}</div>
    </div>
  );
}

export default EmailViewer;
