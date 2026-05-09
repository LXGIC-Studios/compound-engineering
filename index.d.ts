/**
 * Compound Engineering - AI-powered compound engineering
 * Automatic learning and improvement for AI agents
 */

export interface CompoundConfig {
  memoryPath: string;
  learningRate: number;
  maxMemory: number;
}

export interface MemoryItem {
  id: string;
  content: string;
  type: 'observation' | 'reflection' | 'decision';
  timestamp: number;
  relevance: number;
}

export interface LearningModel {
  patterns: Array<{
    trigger: string;
    action: string;
    success: number;
    failures: number;
  }>;
}

export declare function createCompoundEngine(config: CompoundConfig): Promise<CompoundEngine>;
export declare function loadMemory(path: string): Promise<MemoryItem[]>;
export declare function saveMemory(path: string, memory: MemoryItem[]): Promise<void>;
export declare function analyzePattern(memory: MemoryItem[]): Promise<LearningModel>;

export interface CompoundEngine {
  addObservation(observation: string): Promise<void>;
  reflect(): Promise<string>;
  decide(input: string): Promise<string>;
  getMemory(): Promise<MemoryItem[]>;
  getPatterns(): Promise<LearningModel>;
}

export { CompoundEngine as default };