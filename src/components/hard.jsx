import React from "react";
import BasicInfo from "./Medium";

const BasicInfoList = () => {
    const peoplesInfo = [

        {name: "Mae",
        age: "24",
        dateOfBirth: "12/04/1997",
        number: "555-555-5555",
        email: "email@gmail.com",
        address: "5555 Someplace Rd",
        city: "Charlotte",
        state: "NC"},

        {name: "Jesse",
        age: "29",
        dateOfBirth: "05/09/1993",
        number: "555-555-5555",
        email: "email@gmail.com",
        address: "5555 Someplace Rd",
        city: "Charlotte",
        state: "NC"},

        {name: "Sean",
        age: "57",
        dateOfBirth: "07/01/1972",
        number: "555-555-5555",
        email: "email@gmail.com",
        address: "1234 Faraway ln",
        city: "Georgia",
        state: "GA"},

        {name: "Garelt",
        age: "103",
        dateOfBirth: "07/07/-1500",
        number: "555-555-5555",
        email: "email@gmail.com",
        address: "123 Rivia Rd",
        city: "Rivia",
        state: "RA"},

        {name: "Ciri",
        age: "24",
        dateOfBirth: "06/05/-1998",
        number: "555-555-5555",
        email: "email@gmail.com",
        address: "445 Rivia Rd",
        city: "Rivia",
        state: "RA"},

        {name: "Yennifer",
        age: "55",
        dateOfBirth: "05/05/-1775",
        number: "555-555-5555",
        email: "email@gmail.com",
        address: "239 Washup ln",
        city: "Vangaburg",
        state: "VB"}
    ]; 

    return (
        <div className="peopleList">
            {peoplesInfo.map((info) => (
                <BasicInfo name={info.name} age={info.age} dateOfBirth={info.dateOfBirth} number={info.number} email={info.email} address={info.address} city={info.city} state={info.state} />
            ))}
        </div>
    );

};

export default BasicInfoList;