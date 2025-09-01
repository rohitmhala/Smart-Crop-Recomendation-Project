document.getElementById("cropForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        N: document.getElementById("N").value,
        P: document.getElementById("P").value,
        K: document.getElementById("K").value,
        temperature: document.getElementById("temperature").value,
        humidity: document.getElementById("humidity").value,
        pH: document.getElementById("pH").value,
        rainfall: document.getElementById("rainfall").value
    };

    const loading = document.getElementById("loading");
    const result = document.getElementById("result");

    loading.classList.remove("d-none");
    result.classList.add("d-none");

    fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        loading.classList.add("d-none");
        if (res.crop) {
            result.innerText = "🌾 Recommended Crop: " + res.crop;
            result.classList.remove("d-none");
            result.classList.add("alert-success");
            result.classList.remove("alert-danger");
        } else if (res.error) {
            result.innerText = "⚠️ Error: " + res.error;
            result.classList.remove("d-none");
            result.classList.add("alert-danger");
            result.classList.remove("alert-success");
        }
    })
    .catch(err => {
        loading.classList.add("d-none");
        result.innerText = "⚠️ Something went wrong!";
        result.classList.remove("d-none");
        result.classList.add("alert-danger");
        result.classList.remove("alert-success");
        console.error("Fetch error:", err);
    });
});
