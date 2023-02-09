import type { InjectionKey } from "vue";
import type { AuthorInterface } from "./Author.interface";

export const authorKey = Symbol() as InjectionKey<{
  author: AuthorInterface;
  updateBirthday: () => void;
}>;
