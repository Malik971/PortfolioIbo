import { useEffect, useState } from "react";

const AgentMalik = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.VG_CONFIG = {
      ID: "9gzuivz3u6f2mekh",
      region: "eu",
      render: "popup", 
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ],
      autostart: false, 
    };

    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      
      {/* Chatbot pop-up */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "400px",
            height: "500px",
            background: "#fff",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>
          <div style={{ width: "100%", height: "100%" }} id="VG_OVERLAY_CONTAINER"></div>
        </div>
      )}
    </>
  );
};

export default AgentMalik;
