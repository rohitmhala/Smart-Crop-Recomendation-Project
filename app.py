from flask import Flask, request, jsonify, render_template
import joblib
import pandas as pd  # for DataFrame input

app = Flask(__name__)

# Load model
model = joblib.load("crop_model.pkl")  # make sure filename matches your saved model

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        print("Received data:", data)

        # Prepare input with correct feature names
        input_dict = {
            "N": [float(data["N"])],
            "P": [float(data["P"])],
            "K": [float(data["K"])],
            "temperature": [float(data["temperature"])],
            "humidity": [float(data["humidity"])],
            "ph": [float(data["pH"])],   # model was trained with lowercase "ph"
            "rainfall": [float(data["rainfall"])]
        }

        df = pd.DataFrame(input_dict)
        prediction = model.predict(df)

        return jsonify({"crop": prediction[0]})
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
