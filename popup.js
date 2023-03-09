document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#summarize").addEventListener("click", summarizeText);
  });
  
  function summarizeText() {
    const inputText = document.querySelector("#input").value;
    const apiKey = "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"; 
  
    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "Summarize this for a second-grade student: " + inputText,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    })
    .then(response => response.json())
    .then(data => {
      const summary = data.choices[0].text.trim();
      document.querySelector("#output").textContent = summary;
    })
    .catch(error => {
      console.error("Error summarizing text:", error);
      document.querySelector("#output").textContent = "Error summarizing text.";
    });
  }
  