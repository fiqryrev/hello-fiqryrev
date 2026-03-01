import { queryChatbot } from "@/app/services/chatbot";

const MOCK_URL = "https://api.example.com/chatbot";

describe("queryChatbot()", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv, NEXT_PUBLIC_CHATBOT_API_URL: MOCK_URL };
    vi.restoreAllMocks();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("returns parsed response on success", async () => {
    const mockResponse = {
      text: "Hello!",
      sessionId: "sess-123",
      chatId: "chat-456",
    };
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify(mockResponse), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    );

    const result = await queryChatbot("Hi");

    expect(fetchSpy).toHaveBeenCalledOnce();
    expect(fetchSpy).toHaveBeenCalledWith(
      MOCK_URL,
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ question: "Hi" }),
      })
    );
    expect(result).toEqual(mockResponse);
  });

  it("throws when NEXT_PUBLIC_CHATBOT_API_URL is not set", async () => {
    delete process.env.NEXT_PUBLIC_CHATBOT_API_URL;

    await expect(queryChatbot("Hi")).rejects.toThrow(
      "NEXT_PUBLIC_CHATBOT_API_URL is not configured"
    );
  });

  it("throws on HTTP error status", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response("Not Found", { status: 404 })
    );

    await expect(queryChatbot("Hi")).rejects.toThrow(
      "HTTP error! status: 404"
    );
  });

  it("throws on network failure", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(
      new TypeError("Failed to fetch")
    );

    await expect(queryChatbot("Hi")).rejects.toThrow("Failed to fetch");
  });
});
