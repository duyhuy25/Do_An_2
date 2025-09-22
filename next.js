const express = require("express");
const sql = require("msnodesqlv8");
const app = express();
const port = 3000;

const connectionString =
  "Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLEXPRESS06;Database=Doan2;UID=sa;PWD=123;Trusted_Connection=No;";

app.get("/kho", (req, res) => {
  const query = "SELECT * FROM KhoLT";
  sql.query(connectionString, query, (err, rows) => {
    if (err) {
      console.error("❌ Lỗi khi truy vấn:", err);
      return res.status(500).send("Lỗi kết nối CSDL");
    }

    // Gửi dữ liệu ra dạng JSON
    res.json(rows);
  });
});
    
app.use(express.static("public")); // để phục vụ file HTML ở thư mục public

app.listen(port, () => {
  console.log(`🚀 Server chạy tại http://localhost:${port}`);
});
