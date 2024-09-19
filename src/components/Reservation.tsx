import Image from "next/image";

export default function Reservation() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Right side for the reservation form */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#2c2c2c",
            padding: "2rem",
            borderRadius: "8px",
            color: "white",
            width: "80%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <h2>RESERVATION</h2>
          <p>Book Online Or Give Us A Call On +91 1111 222 333</p>
          <p>Between 9:30 AM - 10:00 PM</p>

          {/* Form */}
          <form>
            <div style={{ margin: "1rem 0" }}>
              <input
                type="text"
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "5px",
                  border: "1px solid #444",
                  backgroundColor: "#333",
                  color: "white",
                }}
              />
            </div>
            <div style={{ margin: "1rem 0" }}>
              <input
                type="email"
                placeholder="E-Mail"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "5px",
                  border: "1px solid #444",
                  backgroundColor: "#333",
                  color: "white",
                }}
              />
            </div>
            <div style={{ margin: "1rem 0" }}>
              <input
                type="number"
                placeholder="People Number"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "5px",
                  border: "1px solid #444",
                  backgroundColor: "#333",
                  color: "white",
                }}
              />
            </div>
            <div style={{ margin: "1rem 0" }}>
              <input
                type="datetime-local"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "5px",
                  border: "1px solid #444",
                  backgroundColor: "#333",
                  color: "white",
                }}
              />
            </div>
            <button
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "5px",
                backgroundColor: "#ff7a00",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Send Mail
            </button>
          </form>

          <p style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
            *Terms & Conditions Applied
          </p>
        </div>
      </div>
      {/* Left side for the image and background */}
      <div style={{ flex: 1, position: "relative" }}>
        <Image
          src="/reservationBg.png" // Replace this with the image you want to use
          alt="Background with spices"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
}
