export type Difficulity = 'easy' | 'medium' | 'hard';

export interface Question {
    category: string;
    type: 'multiple';
    difficulty: Difficulity;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}