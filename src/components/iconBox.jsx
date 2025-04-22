function IconBox({ iconClass }) {
  return (
    <div
      className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "4rem",
        width: "4rem",
        fontSize: "2rem",
        position: "relative",
        top: "-1.5rem",
        marginBottom: "-1rem",
      }}
    >
      <i className={iconClass}></i>
    </div>
  );
}

export default IconBox;
