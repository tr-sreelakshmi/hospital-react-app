import React from "react";
import "../Department/Department.css";
import { Link } from "react-router-dom";

function Department() {
  return (
    <div className="contain">
      <div className="department">
<div className="heading">
          <h1> Department</h1>
  
</div>       
 <div className="depart-wrapper">

          <Link to="/Gynaecology-obstetrics">
            <div className="box">
              <img
                src="https://media.istockphoto.com/id/1377499260/photo/shot-of-a-doctor-during-a-consultation-with-a-pregnant-patient-in-a-clinic.jpg?s=612x612&w=0&k=20&c=9JzwYnEKINZBtKZ9z_KIcqmnwZltDQFrA66BZGL2JBQ="
                alt=""
                height="300px"
                width="300px"
              />
                <h3>GYNECOLOGY & OBSTETRICS </h3>
            </div>
            </Link>
            <Link to="/pediatrics">
            <div className="box">
              <img
                src="https://img.freepik.com/premium-photo/pediatrician-is-taking-care-baby-hospital-little-girl-is-being-examine-by-doctor-by-stethoscope-health-care-insurance-help-concept_663268-954.jpg"
                alt=""
                height="300px"
                width="300px"/>
                <h3>PEDIATRICS </h3>
            </div>
            </Link>

          <Link to="/wellness">
            <div className="box">
              <img
                src="https://st2.depositphotos.com/20363444/46651/i/450/depositphotos_466519326-stock-photo-happy-mature-woman-grey-hair.jpg"
                alt=""
                height="300px"
                width="300px"/>     
                <h3>WELLNESS</h3> 
            </div>
            </Link>

            <Link to="/general-Laparoscopic-surgery">
            <div className="box">
              <img
                src="https://sarafhospital.in/wp-content/uploads/2020/06/generalmedicine.jpg"
                alt=""
                height="300px"
                width="300px"/>
                <h3> LAPAROSCOPIC SURGERY</h3> 
            </div>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default Department;
