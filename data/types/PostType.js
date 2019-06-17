const graphql = require('graphql');

const List = graphql.GraphQLList;
const ObjectType = graphql.GraphQLObjectType;
const IntType = graphql.GraphQLInt;
const StringType = graphql.GraphQLString;
const NonNull = graphql.GraphQLNonNull;

const PostType = new ObjectType({
  name: 'PostItem',
  fields: {
    key: {
      type: new NonNull(StringType)
    },
    title: {
      type: new NonNull(StringType)
    },
    topics: {
      type: List(StringType)
    },
    link: {
      type: new NonNull(StringType)
    },
    author: {
      type: StringType
    },
    lastModifiedDate: {
      type: new NonNull(StringType)
    },
    publishedDate: {
      type: new NonNull(StringType)
    },
    publishedTime: {
      type: StringType
    },
    contentSnippet: {
      type: StringType
    },
    content: {
      type: StringType
    }
  },
});

const PostItemsType = new ObjectType({
  name: 'PostItems',

  fields: {
    posts: {
      type: new List(PostType)
    },
    pages: {
      type: IntType
    },
    page: {
      type: IntType
    },
    nextUrl: {
      type: StringType
    },
    prevUrl: {
      type: StringType
    }
  }
});

module.exports = {
  PostItemsType: PostItemsType,
  PostType: PostType
}
