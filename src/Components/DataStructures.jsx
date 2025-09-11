import React from "react";
import "./Frontend.css";

export default function DataStructures() {
  const steps = [
    {
      title: "Step 1: Foundations of Algorithms",
      items: [
        "Understand time and space complexity (Big O notation).",
        "Learn how to analyze the performance of algorithms.",
        "Start with basic recursion and iteration concepts.",
        "Master fundamental problem-solving approaches like divide & conquer and greedy algorithms."
      ],
    },
    {
      title: "Step 2: Core Data Structures",
      items: [
        "Arrays and Strings: traversal, manipulation, sorting.",
        "Linked Lists: singly and doubly linked lists.",
        "Stacks and Queues: LIFO & FIFO operations.",
        "Hash Tables: collisions, hash functions, and use cases.",
        "Trees: binary trees, binary search trees (BST), and tree traversal algorithms."
      ],
    },
    {
      title: "Step 3: Advanced Data Structures",
      items: [
        "Graphs: representation (adjacency list/matrix), BFS, DFS.",
        "Heaps and Priority Queues.",
        "Tries: efficient string storage and search.",
        "Segment Trees and Fenwick Trees for range queries.",
        "Disjoint Sets (Union-Find)."
      ],
    },
    {
      title: "Step 4: Common Algorithms",
      items: [
        "Sorting: Bubble, Merge, Quick, Heap, Insertion, Selection sorts.",
        "Searching: Linear search, Binary search.",
        "Dynamic Programming (DP): memoization and tabulation.",
        "Backtracking algorithms (N-Queens, Sudoku Solver).",
        "Greedy Algorithms: coin change, activity selection."
      ],
    },
    {
      title: "Step 5: Competitive Programming & Practice",
      items: [
        "Solve problems on platforms like LeetCode, Codeforces, HackerRank, and GeeksforGeeks.",
        "Practice system design interviews to combine algorithms with real-world scenarios.",
        "Participate in contests to improve speed and problem-solving under pressure.",
        "Learn patterns like sliding window, two pointers, prefix sums, etc.",
        "Study algorithms used in system design: consistent hashing, caching, load balancing."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Data Structures & Algorithms Roadmap</h1>
      <p className="frontend-description">
        A step-by-step roadmap to master Data Structures & Algorithms for technical interviews and real-world problem-solving.
      </p>

      {steps.map((section, index) => (
        <div key={index} className="frontend-section">
          <h2 className="frontend-step-title">{section.title}</h2>
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
