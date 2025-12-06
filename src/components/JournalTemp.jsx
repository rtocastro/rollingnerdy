import React, { useState } from "react";

const CarAccidentRecoveryLog = () => {
  const [form, setForm] = useState({
    // Case Info
    claimNumber: "",
    attorneyNamePhone: "",
    adjusterNamePhone: "",
    vehicleStatus: "",

    // Daily Pain & Symptom Log
    painDate: "",
    painLevel: "",
    painLocations: "",
    painType: "",
    mobilityImpact: "",
    sleepQuality: "",
    medicationTaken: "",
    painNotes: "",

    // Medical Appointments
    medDate: "",
    medProviderLocation: "",
    medVisitType: "",
    medDiagnosisFindings: "",
    medNextAppointment: "",

    // Transportation Costs
    transDate: "",
    transRoute: "",
    transPurpose: "",
    transCost: "",
    transReceiptSaved: "",

    // Out-of-Pocket Expenses
    oopDate: "",
    oopItem: "",
    oopReason: "",
    oopCost: "",
    oopReceiptSaved: "",

    // Work / Income Impact
    workDate: "",
    workHoursMissed: "",
    workReason: "",
    workLostPay: "",
    workNotes: "",

    // Mental / Emotional Check-in
    mentalStressLevel: "",
    mentalMood: "",
    mentalTriggers: "",
    mentalHelped: "",

    // Important Contacts / Updates
    contactsAdjuster: "",
    contactsAttorney: "",
    contactsOther: "",

    // Photo / Evidence Notes
    photosTaken: "",
    photoFileLocations: "",
  });

  const [journalText, setJournalText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setCopied(false);
  };

  const handleGenerate = () => {
    const text = `
CAR ACCIDENT RECOVERY LOG

Claimant/Claim Number: ${form.claimNumber || "N/A"}
Attorney Name / Phone: ${form.attorneyNamePhone || "N/A"}
Insurance Adjuster / Phone: ${form.adjusterNamePhone || "N/A"}
Vehicle Status: ${form.vehicleStatus || "N/A"}

-------------------------------------------
DAILY PAIN & SYMPTOM LOG
-------------------------------------------
Date: ${form.painDate || "N/A"}
Pain Level (0–10): ${form.painLevel || "N/A"}
Locations: ${form.painLocations || "N/A"}
Type of Pain: ${form.painType || "N/A"}
Mobility Impact / Things Difficult to Do: ${form.mobilityImpact || "N/A"}
Sleep Quality: ${form.sleepQuality || "N/A"}
Medication Taken: ${form.medicationTaken || "N/A"}
Notes / Changes Since Yesterday: ${form.painNotes || "N/A"}

-------------------------------------------
MEDICAL APPOINTMENTS
-------------------------------------------
Date: ${form.medDate || "N/A"}
Provider / Location: ${form.medProviderLocation || "N/A"}
Visit Type (ER / PT / Chiropractor / X-ray / Follow-up): ${form.medVisitType || "N/A"}
Diagnosis / Findings: ${form.medDiagnosisFindings || "N/A"}
Next Appointment: ${form.medNextAppointment || "N/A"}

-------------------------------------------
TRANSPORTATION COSTS (Uber/Lyft/Taxi/Bus)
-------------------------------------------
Date: ${form.transDate || "N/A"}
Start → End Location: ${form.transRoute || "N/A"}
Purpose (Doctor / Work / Errands): ${form.transPurpose || "N/A"}
Cost: ${form.transCost || "N/A"}
Receipt Saved? (Yes/No): ${form.transReceiptSaved || "N/A"}

-------------------------------------------
OUT-OF-POCKET EXPENSES
-------------------------------------------
Date: ${form.oopDate || "N/A"}
Item Purchased: ${form.oopItem || "N/A"}
Reason: ${form.oopReason || "N/A"}
Cost: ${form.oopCost || "N/A"}
Receipt Saved? (Yes/No): ${form.oopReceiptSaved || "N/A"}

-------------------------------------------
WORK / INCOME IMPACT
-------------------------------------------
Date: ${form.workDate || "N/A"}
Hours Missed: ${form.workHoursMissed || "N/A"}
Reason: ${form.workReason || "N/A"}
Lost Pay?: ${form.workLostPay || "N/A"}
Notes: ${form.workNotes || "N/A"}

-------------------------------------------
MENTAL / EMOTIONAL CHECK-IN
-------------------------------------------
Stress Level (0–10): ${form.mentalStressLevel || "N/A"}
Mood: ${form.mentalMood || "N/A"}
Anything triggering today: ${form.mentalTriggers || "N/A"}
Things that helped / support used: ${form.mentalHelped || "N/A"}

-------------------------------------------
IMPORTANT CONTACTS / UPDATES
-------------------------------------------
Adjuster Calls / Messages: ${form.contactsAdjuster || "N/A"}
Attorney Notes: ${form.contactsAttorney || "N/A"}
Other Relevant Info: ${form.contactsOther || "N/A"}

-------------------------------------------
PHOTO / EVIDENCE NOTES
-------------------------------------------
Photos Taken Today? (Car / Injuries / Medical paperwork / Receipts): ${form.photosTaken || "N/A"}
File locations: ${form.photoFileLocations || "N/A"}
    `.trim();

    setJournalText(text);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!journalText) return;
    try {
      await navigator.clipboard.writeText(journalText);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopied(false);
    }
  };

  const sectionStyle = {
        border: "1px solid #ddd",
    borderRadius: "16px",
    padding: "16px",
    marginBottom: "16px",

  };

  const labelStyle = { display: "block", marginBottom: "4px", fontWeight: 500 };
  const inputStyle = {
    width: "90%",
    padding: "8px",
    marginBottom: "8px",
    borderRadius: "4px",
    border: "3px solid #ccc",
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "16px" }}>
        Car Accident Recovery Log
      </h1>

      {/* Case Info */}
      <div style={sectionStyle}>
        <h2>Case Information</h2>
        <label style={labelStyle}>
          Claimant/Claim Number:
          <input
            style={inputStyle}
            type="text"
            name="claimNumber"
            value={form.claimNumber}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Attorney Name / Phone:
          <input
            style={inputStyle}
            type="text"
            name="attorneyNamePhone"
            value={form.attorneyNamePhone}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Insurance Adjuster / Phone:
          <input
            style={inputStyle}
            type="text"
            name="adjusterNamePhone"
            value={form.adjusterNamePhone}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Vehicle Status (Totaled / Pending / Settled):
          <input
            style={inputStyle}
            type="text"
            name="vehicleStatus"
            value={form.vehicleStatus}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Daily Pain & Symptom Log */}
      <div style={sectionStyle}>
        <h2>Daily Pain & Symptom Log</h2>
        <label style={labelStyle}>
          Date:
          <input
            style={inputStyle}
            type="date"
            name="painDate"
            value={form.painDate}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Pain Level (0–10):
          <input
            style={inputStyle}
            type="number"
            min="0"
            max="10"
            name="painLevel"
            value={form.painLevel}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Locations:
          <input
            style={inputStyle}
            type="text"
            name="painLocations"
            value={form.painLocations}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Type of Pain (Sharp / Sore / Stiff / Throbbing / Radiating / Spasm):
          <input
            style={inputStyle}
            type="text"
            name="painType"
            value={form.painType}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Mobility Impact / Things Difficult to Do:
          <textarea
            style={inputStyle}
            name="mobilityImpact"
            value={form.mobilityImpact}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Sleep Quality:
          <input
            style={inputStyle}
            type="text"
            name="sleepQuality"
            value={form.sleepQuality}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Medication Taken:
          <input
            style={inputStyle}
            type="text"
            name="medicationTaken"
            value={form.medicationTaken}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Notes / Changes Since Yesterday:
          <textarea
            style={inputStyle}
            name="painNotes"
            value={form.painNotes}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Medical Appointments */}
      <div style={sectionStyle}>
        <h2>Medical Appointments</h2>
        <label style={labelStyle}>
          Date:
          <input
            style={inputStyle}
            type="date"
            name="medDate"
            value={form.medDate}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Provider / Location:
          <input
            style={inputStyle}
            type="text"
            name="medProviderLocation"
            value={form.medProviderLocation}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Visit Type (ER / PT / Chiropractor / X-ray / Follow-up):
          <input
            style={inputStyle}
            type="text"
            name="medVisitType"
            value={form.medVisitType}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Diagnosis / Findings:
          <textarea
            style={inputStyle}
            name="medDiagnosisFindings"
            value={form.medDiagnosisFindings}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Next Appointment:
          <input
            style={inputStyle}
            type="text"
            name="medNextAppointment"
            value={form.medNextAppointment}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Transportation Costs */}
      <div style={sectionStyle}>
        <h2>Transportation Costs (Uber/Lyft/Taxi/Bus)</h2>
        <label style={labelStyle}>
          Date:
          <input
            style={inputStyle}
            type="date"
            name="transDate"
            value={form.transDate}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Start → End Location:
          <input
            style={inputStyle}
            type="text"
            name="transRoute"
            value={form.transRoute}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Purpose (Doctor / Work / Errands):
          <input
            style={inputStyle}
            type="text"
            name="transPurpose"
            value={form.transPurpose}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Cost:
          <input
            style={inputStyle}
            type="number"
            name="transCost"
            value={form.transCost}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Receipt Saved? (Yes/No):
          <input
            style={inputStyle}
            type="text"
            name="transReceiptSaved"
            value={form.transReceiptSaved}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Out-of-Pocket Expenses */}
      <div style={sectionStyle}>
        <h2>Out-of-Pocket Expenses</h2>
        <label style={labelStyle}>
          Date:
          <input
            style={inputStyle}
            type="date"
            name="oopDate"
            value={form.oopDate}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Item Purchased:
          <input
            style={inputStyle}
            type="text"
            name="oopItem"
            value={form.oopItem}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Reason:
          <input
            style={inputStyle}
            type="text"
            name="oopReason"
            value={form.oopReason}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Cost:
          <input
            style={inputStyle}
            type="number"
            name="oopCost"
            value={form.oopCost}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Receipt Saved? (Yes/No):
          <input
            style={inputStyle}
            type="text"
            name="oopReceiptSaved"
            value={form.oopReceiptSaved}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Work / Income Impact */}
      <div style={sectionStyle}>
        <h2>Work / Income Impact</h2>
        <label style={labelStyle}>
          Date:
          <input
            style={inputStyle}
            type="date"
            name="workDate"
            value={form.workDate}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Hours Missed:
          <input
            style={inputStyle}
            type="number"
            name="workHoursMissed"
            value={form.workHoursMissed}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Reason:
          <input
            style={inputStyle}
            type="text"
            name="workReason"
            value={form.workReason}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Lost Pay?:
          <input
            style={inputStyle}
            type="text"
            name="workLostPay"
            value={form.workLostPay}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Notes:
          <textarea
            style={inputStyle}
            name="workNotes"
            value={form.workNotes}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Mental / Emotional Check-in */}
      <div style={sectionStyle}>
        <h2>Mental / Emotional Check-In</h2>
        <label style={labelStyle}>
          Stress Level (0–10):
          <input
            style={inputStyle}
            type="number"
            min="0"
            max="10"
            name="mentalStressLevel"
            value={form.mentalStressLevel}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Mood:
          <input
            style={inputStyle}
            type="text"
            name="mentalMood"
            value={form.mentalMood}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Anything triggering today:
          <textarea
            style={inputStyle}
            name="mentalTriggers"
            value={form.mentalTriggers}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Things that helped / support used:
          <textarea
            style={inputStyle}
            name="mentalHelped"
            value={form.mentalHelped}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Important Contacts / Updates */}
      <div style={sectionStyle}>
        <h2>Important Contacts / Updates</h2>
        <label style={labelStyle}>
          Adjuster Calls / Messages:
          <textarea
            style={inputStyle}
            name="contactsAdjuster"
            value={form.contactsAdjuster}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Attorney Notes:
          <textarea
            style={inputStyle}
            name="contactsAttorney"
            value={form.contactsAttorney}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Other Relevant Info:
          <textarea
            style={inputStyle}
            name="contactsOther"
            value={form.contactsOther}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Photo / Evidence Notes */}
      <div style={sectionStyle}>
        <h2>Photo / Evidence Notes</h2>
        <label style={labelStyle}>
          Photos Taken Today? (Car / Injuries / Medical paperwork / Receipts):
          <input
            style={inputStyle}
            type="text"
            name="photosTaken"
            value={form.photosTaken}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          File locations:
          <textarea
            style={inputStyle}
            name="photoFileLocations"
            value={form.photoFileLocations}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Generate Button */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <button
          onClick={handleGenerate}
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Create Journal Post
        </button>
      </div>

      {/* Generated Journal Text + Copy Button */}
      {journalText && (
        <div style={sectionStyle}>
          <h2>Generated Journal Entry</h2>
          <h4>(be sure to double check info before copying!)
          </h4>
          <textarea 
          readOnly
            style={{ ...inputStyle, height: "240px", whiteSpace: "pre-wrap" }}
            value={journalText}
          />
          <button
            onClick={handleCopy}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            {copied ? "Copied!" : "Copy Journal Text"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CarAccidentRecoveryLog;
