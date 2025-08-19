import { postType } from "./postType";
import { newsType } from "./newsType";
import { caseStudyType } from "./caseStudyType";
import { locationType } from "./locationType";

export const schema = {
  types: [newsType, caseStudyType, postType, locationType],
};
