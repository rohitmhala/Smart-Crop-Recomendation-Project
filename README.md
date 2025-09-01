# 🌱 Smart Crop Recommendation System

A **machine learning powered web application** that recommends the most suitable crop to grow based on soil nutrients and environmental conditions.  
Built with **Flask, Scikit-learn, Pandas, Bootstrap, and JavaScript**.  

🔗 **Live Demo:** [Crop Recommendation System](https://crop-recommendation-system-agup.onrender.com)

---

## 🚀 Features
- Predicts the most suitable crop using **Random Forest ML Model**.
- Takes into account:
  - Nitrogen (N)
  - Phosphorus (P)
  - Potassium (K)
  - Temperature (°C)
  - Humidity (%)
  - Soil pH
  - Rainfall (mm)
- **Modern UI** with Bootstrap & glassmorphism design.
- **Flask backend API** + **AJAX frontend**.
- Deployed on **Render**.

---

## 🛠️ Tech Stack
- **Backend:** Python, Flask, Gunicorn  
- **Machine Learning:** scikit-learn, pandas, joblib  
- **Frontend:** HTML, CSS (Bootstrap), JavaScript (Fetch API)  
- **Deployment:** Render  

---

## 📂 Project Structure
```
Crop-Recommendation-System
## 📂 Project Structure
```
Crop-Recommendation-System/
│── app.py               # Flask backend
│── crop_model.pkl       # Saved ML model
│── crop_data.csv        # Dataset
│── train_model.py       # Model training script
│── Procfile             # Deployment instruction
│── requirements.txt     # Dependencies
│── screenshot.png       # Webpage Sereenshot
├── templates/
│   └── index.html       # Frontend UI
│
├── static/
│   ├── style.css        # Styling
│   └── script.js        # Frontend logic
│
└── README.md
```
---

## ⚙️ Local Setup (Run on Your PC)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Crop-Recommendation-System.git
cd Crop-Recommendation-System
```

### 2. Create Virtual Environment (optional but recommended)
```bash
python -m venv venv
venv\Scripts\activate       # Windows
source venv/bin/activate    # Linux/Mac
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Train the Model (optional)
```bash
python train_model.py
```

### 5. Run the Application
```bash
python app.py
```

Now visit 👉 `http://127.0.0.1:5000/`

---

## 🌍 Deployment on Render
1. Push your code to GitHub.  
2. Go to [Render](https://render.com/) → **New → Web Service**.  
3. Connect your repo.  
4. Make sure you have:
   - `requirements.txt` → lists dependencies  
   - `Procfile` → tells Render how to run app:
     ```
     web: gunicorn app:app
     ```
5. Choose **Python 3.10+** in Render.  
6. Deploy → Render gives you a live URL 🎉.  
---

## 📊 Example Input
| Feature       | Example Value |
|---------------|---------------|
| Nitrogen (N)  | 45            |
| Phosphorus(P) | 41            |
| Potassium (K) | 54            |
| Temperature   | 27            |
| Humidity      | 65            |
| pH            | 6             |
| Rainfall      | 146           |

### ✅ Example Output
```
🌾 Recommended Crop: rice
```

---

## 📸 Screenshots

### Homepage
![UI Screenshot](/screenshot.png)

---

## 📌 Future Enhancements
- [ ] Show **top 3 probable crops** with probabilities (Chart.js).  
- [ ] Deploy with a custom domain.  
- [ ] Add dashboard with analytics (avg NPK needs, seasonal data).  
- [ ] Add login & save prediction history for farmers.  

---

## 👨‍💻 Author
 **Rohit Mhala**
 [Github]
