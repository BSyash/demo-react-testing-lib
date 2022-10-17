import React, { useState } from "react";
import ShareModal from "../../Components/ShareModal/ShareModal";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";

const Home = () => {
  const [employeeModal, setEmployeeModal] = useState(false);
  const employeeModalToggle = () => setEmployeeModal(!employeeModal);
  return (
    <div className="home">
      <button onClick={()=>employeeModalToggle()}>ADD</button>
      <ShareModal
        open={employeeModal}
        toggle={employeeModalToggle}
        modalHeader={"Add Employee"}
        modalBody={<RegistrationForm employeeModalToggle={employeeModalToggle} />}
        size="xl"
      />
    </div>
  );
};

export default Home;
