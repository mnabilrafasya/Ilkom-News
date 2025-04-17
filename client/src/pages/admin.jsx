import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [acara, setAcara] = useState([]);
  const [formData, setFormData] = useState({
    tanggal: "",
    isi: "",
    judul: "",
    image: null,
  });

  // Ambil data acara saat komponen di-render
  useEffect(() => {
    axios
      .get("/api/acara")
      .then((response) => setAcara(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("tanggal", formData.tanggal);
    data.append("isi", formData.isi);
    data.append("judul", formData.judul);
    if (formData.image) {
      data.append("image", formData.image);
    }

    axios
      .post("/api/acara", data)
      .then((response) => {
        setAcara((prev) => [...prev, response.data]);
        setFormData({
          tanggal: "",
          isi: "",
          judul: "",
          image: null,
        });
      })
      .catch((error) => console.error("Error adding event:", error));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Informasi Acara</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Tanggal: </label>
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Judul: </label>
          <input
            type="text"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Isi: </label>
          <textarea
            name="isi"
            value={formData.isi}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Image: </label>
          <input type="file" name="image" onChange={handleFileChange} />
        </div>
        <button type="submit">Tambah Acara</button>
      </form>
      <h2>Daftar Acara</h2>
      <ul>
        {acara.map((item) => (
          <li key={item.id} style={{ marginBottom: "20px" }}>
            <strong>{item.judul}</strong> -{" "}
            {new Date(item.tanggal).toLocaleDateString()}
            <br />
            <p>{item.isi}</p>
            {item.image && (
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.judul}
                style={{ maxWidth: "300px" }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
