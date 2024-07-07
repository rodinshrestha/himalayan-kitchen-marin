import { MarkDownContentTypes } from "@/types/mark-down-content.types";
import { getMarkDownDataConversion } from "@/utils/convert-mark-down-data";
import { graphql, useStaticQuery } from "gatsby";

const useAllMarkdownData = (
  collectionName: string
): Array<MarkDownContentTypes> => {
  const resp = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              price
              name
              description
              food_type
            }
            html
          }
        }
      }
    }
  `);

  const allMarkDownData = resp.allMarkdownRemark.edges;

  const collectionRegex = new RegExp(`/${collectionName}/`, "i");

  const filteredData = allMarkDownData.filter(({ node }: any) =>
    collectionRegex.test(node.fileAbsolutePath)
  );

  return getMarkDownDataConversion(filteredData);
};

export default useAllMarkdownData;
