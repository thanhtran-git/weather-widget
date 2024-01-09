// const express = require("express");
// const cors = require("cors");

// const app = express();
// const port = 3000;

// app.use(cors());

// app.get("/api/data", async (req, res) => {
//   const apiUrl = "https://dwd.api.proxy.bund.dev";

//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
