import React, { useState, useContext, createContext } from "react"

const ConsultationsContext = createContext()

export const ConsultationsProvider = ({ children }) => {
  const [consultations, setConsultations] = useState([])

  return (
    <ConsultationsContext.Provider value={{ consultations, setConsultations }}>
      {children}
    </ConsultationsContext.Provider>
  );
};

export const useConsultations = () => useContext(ConsultationsContext)

const GenderContext = createContext()

export const GenderProvider = ({ children }) => {
  const [selectedGender, setSelectedGender] = useState(null)

  return (
    < GenderContext.Provider value={{ selectedGender, setSelectedGender}}>
      {children}
    </ GenderContext.Provider>
  );
};

export const useGender = () => useContext(GenderContext)

