// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("news").title("News"),
      S.documentTypeListItem("caseStudy").title("Case Study"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !["post", "news", "caseStudy"].includes(item.getId())
      ),
    ]);
