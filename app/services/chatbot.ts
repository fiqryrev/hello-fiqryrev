interface ChatbotResponse {
  text?: string;
  sessionId?: string;
  chatId?: string;
  chatMessageId?: string;
  [key: string]: string | undefined;
}

export async function queryChatbot(message: string): Promise<ChatbotResponse> {
  try {
    const response = await fetch(
      "https://flowise-z19w.onrender.com/api/v1/prediction/e28ab4f1-6343-429f-b283-25db5abcbbe1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: message })
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error querying chatbot:", error);
    throw error;
  }
}