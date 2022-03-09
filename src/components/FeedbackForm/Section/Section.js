import "./Section.css";

export default function Section({ title, children }) {
  return (
    <div className="sectionFeedBack">
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </div>
  );
}
