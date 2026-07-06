export default function Modal({ type, doctorName, onClose, onConfirm }) {
  if (!type) return null;

  return (
    <div
      className={`modal-overlay open`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* BOOKING MODAL */}
        {type === "booking" && (
          <>
            <h2>Book Appointment</h2>
            <p className="modal-sub">
              {doctorName
                ? `Booking with ${doctorName}`
                : "Select your preferred slot"}
            </p>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="e.g. Rahul Sharma" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Age</label>
                <input type="number" placeholder="25" />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" />
            </div>
            <div className="form-group">
              <label>Preferred Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Time Slot</label>
              <select>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
                <option>5:00 PM</option>
              </select>
            </div>
            <div className="form-group">
              <label>Reason for Visit</label>
              <textarea
                rows="3"
                placeholder="Brief description of your concern..."
              ></textarea>
            </div>
            <button
              className="btn-submit"
              onClick={() => onConfirm("Appointment booked successfully! 🎉")}
            >
              Confirm Appointment ✓
            </button>
          </>
        )}

        {/* SIGNUP MODAL */}
        {type === "signup" && (
          <>
            <h2>Create Account</h2>
            <p className="modal-sub">
              Join MediLink and start booking appointments today
            </p>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@email.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a strong password" />
            </div>
            <button
              className="btn-submit"
              onClick={() => onConfirm("Welcome to MediLink! 🎉")}
            >
              Create Account →
            </button>
            <p
              style={{
                textAlign: "center",
                marginTop: "12px",
                fontSize: "12px",
                color: "#64748b",
              }}
            >
              Already have an account?{" "}
              <a href="#" style={{ color: "#6366f1", fontWeight: 600 }}>
                Sign In
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
