export interface LLMConfig {
  provider: string
  baseUrl: string
  apiKey: string
  modelId: string
}

export interface Message {
  role: 'system' | 'user' | 'assistant'
  content: string | ContentPart[]
}

export interface ContentPart {
  type: 'text' | 'image_url'
  text?: string
  image_url?: { url: string }
}

export interface AnthropicContentPart {
  type: 'text' | 'image'
  text?: string
  source?: {
    type: 'base64'
    media_type: string
    data: string
  }
}

export interface ChatRequest {
  messages: Message[]
  stream?: boolean
  llmConfig?: LLMConfig
}

export interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string
    }
  }>
}

export interface AnthropicResponse {
  content: Array<{
    type: string
    text: string
  }>
}

// Helper to get env vars
export function getEnv() {
  return {
    AI_PROVIDER: process.env.AI_PROVIDER || 'openai',
    AI_BASE_URL: process.env.AI_BASE_URL || 'https://api.openai.com/v1',
    AI_API_KEY: process.env.AI_API_KEY || '',
    AI_MODEL_ID: process.env.AI_MODEL_ID || 'gpt-4o-mini',
    ACCESS_PASSWORD: process.env.ACCESS_PASSWORD,
  }
}
