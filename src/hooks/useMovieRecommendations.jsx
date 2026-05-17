import { hf } from "../utils/huggingFace";

export default function useMovieRecommendations() {
  async function getMovieRecommendations(query) {
    try {
      const response = await hf.chatCompletion({
        model: "meta-llama/Llama-3.1-8B-Instruct",
        messages: [
          {
            role: "user",
            content: `
              Act as a movie recommendation assistant and suggest movies for ${query}.
              Only give top 5 movie names in comma separated format.
              Do not include any extra text.
            `,
          },
        ],
        max_tokens: 100,
      });

      return response.choices[0].message.content
        .split(",")
        .map((movie) => movie.trim());
    } catch (error) {
      console.error("Error fetching movie recommendations:", error);

      return [];
    }
  }

  return { getMovieRecommendations };
}
