export interface Curriculum {
  _id: string;
  title: string;
  description: string;
  learningPath: string;
  learningLevel: string;
  topics: Array<string>;
  duration: string;
  type: string;
  externalLinks: Array<{
    title: string;
    url: string;
  }>;
  createdAt: string;
  updatedAt: string;
}
