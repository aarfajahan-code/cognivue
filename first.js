<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crop Health Monitoring App</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        header { background: #4CAF50; color: white; padding: 1rem; text-align: center; }
        nav { background: #333; color: white; padding: 0.5rem; }
        nav button { background: none; border: none; color: white; padding: 0.5rem; cursor: pointer; }
        nav button.active { background: #555; }
        .section { display: none; padding: 1rem; }
        .active { display: block; }
        form { max-width: 600px; margin: auto; }
        input, textarea, select { width: 100%; padding: 0.5rem; margin: 0.5rem 0; }
        button { padding: 0.5rem 1rem; background: #4CAF50; color: white; border: none; cursor: pointer; }
        .feed-item { border: 1px solid #ddd; padding: 1rem; margin: 0.5rem 0; }
        .upvote { cursor: pointer; }
        #map { height: 400px; }
        .advisor { border: 1px solid #ddd; padding: 1rem; margin: 0.5rem 0; }
    </style>
</head>
<body>
    <header>
        <h1>Crop Health Monitoring App</h1>
    </header>
    <nav>
        <button id="reportBtn">Report Disease</button>
        <button id="feedBtn">Community Feed</button>
        <button id="mapBtn">Outbreak Map</button>
        <button id="advisorsBtn">Saved Advisors</button>
    </nav>
    <div id="report" class="section active">
        <h2>Report Plant Disease</h2>
        <form id="reportForm">
            <label>Symptoms:</label>
            <textarea id="symptoms" required></textarea>
            <label>Affected %:</label>
            <input type="number" id="affected" min="0" max="100" required>
            <label>Photo:</label>
            <input type="file" id="photo" accept="image/*">
            <label>District:</label>
            <select id="district" required>
                <option value="">Select District</option>
                <option value="District A">District A</option>
                <option value="District B">District B</option>
                <option value="District C">District C</option>
            </select>
            <button type="submit">Submit Report</button>
        </form>
        <div id="diagnosis"></div>
    </div>
    <div id="feed" class="section">
        <h2>Community Feed</h2>
        <div id="feedList"></div>
    </div>
    <div id="mapSection" class="section">
        <h2>Outbreak Map</h2>
        <div id="map"></div>
    </div>
    <div id="advisors" class="section">
        <h2>Saved Advisors</h2>
        <div id="advisorList"></div>
    </div>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="first.js"></script>
</body>
</html> 