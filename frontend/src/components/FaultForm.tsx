import { useState } from 'react';

interface FaultFormProps {
  reporterName: string;
  coaches: string[];
  facilities: string[];
  faultTypes: string[];
}

export default function FaultForm({
  reporterName,
  coaches,
  facilities,
  faultTypes,
}: FaultFormProps) {
  const [date, setDate] = useState('');
  const [coach, setCoach] = useState('');
  const [facility, setFacility] = useState('');
  const [faultType, setFaultType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coach || !facility || !faultType) {
      alert('נא למלא את כל השדות החובה');
      return;
    }

    const reportData = {
      reporterName,
      date,
      coach,
      facility,
      faultType,
      description,
    };

    console.log('📤 שליחת דוח תקלה:', reportData);
    // כאן תוכל לשלוח את הדוח לשרת או API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>שם מדווח:</label>
        <span>{reporterName}</span>
      </div>

      <div>
        <label>תאריך ושעה:</label>
        <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <div>
        <label>בחירת מאמן (חובה):</label>
        <select value={coach} onChange={(e) => setCoach(e.target.value)} required>
          <option value="">-- בחר מאמן --</option>
          {coaches.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>בחירת מתקן (חובה):</label>
        <select value={facility} onChange={(e) => setFacility(e.target.value)} required>
          <option value="">-- בחר מתקן --</option>
          {facilities.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>סוג תקלה (חובה):</label>
        <select value={faultType} onChange={(e) => setFaultType(e.target.value)} required>
          <option value="">-- בחר סוג תקלה --</option>
          {faultTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>תיאור התקלה:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <button type="submit">שלח דוח תקלה</button>
    </form>
  );
}