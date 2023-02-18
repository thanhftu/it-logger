import { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

function AddTechModal() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || LastName === "") {
      M.toast({ html: "Please enter firstnam and lastname" });
    } else {
      console.log(firstName, LastName);
    }
  };
  return (
    <div id="add-tech-modal" className="modal" style={{ modalStyle }}>
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="message" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastname" className="active">
              LastName Name
            </label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
}

const modalStyle = {
  Width: "75%",
  Height: "75%",
  justifyContent: "center",
  alignItems: "center",
};

export default AddTechModal;