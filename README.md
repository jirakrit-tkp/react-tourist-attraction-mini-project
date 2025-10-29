# Tourist Attraction

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-18.2.0-blue)](https://reactjs.org/)

A modern travel destination website that lets users search for tourist attractions with keyword and tag filters. Features responsive design, real-time search, and interactive tag filtering for an intuitive browsing experience.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)

## ✨ Features

- 🔍 **Real-time Search**: Instant search results as you type
- 🏷️ **Tag Filtering**: Click tags to filter attractions by category
- 📱 **Responsive Design**: Beautiful UI on all devices
- 🖼️ **Image Gallery**: Multiple photos for each attraction
- 🔗 **External Links**: Open full articles in new tabs
- 📋 **Copy to Clipboard**: Share attraction URLs easily
- 🎨 **Modern UI**: Built with TailwindCSS and Kanit font

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18.2.0
- **Build Tool**: Vite 7.1.3
- **Styling**: TailwindCSS 4.1.12
- **Icons**: Lucide React
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.0.1
- **CORS**: CORS 2.8.5

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 18.0.0 or higher)
- npm (comes with Node.js)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/react-tourist-attraction-mini-project.git
cd react-tourist-attraction-mini-project
```

### Step 2: Install Dependencies

```bash
# Client dependencies
cd client
npm install

# Server dependencies
cd ../server
npm install
```

### Step 3: Run the Application

#### Start Server (Port 4001)

```bash
cd server
npm start
```

#### Start Client (Port 5173)

```bash
cd client
npm run dev
```

Visit `http://localhost:5173` to view the application.

## 📖 Usage

### Searching for Attractions

1. Type keywords in the search bar to filter attractions
2. Leave empty to show all attractions
3. Results update in real-time as you type

### Filtering by Tags

1. Click any tag (e.g., "เกาะ", "ทะเล", "ธรรมชาติ") under an attraction
2. The search will automatically add that tag to filter results
3. Multiple tags can be combined for precise filtering

### Viewing Details

1. Click attraction title or "อ่านต่อ" link to view full article (opens in new tab)
2. Click link icon to copy URL to clipboard
3. View thumbnail gallery for more photos

## 📂 Project Structure

```
react-tourist-attraction-mini-project/
├── client/                      # React frontend
│   ├── src/
│   │   ├── components/          # React components
│   │   │   └── SearchArticle.jsx
│   │   ├── App.jsx
│   │   ├── index.css            # Global styles + Kanit font
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/                      # Express backend
│   ├── app.js                   # Express server
│   ├── db.js                    # Attractions data
│   └── package.json
│
└── README.md
```

## 🔌 API Documentation

### Base URL

Development: `http://localhost:4001`

### Endpoints

#### Get Attractions

```
GET /trips?keywords={search_term}
```

**Query Parameters:**
- `keywords` (string, required): Search term for filtering attractions
  - Use empty string (`keywords=`) to get all attractions
  - Multiple keywords separated by space for OR search

**Example Request:**

```javascript
// Get all attractions
axios.get('http://localhost:4001/trips?keywords=')

// Search for islands
axios.get('http://localhost:4001/trips?keywords=เกาะ')

// Search for beaches or sea
axios.get('http://localhost:4001/trips?keywords=ทะเล ชายหาด')
```

**Response:**

```json
{
  "data": [
    {
      "eid": "1",
      "title": "คู่มือเที่ยวเกาะช้าง",
      "url": "https://www.wongnai.com/trips/...",
      "description": "วันว่างนี้ไปเที่ยวเกาะช้างกัน...",
      "photos": [
        "https://img.wongnai.com/...",
        "https://img.wongnai.com/..."
      ],
      "tags": ["เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"]
    }
  ]
}
```

**Error Response:**

```json
{
  "message": "Please send keywords parameter in the URL endpoint"
}
```

---

<div align="center">

**Built with ❤️ for travel enthusiasts**

[Report Bug](https://github.com/your-username/react-tourist-attraction-mini-project/issues) · [Request Feature](https://github.com/your-username/react-tourist-attraction-mini-project/issues)

</div>
