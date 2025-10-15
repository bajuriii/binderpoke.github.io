body {
  font-family: 'Poppins', sans-serif;
  background-color: #0d1117;
  color: #e6edf3;
  margin: 0;
  padding: 0;
  text-align: center;
}

header {
  background: #161b22;
  padding: 20px;
  position: sticky;
  top: 0;
}

h1 {
  margin-bottom: 10px;
  color: #ffcc00;
}

#search {
  padding: 10px;
  width: 80%;
  max-width: 400px;
  border-radius: 8px;
  border: none;
  outline: none;
}

#card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  padding: 30px;
}

.card {
  background: #161b22;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: auto;
}

.card h3 {
  margin: 10px 0 0;
  color: #58a6ff;
}

.card p {
  margin: 5px 0 15px;
  font-size: 14px;
  color: #8b949e;
}
