import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboardPage() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    fetch("/api/inquiries", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        if (res.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
          return null;
        }
        return res.json();
      })
      .then(data => {
        if (data) setInquiries(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load inquiries.");
        setLoading(false);
      });
  }, [navigate]);

  function logout() {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }

  return (
    <div className="admin-wrap">
      <header className="admin-header">
        <span className="brand-name" style={{ color: "var(--text-dark)" }}>BVGK Admin</span>
        <button className="btn btn-ghost" onClick={logout}>Logout</button>
      </header>
      <main className="admin-main">
        <h2>Inquiries</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="form-status error">{error}</p>}
        {!loading && !error && inquiries.length === 0 && (
          <p style={{ color: "var(--muted)" }}>No inquiries yet.</p>
        )}
        {inquiries.length > 0 && (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>Territory</th>
                  <th>Type</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map(i => (
                  <tr key={i.id}>
                    <td>{new Date(i.submittedAt).toLocaleDateString("en-IN")}</td>
                    <td>{i.name}</td>
                    <td><a href={`mailto:${i.email}`}>{i.email}</a></td>
                    <td>{i.phone || "—"}</td>
                    <td>{i.company || "—"}</td>
                    <td>{i.territory || "—"}</td>
                    <td>{i.type}</td>
                    <td>{i.message || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
