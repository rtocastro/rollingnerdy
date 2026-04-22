import React, { useState } from "react";
import "./JournalTemp.css";

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

  return (
    <div className="journal-shell">
      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Section 01</span>
          <h2>Case information</h2>
          <p>Basic case details you may need to reference again later.</p>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="claimNumber">Claimant / Claim Number</label>
            <input
              id="claimNumber"
              type="text"
              name="claimNumber"
              value={form.claimNumber}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="vehicleStatus">Vehicle Status</label>
            <input
              id="vehicleStatus"
              type="text"
              name="vehicleStatus"
              value={form.vehicleStatus}
              onChange={handleChange}
              placeholder="Totaled / Pending / Settled"
            />
          </div>

          <div className="field full">
            <label htmlFor="attorneyNamePhone">Attorney Name / Phone</label>
            <input
              id="attorneyNamePhone"
              type="text"
              name="attorneyNamePhone"
              value={form.attorneyNamePhone}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="adjusterNamePhone">Insurance Adjuster / Phone</label>
            <input
              id="adjusterNamePhone"
              type="text"
              name="adjusterNamePhone"
              value={form.adjusterNamePhone}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Section 02</span>
          <h2>Daily pain & symptom log</h2>
          <p>Track how your body felt today and what changed.</p>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="painDate">Date</label>
            <input
              id="painDate"
              type="date"
              name="painDate"
              value={form.painDate}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="painLevel">Pain Level (0–10)</label>
            <input
              id="painLevel"
              type="number"
              min="0"
              max="10"
              name="painLevel"
              value={form.painLevel}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="painLocations">Locations</label>
            <input
              id="painLocations"
              type="text"
              name="painLocations"
              value={form.painLocations}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="painType">Type of Pain</label>
            <input
              id="painType"
              type="text"
              name="painType"
              value={form.painType}
              onChange={handleChange}
              placeholder="Sharp / Sore / Stiff / Throbbing"
            />
          </div>

          <div className="field full">
            <label htmlFor="mobilityImpact">Mobility Impact / Things Difficult to Do</label>
            <textarea
              id="mobilityImpact"
              name="mobilityImpact"
              value={form.mobilityImpact}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="sleepQuality">Sleep Quality</label>
            <input
              id="sleepQuality"
              type="text"
              name="sleepQuality"
              value={form.sleepQuality}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="medicationTaken">Medication Taken</label>
            <input
              id="medicationTaken"
              type="text"
              name="medicationTaken"
              value={form.medicationTaken}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="painNotes">Notes / Changes Since Yesterday</label>
            <textarea
              id="painNotes"
              name="painNotes"
              value={form.painNotes}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Section 03</span>
          <h2>Medical appointments</h2>
          <p>Keep your visits and next steps organized.</p>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="medDate">Date</label>
            <input
              id="medDate"
              type="date"
              name="medDate"
              value={form.medDate}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="medNextAppointment">Next Appointment</label>
            <input
              id="medNextAppointment"
              type="text"
              name="medNextAppointment"
              value={form.medNextAppointment}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="medProviderLocation">Provider / Location</label>
            <input
              id="medProviderLocation"
              type="text"
              name="medProviderLocation"
              value={form.medProviderLocation}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="medVisitType">Visit Type</label>
            <input
              id="medVisitType"
              type="text"
              name="medVisitType"
              value={form.medVisitType}
              onChange={handleChange}
              placeholder="ER / PT / Chiropractor / X-ray / Follow-up"
            />
          </div>

          <div className="field full">
            <label htmlFor="medDiagnosisFindings">Diagnosis / Findings</label>
            <textarea
              id="medDiagnosisFindings"
              name="medDiagnosisFindings"
              value={form.medDiagnosisFindings}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Section 04</span>
          <h2>Transportation costs</h2>
          <p>Log rides, routes, and receipts tied to recovery.</p>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="transDate">Date</label>
            <input
              id="transDate"
              type="date"
              name="transDate"
              value={form.transDate}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="transCost">Cost</label>
            <input
              id="transCost"
              type="number"
              name="transCost"
              value={form.transCost}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="transRoute">Start → End Location</label>
            <input
              id="transRoute"
              type="text"
              name="transRoute"
              value={form.transRoute}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="transPurpose">Purpose</label>
            <input
              id="transPurpose"
              type="text"
              name="transPurpose"
              value={form.transPurpose}
              onChange={handleChange}
              placeholder="Doctor / Work / Errands"
            />
          </div>

          <div className="field">
            <label htmlFor="transReceiptSaved">Receipt Saved?</label>
            <input
              id="transReceiptSaved"
              type="text"
              name="transReceiptSaved"
              value={form.transReceiptSaved}
              onChange={handleChange}
              placeholder="Yes / No"
            />
          </div>
        </div>
      </section>

      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Section 05</span>
          <h2>Out-of-pocket expenses</h2>
          <p>Track purchases and recovery-related spending.</p>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="oopDate">Date</label>
            <input
              id="oopDate"
              type="date"
              name="oopDate"
              value={form.oopDate}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="oopCost">Cost</label>
            <input
              id="oopCost"
              type="number"
              name="oopCost"
              value={form.oopCost}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="oopItem">Item Purchased</label>
            <input
              id="oopItem"
              type="text"
              name="oopItem"
              value={form.oopItem}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="oopReason">Reason</label>
            <input
              id="oopReason"
              type="text"
              name="oopReason"
              value={form.oopReason}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="oopReceiptSaved">Receipt Saved?</label>
            <input
              id="oopReceiptSaved"
              type="text"
              name="oopReceiptSaved"
              value={form.oopReceiptSaved}
              onChange={handleChange}
              placeholder="Yes / No"
            />
          </div>
        </div>
      </section>

      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Section 06</span>
          <h2>Work / income impact</h2>
          <p>Document missed hours, lost pay, and job impact.</p>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="workDate">Date</label>
            <input
              id="workDate"
              type="date"
              name="workDate"
              value={form.workDate}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="workHoursMissed">Hours Missed</label>
            <input
              id="workHoursMissed"
              type="number"
              name="workHoursMissed"
              value={form.workHoursMissed}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="workReason">Reason</label>
            <input
              id="workReason"
              type="text"
              name="workReason"
              value={form.workReason}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="workLostPay">Lost Pay?</label>
            <input
              id="workLostPay"
              type="text"
              name="workLostPay"
              value={form.workLostPay}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="workNotes">Notes</label>
            <textarea
              id="workNotes"
              name="workNotes"
              value={form.workNotes}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Section 07</span>
          <h2>Mental / emotional check-in</h2>
          <p>Capture the part that isn’t always visible.</p>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="mentalStressLevel">Stress Level (0–10)</label>
            <input
              id="mentalStressLevel"
              type="number"
              min="0"
              max="10"
              name="mentalStressLevel"
              value={form.mentalStressLevel}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="mentalMood">Mood</label>
            <input
              id="mentalMood"
              type="text"
              name="mentalMood"
              value={form.mentalMood}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="mentalTriggers">Anything triggering today</label>
            <textarea
              id="mentalTriggers"
              name="mentalTriggers"
              value={form.mentalTriggers}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="mentalHelped">Things that helped / support used</label>
            <textarea
              id="mentalHelped"
              name="mentalHelped"
              value={form.mentalHelped}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Section 08</span>
          <h2>Important contacts / updates</h2>
          <p>Keep key conversations and developments in one place.</p>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="contactsAdjuster">Adjuster Calls / Messages</label>
            <textarea
              id="contactsAdjuster"
              name="contactsAdjuster"
              value={form.contactsAdjuster}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="contactsAttorney">Attorney Notes</label>
            <textarea
              id="contactsAttorney"
              name="contactsAttorney"
              value={form.contactsAttorney}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label htmlFor="contactsOther">Other Relevant Info</label>
            <textarea
              id="contactsOther"
              name="contactsOther"
              value={form.contactsOther}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Section 09</span>
          <h2>Photo / evidence notes</h2>
          <p>Record what was documented and where it was saved.</p>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="photosTaken">Photos Taken Today?</label>
            <input
              id="photosTaken"
              type="text"
              name="photosTaken"
              value={form.photosTaken}
              onChange={handleChange}
              placeholder="Car / Injuries / Medical paperwork / Receipts"
            />
          </div>

          <div className="field full">
            <label htmlFor="photoFileLocations">File Locations</label>
            <textarea
              id="photoFileLocations"
              name="photoFileLocations"
              value={form.photoFileLocations}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      <section className="journal-section">
        <div className="section-heading">
          <span className="section-kicker">Section 10</span>
          <h2>Generate entry</h2>
          <p>Turn everything above into a clean journal record.</p>
        </div>

        <div className="journal-actions">
          <button className="action-btn" onClick={handleGenerate}>
            Create Journal Post
          </button>
        </div>
      </section>

      {journalText && (
        <section className="journal-section">
          <div className="section-heading">
            <span className="section-kicker">Generated entry</span>
            <h2>Journal output</h2>
            <p>Be sure to double-check the information before copying.</p>
          </div>

          <div className="field-grid">
            <div className="field full">
              <label htmlFor="generatedJournal">Generated Journal Entry</label>
              <textarea
                id="generatedJournal"
                readOnly
                className="output-textarea"
                value={journalText}
              />
            </div>
          </div>

          <div className="journal-actions">
            <button className="action-btn" onClick={handleCopy}>
              {copied ? "Copied!" : "Copy Journal Text"}
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default CarAccidentRecoveryLog;