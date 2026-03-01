export interface ChatbotResponse {
  text?: string;
  sessionId?: string;
  chatId?: string;
  chatMessageId?: string;
}

export async function queryChatbot(message: string): Promise<ChatbotResponse> {
  const CHATBOT_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL;

  if (!CHATBOT_URL) {
    throw new Error("NEXT_PUBLIC_CHATBOT_API_URL is not configured");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(CHATBOT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: message }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error querying chatbot:", error);
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}