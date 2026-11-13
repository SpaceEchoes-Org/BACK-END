
const askChatbot = async (req, res) => {
  try {
    const { question } = req.body;

    if (
      typeof question !== "string" ||
      question.trim().length === 0
    ) {
      return res.status(400).json({
        message: "Question is required",
      });
    }

    const aiApiUrl = process.env.AI_API_URL;

    if (!aiApiUrl) {
      return res.status(503).json({
        message: "AI service URL is not configured",
      });
    }

    const response = await fetch(aiApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question.trim(),
      }),
      signal: AbortSignal.timeout(30000),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return res.status(502).json({
        message: "AI service returned an error",
        details: responseData,
      });
    }

    return res.status(200).json({
      message: "AI response received",
      data: responseData,
    });
  } catch (error) {
    return res.status(502).json({
      message: "Could not connect to AI service",
      error: error.message,
    });
  }
};

module.exports = { askChatbot };
