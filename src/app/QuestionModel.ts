export class QuestionModel {
  results: QuestionModel;

  constructor(public category: string, public type: string, public difficulty: string, public question: string, public correct_answer: string, public incorrect_answers: string) {
  }

}
