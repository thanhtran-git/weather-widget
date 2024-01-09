// const express = require("express");
// const cors = require("cors");
// const fetch = require("node-fetch");

// const app = express();
// const port = 3000;

// app.use(cors());

// const API_URL = `https://dwd.api.proxy.bund.dev/v30/stationOverviewExtended?stationIds=${stationId}`;

// app.get("/api/data", async (req, res) => {
//   try {
//     const response = await fetch(API_URL);

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
