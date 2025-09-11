import React from "react";
import "./Frontend.css";

export default function GraphQLRoadmap() {
  const steps = [
    {
      step: "Step 1: Understand the Basics",
      items: [
        "Learn what GraphQL is and how it differs from REST",
        "Understand Queries, Mutations, and Subscriptions",
        "Explore GraphQL Schema Definition Language (SDL)",
        "Familiarize yourself with GraphQL types: Query, Mutation, Type, Enum, Input, etc."
      ]
    },
    {
      step: "Step 2: Set Up a GraphQL Server",
      items: [
        "Use Apollo Server or Express-GraphQL",
        "Define Schema and Resolvers",
        "Set Up Basic Queries and Mutations",
        "Run and Test with GraphQL Playground or Altair"
      ]
    },
    {
      step: "Step 3: Work with GraphQL Clients",
      items: [
        "Use Apollo Client for React, Angular, or Vue",
        "Understand Queries and Mutations in the Client",
        "Handle Caching and State Management",
        "Perform Error Handling and Loading States"
      ]
    },
    {
      step: "Step 4: Advanced GraphQL Features",
      items: [
        "Use Fragments to Share Query Parts",
        "Implement Aliases and Variables in Queries",
        "Work with Directives (@include, @skip)",
        "Explore Introspection Queries"
      ]
    },
    {
      step: "Step 5: Authentication and Authorization",
      items: [
        "Protect GraphQL APIs with JWT Authentication",
        "Use Context in Apollo Server for Auth",
        "Implement Role-Based Access in Resolvers"
      ]
    },
    {
      step: "Step 6: Connect GraphQL to Databases",
      items: [
        "Use Prisma ORM or TypeORM for Database Access",
        "Resolve Queries and Mutations with Database Operations",
        "Optimize N+1 Problems with DataLoader"
      ]
    },
    {
      step: "Step 7: GraphQL Subscriptions",
      items: [
        "Use WebSockets for Real-time Communication",
        "Set Up GraphQL Subscriptions on Server and Client",
        "Build Real-time Features (Chats, Notifications, etc.)"
      ]
    },
    {
      step: "Step 8: Testing and Error Handling",
      items: [
        "Write Tests for Queries and Resolvers",
        "Handle Errors Gracefully Using Error Boundaries",
        "Use GraphQL Mocking Tools for Testing"
      ]
    },
    {
      step: "Step 9: Deployment & Production Ready Setup",
      items: [
        "Deploy GraphQL Server on Heroku, AWS, or Vercel",
        "Monitor with Apollo Studio or GraphQL Voyager",
        "Secure API Access and Rate Limits"
      ]
    },
    {
      step: "Step 10: Explore GraphQL Ecosystem",
      items: [
        "Learn About GraphQL Federation and Schema Stitching",
        "Use Tools Like Hasura or PostGraphile for Auto-Generated APIs",
        "Explore Serverless GraphQL with AWS AppSync",
        "Contribute to Open Source GraphQL Projects"
      ]
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">GraphQL Developer Roadmap</h1>
      <p className="frontend-description">
        Follow these steps to master GraphQL for building flexible, real-time APIs and efficient frontend data fetching.
      </p>

      {steps.map((section, index) => (
        <div key={index} className="frontend-section">
          <h2 className="frontend-step-title">{section.step}</h2>
          <ul className="frontend-list">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
