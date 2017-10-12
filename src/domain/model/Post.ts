/**
 * Model for Post with its attributes and types
 */
export type Post = {
  _id: string,
  title: string,
  authorId: string,
  remuneration: string,
  location: string,
  workType: string,
  closingDate: Date,
  description: string,
  skills: string[],
  howToApply: string,
  createdAt?: Date,
}