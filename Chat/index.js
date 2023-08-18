const translateButton = document.getElementById("translateButton");
const tamilInput = document.getElementById("tamilInput");
const englishOutput = document.getElementById("englishOutput");

translateButton.addEventListener("click", async () => {
  const tamilText = tamilInput.value;

  // Use your OpenAI API key here
  const apiKey = "YOUR_OPENAI_API_KEY";

  // Translate Tamil to English
  const translation = await translateText(apiKey, tamilText);
  englishOutput.textContent = translation;
});

async function translateText(apiKey, tamilText) {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: `Translate the following Tamil text to English:\n"${tamilText}"\nTranslated English:`,
          max_tokens: 50,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.choices || data.choices.length === 0) {
      throw new Error("Invalid API response format");
    }

    return data.choices[0].text.trim();
  } catch (error) {
    console.error("Error translating text:", error);
    return "Translation error occurred";
  }
}
