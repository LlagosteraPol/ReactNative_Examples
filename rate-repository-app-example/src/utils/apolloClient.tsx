import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

/*
import {
   ApolloClient,
   InMemoryCache,
   NormalizedCacheObject,
 } from '@apollo/client'
 */

export const link = createHttpLink({
   uri: "http://192.168.1.42:5000/graphql"
 });

 //The ApolloClient class encapsulates Apollo's core client-side API. It backs all available view-layer integrations (React, iOS, and so on).
 // the InMemoryCache class (the cache used by almost every instance of ApolloClient)
const createApolloClient = () => new ApolloClient({
   cache: new InMemoryCache(),
   link,
});

export default createApolloClient